import { questionOverrides, applyQuestionOverride } from "../src/data/question-overrides.js";
import { questionBank } from "../src/data/questions.js";
import { isWebQuestionPlayable, rendererType, validationSummary } from "../src/question-validation.js";

const corrected = questionBank.map((question) => applyQuestionOverride(structuredClone(question)));
const candidates = corrected.filter((question) => question.eligible);
const playable = candidates.filter(isWebQuestionPlayable);
const summary = validationSummary(candidates);
const errors = [];

const duplicateIds = questionBank
  .map((question) => question.id)
  .filter((id, index, ids) => ids.indexOf(id) !== index);
if (duplicateIds.length) errors.push(`Duplicate question IDs: ${[...new Set(duplicateIds)].join(", ")}`);

for (const overrideId of Object.keys(questionOverrides)) {
  if (!questionBank.some((question) => question.id === overrideId)) {
    errors.push(`Override points to a missing question: ${overrideId}`);
  }
}

for (const grade of ["中1", "中2", "中3"]) {
  const gradeQuestions = playable.filter((question) => question.grade === grade && question.difficulty <= 2);
  const choiceCount = gradeQuestions.filter((question) => rendererType(question) === "choice").length;
  const inputCount = gradeQuestions.filter((question) => rendererType(question) === "input").length;
  if (gradeQuestions.length < 30) errors.push(`${grade}: fewer than 30 playable easy questions`);
  if (choiceCount < 3) errors.push(`${grade}: fewer than 3 playable choice questions`);
  if (inputCount < 3) errors.push(`${grade}: fewer than 3 playable input questions`);
}

console.log(JSON.stringify({ ...summary, overrides: Object.keys(questionOverrides).length }, null, 2));

if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Question bank is safe: ${playable.length} web-playable questions.`);
}
