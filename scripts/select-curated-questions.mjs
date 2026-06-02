import { readFile, writeFile } from "node:fs/promises";

const sources = [
  {
    file: "C:/Users/ntksh/Downloads/1questions.csv",
    grade: "中1",
    prefix: "g7"
  },
  {
    file: "C:/Users/ntksh/Downloads/questions_g8.csv",
    grade: "中2",
    prefix: "g8"
  },
  {
    file: "C:/Users/ntksh/Downloads/questions_g9.csv",
    grade: "中3",
    prefix: "g9"
  }
];

const targetPerGrade = new Map([
  ["中1", 34],
  ["中2", 33],
  ["中3", 33]
]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell.replace(/\r$/, ""));
    rows.push(row);
  }

  return rows.filter((cells) => cells.some((value) => value.trim()));
}

function normalizeHeaders(headers) {
  const seen = new Map();
  return headers.map((header) => {
    const count = seen.get(header) ?? 0;
    seen.set(header, count + 1);
    return count === 0 ? header : `${header}_${count + 1}`;
  });
}

function rowToObject(headers, row) {
  return Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""]));
}

function splitChoices(choices) {
  return String(choices)
    .split(/§§|ﾂｧﾂｧ/)
    .map((choice) => choice.trim())
    .filter(Boolean);
}

function normalizeAnswer(text) {
  return String(text).replace(/\s+/g, "").toLowerCase();
}

function hasTemplateSyntax(text) {
  return /\{[a-d]\}|\[\[num:/.test(text);
}

function hasUnsafeText(text) {
  return (
    !text.trim() ||
    text.includes("�") ||
    text.includes("ﾂｧ") ||
    text.length > 120 ||
    /<[^>]+>/.test(text)
  );
}

function isSafeCandidate(row) {
  if (row.questionType !== "multiple_choice") return false;
  if (row.generationType !== "fixed") return false;

  const choices = splitChoices(row.choices);
  if (choices.length !== 4) return false;
  if (new Set(choices.map(normalizeAnswer)).size !== 4) return false;
  if (!choices.some((choice) => normalizeAnswer(choice) === normalizeAnswer(row.answer))) return false;

  const visibleTexts = [row.questionText, row.answer, row.explanation, ...choices];
  if (visibleTexts.some(hasUnsafeText)) return false;
  if (visibleTexts.some(hasTemplateSyntax)) return false;
  if (choices.some((choice) => choice.length > 44)) return false;

  return true;
}

function toNumber(value, fallback = 1) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function makeQuestion(row, source) {
  const choices = splitChoices(row.choices);
  return {
    id: row.questionId,
    grade: source.grade,
    unit: row.unitId,
    skill: row.errorTags || row.lessonId,
    difficulty: toNumber(row.difficulty),
    question: row.questionText.trim(),
    choices,
    answerIndex: choices.findIndex((choice) => normalizeAnswer(choice) === normalizeAnswer(row.answer)),
    explanation: row.explanation.trim(),
    estimatedTimeSec: toNumber(row.recommendedSeconds, 30),
    tags: [source.prefix, source.grade, row.unitId, row.lessonId, row.errorTags].filter(Boolean)
  };
}

function takeBalancedByUnit(candidates, count) {
  const selected = [];
  const usedUnits = new Set();

  for (const candidate of candidates) {
    if (selected.length >= count) break;
    if (usedUnits.has(candidate.unit)) continue;
    selected.push(candidate);
    usedUnits.add(candidate.unit);
  }

  for (const candidate of candidates) {
    if (selected.length >= count) break;
    if (selected.some((question) => question.id === candidate.id)) continue;
    selected.push(candidate);
  }

  return selected;
}

const selected = [];

for (const source of sources) {
  const csv = await readFile(source.file, "utf8");
  const rows = parseCsv(csv);
  const headers = normalizeHeaders(rows[0]);
  const candidates = rows
    .slice(1)
    .map((row) => rowToObject(headers, row))
    .filter(isSafeCandidate)
    .map((row) => makeQuestion(row, source))
    .filter((question) => question.answerIndex >= 0)
    .sort((a, b) => a.difficulty - b.difficulty || a.id.localeCompare(b.id));

  selected.push(...takeBalancedByUnit(candidates, targetPerGrade.get(source.grade)));
}

if (selected.length !== 100) {
  throw new Error(`Expected 100 curated questions, got ${selected.length}`);
}

const output = `const curatedQuestions = ${JSON.stringify(selected, null, 2)};

export function createQuestionPool() {
  return curatedQuestions.map((question) => ({
    ...question,
    choices: [...question.choices],
    tags: [...question.tags]
  }));
}

export const questions = createQuestionPool();
`;

await writeFile("src/data/questions.js", `${output}\n`, "utf8");
console.log(`Selected ${selected.length} verified CSV questions.`);
