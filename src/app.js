import { questions } from "./data/questions.js";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/サクサク数学-中学生1年生向けスキマ時間数学アプリ/id6764301338";
const app = document.querySelector("#app");

const state = {
  mode: null,
  queue: [],
  currentIndex: 0,
  startedAt: 0,
  selectedIndex: null,
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

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

function trackScreen(screenName) {
  trackEvent("screen_view", {
    app_name: "sakusaku_suugaku_web",
    screen_name: screenName
  });
}


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
  state.selectedIndex = null;
  state.answers = [];
  state.queue =
    mode === "trial"
      ? sample(questions.filter((question) => question.difficulty <= 2), 5)
      : getScreeningQuestions();
}

function appFrame(content, active = "home", screenClass = "") {
  return `
    <section class="app-screen ${screenClass}">
      <header class="app-header">
        <button class="brand-button" data-action="home">
          <img src="./assets/icon.png" alt="" />
          <span>サクサク数学</span>
        </button>
      </header>
      <div class="app-content">${content}</div>
      <nav class="tab-bar" aria-label="メインナビゲーション">
        ${tabButton("home", "⌂", "ホーム", active)}
        ${tabButton("review", "↻", "解き直し", active, "3")}
        ${tabButton("goal", "◎", "目標", active)}
        ${tabButton("profile", "●", "プロフィール", active)}
      </nav>
    </section>
  `;
}

function tabButton(id, icon, label, active, badge = "") {
  return `
    <button class="tab-item ${active === id ? "is-active" : ""}" data-action="tab-${id}">
      <span class="tab-icon">${icon}${badge ? `<em>${badge}</em>` : ""}</span>
      <span>${label}</span>
    </button>
  `;
}

function renderHome() {
  app.innerHTML = `
    <section class="home-page">
      <div class="home-copy">
        <img class="home-icon" src="./assets/icon.png" alt="サクサク数学のアイコン" />
        <p class="eyebrow">中学数学を、スマホでサクサク。</p>
        <h1>毎日の数学を<br>もっとワクワクに</h1>
        <p class="lead">5問だけ試すか、2〜5分で今のつまずきをチェックできます。</p>
      </div>
      <div class="home-actions">
        <button class="primary" data-action="start-trial">5問だけ試す</button>
        <button class="secondary" data-action="start-check">2〜5分で数学力チェック</button>
        <a class="primary store-cta home-store-cta" data-action="store-click" href="${APP_STORE_URL}" target="_blank" rel="noreferrer">iOSアプリで続きを練習</a>
      </div>
    </section>
  `;
  trackScreen("home");
}

function renderQuestion() {
  const question = state.queue[state.currentIndex];
  const total = state.mode === "trial" ? 5 : Math.max(state.queue.length, 10);
  const progress = Math.min(((state.currentIndex + 1) / total) * 100, 100);
  state.startedAt = performance.now();
  state.selectedIndex = null;

  const content = `
    <section class="quiz-page">
      <div class="quiz-head">
        <button class="round-close" data-action="home" aria-label="終了">×</button>
        <strong>${state.currentIndex + 1}/${total}</strong>
      </div>
      <div class="lesson-progress"><span style="width:${progress}%"></span></div>
      <div class="question-card">
        <h2>${question.question}</h2>
        <p class="hint">💡 見るポイント：${hintFor(question.unit)}</p>
        <div class="choices">
          ${question.choices
            .map((choice, index) => `<button class="choice" data-answer="${index}">${choice}</button>`)
            .join("")}
        </div>
      </div>
      <button class="primary sticky-answer" data-action="confirm" disabled>この答えでOK</button>
    </section>
  `;

  app.innerHTML = appFrame(content, "home", "quiz-screen");
  trackScreen(state.mode === "trial" ? "trial_question" : "check_question");
}

function hintFor(unit) {
  if (unit.includes("正負")) return "符号を最後にもう一度確認";
  if (unit.includes("文字式")) return "同じ文字どうしをまとめる";
  if (unit.includes("方程式")) return "両辺に同じ操作をする";
  if (unit.includes("関数") || unit.includes("比例")) return "式の形と係数を見る";
  if (unit.includes("分数")) return "分母をそろえる";
  return "選ぶ前に1回だけ見直す";
}

