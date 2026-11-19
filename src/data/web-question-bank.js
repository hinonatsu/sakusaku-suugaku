import { trialQuestionBank, trialQuestionBankMeta } from "./trial-questions.js";

export const questionBankMeta = {
  total: trialQuestionBankMeta.total,
  eligible: trialQuestionBankMeta.total,
  gradeCounts: trialQuestionBankMeta.gradeCounts
};

export function createQuestionPool() {
  return trialQuestionBank.map((question) => ({
    ...question,
    eligible: true,
    choices: [...question.choices],
    interaction: question.interaction ? structuredClone(question.interaction) : null
  }));
}
