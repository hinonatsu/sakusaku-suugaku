import { questions } from "./data/questions.js";

const APP_STORE_URL = "https://apps.apple.com/";
const app = document.querySelector("#app");

const state = {
  mode: null,
  queue: [],
  currentIndex: 0,
  startedAt: 0,
  answers: []
};

const screeningTags = [
  "fraction",
  "signed-number",
  "expression",
  "linear-equation",
  "proportion",
  "simultaneous-equation",
  "linear-function",
  "expansion"
];

function sample(items, count) {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

function getScreeningQuestions() {
  return screeningTags
    .map((tag) => questions.find((question) => question.tags.includes(tag)))
    .filter(Boolean);
}

function reset(mode) {
  state.mode = mode;
  state.currentIndex = 0;
  state.answers = [];
  state.queue =
    mode === "trial"
      ? sample(questions.filter((question) => question.difficulty <= 2), 5)
      : getScreeningQuestions();
}

function renderHome() {
  app.innerHTML = `
    <section class="home">
      <div class="brand-mark" aria-hidden="true">サ</div>
      <p class="eyebrow">中学数学を、スマホでサクサク。</p>
      <h1>サクサク数学</h1>
      <p class="lead">5問だけ試すか、2〜5分で今のつまずきをチェックできます。</p>

      <div class="mascot" aria-label="レッサーパンダのキャラクター表示エリア">
        <span aria-hidden="true">🦊</span>
        <p>今日の数学、軽くいこう。</p>
      </div>

      <div class="actions">
        <button class="primary" data-action="start-trial">5問だけ試す</button>
        <button class="secondary" data-action="start-check">2〜5分で数学力チェック</button>
      </div>

      <a class="store-link" href="${APP_STORE_URL}" target="_blank" rel="noreferrer">App Storeで続きを練習</a>
    </section>
  `;
}

function renderQuestion() {
  const question = state.queue[state.currentIndex];
  const total = state.mode === "trial" ? 5 : Math.max(state.queue.length, 10);
  const progress = Math.min(((state.currentIndex + 1) / total) * 100, 100);
  state.startedAt = performance.now();

  app.innerHTML = `
    <section class="quiz">
      <div class="quiz-top">
        <button class="ghost" data-action="home">終了</button>
        <span>${state.currentIndex + 1} / ${total}</span>
      </div>
      <div class="progress" aria-hidden="true"><span style="width:${progress}%"></span></div>
      <p class="unit">${question.grade}・${question.unit}</p>
      <h2>${question.question}</h2>
      <div class="choices">
        ${question.choices
          .map(
            (choice, index) =>
              `<button class="choice" data-answer="${index}">${choice}</button>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function answerQuestion(answerIndex) {
  const question = state.queue[state.currentIndex];
  const elapsedSec = Math.round((performance.now() - state.startedAt) / 1000);
  const isCorrect = answerIndex === question.answerIndex;
  const isSlow = elapsedSec > question.estimatedTimeSec * 1.6;

  state.answers.push({
    questionId: question.id,
    grade: question.grade,
    unit: question.unit,
    difficulty: question.difficulty,
    isCorrect,
    elapsedSec,
    selectedIndex: answerIndex,
    answerIndex: question.answerIndex,
    isSlow
  });

  maybeAddBranchQuestion(question, isCorrect, isSlow);
  renderFeedback(question, answerIndex, isCorrect);
}

function maybeAddBranchQuestion(question, isCorrect, isSlow) {
  if (state.mode !== "check") return;
  if (state.queue.length >= 15) return;
  if (isCorrect && !isSlow) return;

  const next = questions.find(
    (candidate) =>
      candidate.unit === question.unit &&
      candidate.id !== question.id &&
      !state.queue.some((queued) => queued.id === candidate.id)
  );

  if (next) {
    state.queue.push(next);
  }
}

function renderFeedback(question, answerIndex, isCorrect) {
  const correctChoice = question.choices[question.answerIndex];
  const selectedChoice = question.choices[answerIndex];

  app.innerHTML = `
    <section class="feedback ${isCorrect ? "correct" : "incorrect"}">
      <p class="result-label">${isCorrect ? "正解！" : "惜しい！"}</p>
      <h2>${isCorrect ? correctChoice : `正解は ${correctChoice}`}</h2>
      <p class="selected">選んだ答え：${selectedChoice}</p>
      <p class="explanation">${question.explanation}</p>
      <button class="primary" data-action="next">次へ</button>
    </section>
  `;
}

function nextQuestion() {
  state.currentIndex += 1;

  if (state.mode === "trial" && state.currentIndex >= 5) {
    renderTrialResult();
    return;
  }

  if (state.mode === "check" && shouldFinishCheck()) {
    renderCheckResult();
    return;
  }

  renderQuestion();
}

function shouldFinishCheck() {
  if (state.currentIndex < state.queue.length) return false;
  return state.answers.length >= 10 || state.queue.length >= 15;
}

function scoreAnswer(answer) {
  if (answer.isCorrect && !answer.isSlow) return 2;
  if (answer.isCorrect && answer.isSlow) return 1;
  if (!answer.isCorrect && !answer.isSlow) return -3;
  return -2;
}

function summarizeUnits() {
  const scores = new Map();

  for (const answer of state.answers) {
    scores.set(answer.unit, (scores.get(answer.unit) ?? 0) + scoreAnswer(answer));
  }

  const entries = [...scores.entries()].sort((a, b) => b[1] - a[1]);
  return {
    stable: entries.filter(([, score]) => score >= 2).map(([unit]) => unit),
    unstable: entries.filter(([, score]) => score < 2).map(([unit]) => unit)
  };
}

function estimateLevel() {
  const correctByGrade = new Map();
  const totalByGrade = new Map();

  for (const answer of state.answers) {
    totalByGrade.set(answer.grade, (totalByGrade.get(answer.grade) ?? 0) + 1);
    if (answer.isCorrect) {
      correctByGrade.set(answer.grade, (correctByGrade.get(answer.grade) ?? 0) + 1);
    }
  }

  const gradeOrder = ["小学校高学年", "中1", "中2", "中3"];
  let reached = "小学校高学年〜中1準備";

  for (const grade of gradeOrder) {
    const total = totalByGrade.get(grade) ?? 0;
    const correct = correctByGrade.get(grade) ?? 0;
    if (total > 0 && correct / total >= 0.65) {
      reached = grade === "中3" ? "中3前半" : `${grade}後半`;
    }
  }

  return reached;
}

function weaknessType(unstableUnits) {
  if (unstableUnits.some((unit) => unit.includes("正負"))) return "符号ミス型";
  if (unstableUnits.some((unit) => unit.includes("文字式"))) return "文字式あいまい型";
  if (unstableUnits.some((unit) => unit.includes("方程式"))) return "方程式あと一歩型";
  if (unstableUnits.some((unit) => unit.includes("関数") || unit.includes("比例"))) {
    return "関数・グラフ苦手型";
  }
  if (state.answers.some((answer) => answer.isSlow)) return "計算スピード確認型";
  return "基礎安定型";
}

function renderTrialResult() {
  const correctCount = state.answers.filter((answer) => answer.isCorrect).length;
  const { unstable } = summarizeUnits();
  const recommended = unstable[0] ?? "一次方程式";
  const comment =
    correctCount >= 4
      ? "基礎はかなり安定しています。"
      : correctCount >= 2
        ? "解ける単元が見えてきています。"
        : "まずは短い計算からゆっくり整えていきましょう。";

  renderResult({
    title: `5問中${correctCount}問正解！`,
    rows: [
      ["ひとこと", comment],
      ["おすすめ単元", recommended],
      ["次の一歩", "アプリで短い反復練習を続けられます。"]
    ]
  });
}

function renderCheckResult() {
  const { stable, unstable } = summarizeUnits();
  const nextUnit = unstable[0] ?? "計算の基礎";

  renderResult({
    title: `今回の到達目安：${estimateLevel()}`,
    rows: [
      ["安定している単元", stable.slice(0, 3).join("、") || "今回はまだ判定中"],
      ["不安定な単元", unstable.slice(0, 3).join("、") || "大きなつまずきは少なめ"],
      ["苦手タイプ", weaknessType(unstable)],
      ["次にやるべき単元", nextUnit]
    ]
  });
}

function renderResult({ title, rows }) {
  localStorage.setItem(
    "sakusaku:lastResult",
    JSON.stringify({ title, rows, savedAt: new Date().toISOString() })
  );

  app.innerHTML = `
    <section class="result">
      <p class="eyebrow">結果</p>
      <h2>${title}</h2>
      <dl>
        ${rows.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("")}
      </dl>
      <div class="actions">
        <button class="primary" data-action="home">トップへ戻る</button>
        <a class="secondary as-button" href="${APP_STORE_URL}" target="_blank" rel="noreferrer">アプリで続きを練習</a>
      </div>
    </section>
  `;
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-answer]");
  if (!target) return;

  if (target.dataset.action === "start-trial") {
    reset("trial");
    renderQuestion();
  }

  if (target.dataset.action === "start-check") {
    reset("check");
    renderQuestion();
  }

  if (target.dataset.action === "home") {
    renderHome();
  }

  if (target.dataset.action === "next") {
    nextQuestion();
  }

  if (target.dataset.answer) {
    answerQuestion(Number(target.dataset.answer));
  }
});

renderHome();
