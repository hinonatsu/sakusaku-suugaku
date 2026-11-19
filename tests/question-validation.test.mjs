import test from "node:test";
import assert from "node:assert/strict";

import { questionBankMeta, createQuestionPool } from "../src/data/web-question-bank.js";
import { applyQuestionOverride } from "../src/data/question-overrides.js";
import {
  isWebQuestionPlayable,
  inputAnswerSpec,
  normalizeMathText,
  questionValidationErrors,
  rendererType
} from "../src/question-validation.js";

const baseQuestion = {
  id: "test-question",
  grade: "中1",
  unit: "math.g7.test",
  unitName: "テスト",
  type: "number_input",
  question: "1+1は？",
  answer: "2",
  explanation: "1+1=2です。",
  choices: [],
  interaction: null,
  difficulty: 1,
  eligible: true
};

test("normalizes Japanese math symbols and superscripts", () => {
  assert.equal(normalizeMathText("（−2）×x²"), "(-2)*x^2");
});

test("rejects a choice question when the answer is absent", () => {
  const question = {
    ...baseQuestion,
    type: "multiple_choice",
    answer: "3",
    choices: ["1", "2", "4"]
  };
  assert.deepEqual(questionValidationErrors(question), ["answer-not-in-choices"]);
});

test("separates a unit from the value the learner enters", () => {
  const question = { ...baseQuestion, answer: "120円" };
  assert.deepEqual(inputAnswerSpec(question), { expectedInput: "120", unit: "円" });
  assert.equal(isWebQuestionPlayable(question), true);
});

test("accepts algebraic answers supported by the dynamic keyboard", () => {
  const question = {
    ...baseQuestion,
    type: "expression_transform",
    answer: "-2x^2+3y"
  };
  assert.equal(rendererType(question), "input");
  assert.equal(isWebQuestionPlayable(question), true);
});

test("known source errors are corrected by ID", () => {
  const corrected = applyQuestionOverride({
    ...baseQuestion,
    id: "textbook-sec1-practice-l002-q003",
    answer: "+2.4",
    explanation: "誤った説明"
  });
  assert.equal(corrected.answer, "+3.7");
  assert.match(corrected.explanation, /3\.7/);
});

test("the exported web pool contains only playable eligible questions", () => {
  const pool = createQuestionPool();
  const eligible = pool.filter((question) => question.eligible);
  assert.equal(eligible.length, questionBankMeta.eligible);
  assert.ok(eligible.length >= 300);
  assert.ok(eligible.every(isWebQuestionPlayable));
  for (const grade of ["中1", "中2", "中3"]) {
    assert.ok(eligible.filter((question) => question.grade === grade).length >= 30);
  }
});