function selectAnswer(answerIndex) {
  state.selectedIndex = answerIndex;
  document.querySelectorAll(".choice").forEach((button) => {
    button.classList.toggle("is-selected", Number(button.dataset.answer) === answerIndex);
  });
  document.querySelector(".sticky-answer")?.removeAttribute("disabled");
}

function confirmAnswer() {
  if (state.selectedIndex === null) return;
  const question = state.queue[state.currentIndex];
  const elapsedSec = Math.round((performance.now() - state.startedAt) / 1000);
  const isCorrect = state.selectedIndex === question.answerIndex;
  const isSlow = elapsedSec > question.estimatedTimeSec * 1.6;

  state.answers.push({
    questionId: question.id,
    grade: question.grade,
    unit: question.unit,
    difficulty: question.difficulty,
    isCorrect,
    elapsedSec,
    selectedIndex: state.selectedIndex,
    answerIndex: question.answerIndex,
    isSlow
  });

  maybeAddBranchQuestion(question, isCorrect, isSlow);
  renderFeedback(question, isCorrect);
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

  if (next) state.queue.push(next);
}

function renderFeedback(question, isCorrect) {
  const selectedChoice = question.choices[state.selectedIndex];
  const correctChoice = question.choices[question.answerIndex];
  const progress = Math.min(((state.currentIndex + 1) / (state.mode === "trial" ? 5 : 10)) * 100, 100);

  const content = `
    <section class="quiz-page feedback-page">
      <div class="quiz-head">
        <button class="round-close" data-action="home" aria-label="終了">×</button>
        <strong>${state.currentIndex + 1}/${state.mode === "trial" ? 5 : 10}</strong>
      </div>
      <div class="lesson-progress"><span style="width:${progress}%"></span></div>
      <div class="question-card">
        <h2>${question.question}</h2>
        <p class="hint">💡 見るポイント：${hintFor(question.unit)}</p>
        <div class="choices review-choices">
          ${question.choices
            .map((choice, index) => {
              const classes = [
                "choice",
                index === question.answerIndex ? "is-correct" : "",
                index === state.selectedIndex && index !== question.answerIndex ? "is-wrong" : ""
              ].join(" ");
              return `<button class="${classes}" disabled>${choice}${index === question.answerIndex ? "<span>✓</span>" : ""}</button>`;
            })
            .join("")}
        </div>
      </div>
      <div class="answer-panel ${isCorrect ? "correct" : "wrong"}">
        <span class="flag">⚑</span>
        <h3>${isCorrect ? "正解！" : "惜しい！"}</h3>
        <p>${isCorrect ? question.explanation : `選んだ答えは ${selectedChoice}。正解は ${correctChoice} です。${question.explanation}`}</p>
        <div class="point-box">
          <strong>できたポイント</strong>
          <span>${isCorrect ? "解き方の形をつかめています。" : "見直しで伸ばせる問題です。"}</span>
        </div>
      </div>
      <button class="primary sticky-answer ${isCorrect ? "green" : ""}" data-action="next">${isCorrect ? "次の問題へ" : "次へ進む"}</button>
    </section>
  `;

  app.innerHTML = appFrame(content, "home", "quiz-screen feedback-screen");
  trackScreen(isCorrect ? "feedback_correct" : "feedback_wrong");
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
    if (answer.isCorrect) correctByGrade.set(answer.grade, (correctByGrade.get(answer.grade) ?? 0) + 1);
  }

  const gradeOrder = ["小学校高学年", "中1", "中2", "中3"];
  let reached = "小学校高学年〜中1準備";

  for (const grade of gradeOrder) {
    const total = totalByGrade.get(grade) ?? 0;
    const correct = correctByGrade.get(grade) ?? 0;
    if (total > 0 && correct / total >= 0.65) reached = grade === "中3" ? "中3前半" : `${grade}後半`;
  }

  return reached;
}

