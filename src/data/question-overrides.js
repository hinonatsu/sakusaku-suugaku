// The generated question bank is immutable. Corrections live here until the source CSV is updated.
export const questionOverrides = {
  "textbook-sec1-interactive-l001": {
    answer: "−3m"
  },
  "textbook-sec1-interactive-l002": {
    answer: "−6km",
    choices: ["−6km", "＋6km", "−2km", "0km"],
    interaction: {
      kind: "signedMeaningContext",
      cards: [{ label: "東へ進む", value: "+2km", symbol: "arrow.right" }],
      choices: [
        { label: "−6km", value: "-6" },
        { label: "＋6km", value: "6" },
        { label: "−2km", value: "-2" },
        { label: "0km", value: "0" }
      ]
    }
  },
  "textbook-sec1-practice-l002-q003": {
    answer: "+3.7",
    explanation: "0より3.7大きい数は+3.7と表します。"
  },
  "textbook-sec1-practice-l002-q005": {
    explanation: "自然数は正の整数なので、+6と25です。",
    eligible: true
  },
  "textbook-sec1-practice-l002-q006": {
    explanation: "0より小さい数は−1と−4.7です。",
    eligible: true
  }
};

export function applyQuestionOverride(question) {
  const override = questionOverrides[question.id];
  return override ? { ...question, ...structuredClone(override) } : question;
}
