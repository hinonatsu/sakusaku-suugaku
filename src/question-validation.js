const CHOICE_TYPES = new Set([
  "multiple_choice",
  "signed_number_interaction",
  "expression_visual"
]);

const INPUT_TYPES = new Set(["number_input", "expression_transform"]);
const INPUT_ANSWER_PATTERN = /^[0-9a-z+\-*/.^()=π√]+$/i;
const UNIT_SUFFIX_PATTERN = /^(.*?)(cm\^[23]|km|mm|kg|cm|m|g|l|円|時間|分|秒|角形|℃|°)$/i;

export function normalizeMathText(value = "") {
  return String(value)
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .normalize("NFKC")
    .replace(/[−ー]/g, "-")
    .replace(/＋/g, "+")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/[，、]/g, ",")
    .replace(/（/g, "(")
    .replace(/）/g, ")")
    .replace(/\s+/g, "")
    .toLowerCase();
}

export function rendererType(question) {
  if (CHOICE_TYPES.has(question.type)) {
    return question.choices?.length >= 2 ? "choice" : "input";
  }
  if (INPUT_TYPES.has(question.type)) return "input";
  if (question.type === "table_fill") return "table";
  if (["graph_point", "graph_plot"].includes(question.type)) return "graph";
  if (question.type === "step_ordering") return "steps";
  return "unsupported";
}

export function inputAnswerSpec(question) {
  const normalized = normalizeMathText(question.answer);
  const unitMatch = normalized.match(UNIT_SUFFIX_PATTERN);
  if (!unitMatch || !/\d/.test(unitMatch[1])) {
    return { expectedInput: normalized, unit: "" };
  }
  return {
    expectedInput: unitMatch[1],
    unit: unitMatch[2].replace("^2", "²").replace("^3", "³")
  };
}

function choiceContainsAnswer(question) {
  const expected = normalizeMathText(question.answer);
  return question.choices.some((choice) => normalizeMathText(choice) === expected);
}

function inputAnswerIsTypeable(question) {
  const answer = inputAnswerSpec(question).expectedInput;
  return Boolean(answer) && !answer.includes("§§") && INPUT_ANSWER_PATTERN.test(answer);
}

function tableIsComplete(question) {
  const rows = question.interaction?.rows;
  if (!Array.isArray(rows)) return false;
  const blankCount = rows.flat().filter((cell) => cell === "□").length;
  return blankCount > 0 && blankCount === String(question.answer).split("§§").length;
}

function graphIsComplete(question) {
  const data = question.interaction;
  if (![data?.xMin, data?.xMax, data?.yMin, data?.yMax].every(Number.isFinite)) return false;
  return String(question.answer)
    .split("§§")
    .every((point) => {
      const [x, y] = point.split(",").map(Number);
      return (
        Number.isFinite(x) &&
        Number.isFinite(y) &&
        x >= data.xMin &&
        x <= data.xMax &&
        y >= data.yMin &&
        y <= data.yMax
      );
    });
}

function stepsAreComplete(question) {
  return Array.isArray(question.interaction?.steps) && question.interaction.steps.length >= 2;
}

export function questionValidationErrors(question) {
  const errors = [];
  if (!question?.id) errors.push("missing-id");
  if (!question?.question?.trim()) errors.push("missing-question");
  if (!String(question?.answer ?? "").trim()) errors.push("missing-answer");
  if (!question?.explanation?.trim()) errors.push("missing-explanation");

  switch (rendererType(question)) {
    case "choice":
      if (!choiceContainsAnswer(question)) errors.push("answer-not-in-choices");
      break;
    case "input":
      if (!inputAnswerIsTypeable(question)) errors.push("answer-not-typeable");
      break;
    case "table":
      if (!tableIsComplete(question)) errors.push("invalid-table");
      break;
    case "graph":
      if (!graphIsComplete(question)) errors.push("invalid-graph");
      break;
    case "steps":
      if (!stepsAreComplete(question)) errors.push("invalid-steps");
      break;
    default:
      errors.push("unsupported-renderer");
  }

  return errors;
}

export function isWebQuestionPlayable(question) {
  return questionValidationErrors(question).length === 0;
}

export function validationSummary(questions) {
  const rejectedByReason = {};
  let playable = 0;
  for (const question of questions) {
    const errors = questionValidationErrors(question);
    if (errors.length === 0) {
      playable += 1;
      continue;
    }
    for (const error of errors) rejectedByReason[error] = (rejectedByReason[error] ?? 0) + 1;
  }
  return { total: questions.length, playable, rejected: questions.length - playable, rejectedByReason };
}