function weaknessType(unstableUnits) {
  if (unstableUnits.some((unit) => unit.includes("正負"))) return "符号ミス型";
  if (unstableUnits.some((unit) => unit.includes("文字式"))) return "文字式あいまい型";
  if (unstableUnits.some((unit) => unit.includes("方程式"))) return "方程式あと一歩型";
  if (unstableUnits.some((unit) => unit.includes("関数") || unit.includes("比例"))) return "関数・グラフ苦手型";
  if (state.answers.some((answer) => answer.isSlow)) return "計算スピード確認型";
  return "基礎安定型";
}

function renderTrialResult() {
  const correctCount = state.answers.filter((answer) => answer.isCorrect).length;
  const { unstable } = summarizeUnits();
  const recommended = unstable[0] ?? "一次方程式";

  renderReport({
    title: "学習レポート",
    summary: correctCount >= 4 ? "基礎はかなり安定しています。" : "短い復習で伸ばせる単元があります。",
    rows: [
      ["連続学習", "1日"],
      ["合計EXP", `${correctCount * 120 + 26}`],
      ["解いた問題", `${state.answers.length}`],
      ["正答率", `${Math.round((correctCount / state.answers.length) * 100)}%`]
    ],
    memoTitle: "苦手メモ",
    memo: `${recommended}を短く解き直すと伸びやすいです。`
  });
}

function renderCheckResult() {
  const { stable, unstable } = summarizeUnits();
  renderReport({
    title: "学習レポート",
    summary: `今回の到達目安は ${estimateLevel()} です。`,
    rows: [
      ["安定", stable[0] ?? "確認中"],
      ["到達目安", estimateLevel()],
      ["苦手タイプ", weaknessType(unstable)],
      ["正答率", `${Math.round((state.answers.filter((answer) => answer.isCorrect).length / state.answers.length) * 100)}%`]
    ],
    memoTitle: "苦手メモ",
    memo: unstable.length ? `${unstable[0]}から復習するのがおすすめです。` : "大きなつまずきは少なめです。"
  });
}

function renderReport({ title, summary, rows, memoTitle, memo }) {
  localStorage.setItem("sakusaku:lastResult", JSON.stringify({ title, rows, savedAt: new Date().toISOString() }));

  const content = `
    <section class="report-page">
      <button class="back-button" data-action="home" aria-label="戻る">‹</button>
      <h2>${title}</h2>
      <div class="stat-card">
        ${rows
          .map(
            ([key, value], index) => `
              <div>
                <span class="stat-icon">${["♨", "⚡", "▤", "✓"][index] ?? "✓"}</span>
                <strong>${value}</strong>
                <small>${key}</small>
              </div>`
          )
          .join("")}
      </div>
      <article class="soft-card">
        <span class="mini-icon">✦</span>
        <h3>今のまとめ</h3>
        <p>${summary}</p>
      </article>
      <article class="note-card">
        <span class="mini-icon green">✓</span>
        <h3>${memoTitle}</h3>
        <p>${memo}</p>
      </article>
      <h3 class="section-heading">単元別レポート</h3>
      <p class="section-lead">単元ごとの完了数と正答率を確認できます</p>
      <article class="unit-card">
        <strong>${rows[0][1] === "確認中" ? "正負の数" : rows[0][1]}</strong>
        <span>完了</span>
      </article>
      <a class="primary store-cta" data-action="store-click" href="${APP_STORE_URL}" target="_blank" rel="noreferrer">iOSアプリで続きを練習</a>
    </section>
  `;

  app.innerHTML = appFrame(content, "profile");
  trackScreen("report");
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-answer]");
  if (!target) return;

  if (target.dataset.action === "start-trial") {
    trackEvent("start_trial");
    reset("trial");
    renderQuestion();
  }

  if (target.dataset.action === "start-check") {
    trackEvent("start_check");
    reset("check");
    renderQuestion();
  }

  if (target.dataset.action === "store-click") {
    trackEvent("store_click", {
      link_url: APP_STORE_URL
    });
  }

  if (target.dataset.action === "home" || target.dataset.action?.startsWith("tab-")) {
    renderHome();
  }

  if (target.dataset.action === "confirm") {
    confirmAnswer();
  }

  if (target.dataset.action === "next") {
    nextQuestion();
  }

  if (target.dataset.answer) {
    selectAnswer(Number(target.dataset.answer));
  }
});

renderHome();
