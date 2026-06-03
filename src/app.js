import { createQuestionPool } from "./data/questions.js";

const TRIAL_QUESTION_COUNT = 3;
const app = document.querySelector("#app");

const state = {
  questions: [],
  currentIndex: 0,
  selectedIndex: null,
  startedAt: 0,
  answers: []
};

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

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function sample(items, count) {
  return shuffled(items).slice(0, count);
}

function uniqueQuestionsByText(items) {
  const questions = new Map();
  for (const item of items) {
    const key = item.question.replace(/\s+/g, "");
    if (!questions.has(key)) questions.set(key, item);
  }
  return [...questions.values()];
}

function shuffleQuestionChoices(question) {
  const choices = question.choices.map((choice, index) => ({ choice, index }));
  const mixedChoices = shuffled(choices);

  return {
    ...question,
    choices: mixedChoices.map(({ choice }) => choice),
    answerIndex: mixedChoices.findIndex(({ index }) => index === question.answerIndex)
  };
}

function resetTrial() {
  const pool = uniqueQuestionsByText(
    createQuestionPool()
      .filter((question) => question.difficulty <= 2)
      .map(shuffleQuestionChoices)
  );

  state.questions = sample(pool, TRIAL_QUESTION_COUNT);
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.answers = [];
}

function progressLabel() {
  return `${state.currentIndex + 1}/${TRIAL_QUESTION_COUNT}`;
}

function renderHome() {
  app.innerHTML = `
    <section class="home-page">
      <div class="home-copy">
        <img class="home-icon" src="./assets/icon.png" alt="サクサク数学のアイコン" />
        <p class="eyebrow">中学数学をサクッと体験</p>
        <h1>3問だけ<br>試してみよう</h1>
        <p class="lead">スマホでテンポよく解ける、サクサク数学のミニ体験です。</p>
      </div>
      <div class="home-actions single-action">
        <button class="primary" data-action="start-trial">3問だけ試す</button>
      </div>
    </section>
  `;
  trackScreen("home");
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  const progress = ((state.currentIndex + 1) / TRIAL_QUESTION_COUNT) * 100;
  state.startedAt = performance.now();
  state.selectedIndex = null;

  app.innerHTML = `
    <section class="app-screen quiz-screen">
      <div class="app-content">
        <section class="quiz-page">
          <div class="quiz-head">
            <button class="round-close" data-action="home" aria-label="終了">×</button>
            <strong>${progressLabel()}</strong>
          </div>
          <div class="lesson-progress"><span style="width:${progress}%"></span></div>
          <div class="question-card">
            <h2>${question.question}</h2>
            <p class="hint">${hintFor(question.unit)}</p>
            <div class="choices">
              ${question.choices
                .map((choice, index) => `<button class="choice" data-answer="${index}">${choice}</button>`)
                .join("")}
            </div>
          </div>
          <button class="primary sticky-answer" data-action="confirm" disabled>この答えでOK</button>
        </section>
      </div>
    </section>
  `;

  trackScreen("trial_question");
}

function hintFor(unit) {
  if (unit.includes(".num.")) return "符号と数の大きさを確認しよう";
  if (unit.includes(".expr.")) return "式のルールを思い出そう";
  if (unit.includes(".eq.")) return "両辺に同じ操作をしよう";
  if (unit.includes(".func.")) return "式・表・グラフの関係を見よう";
  if (unit.includes(".geo.")) return "図形の性質を使おう";
  if (unit.includes(".stat.")) return "データの意味を確認しよう";
  return "落ち着いて選んでみよう";
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

  const question = state.questions[state.currentIndex];
  const elapsedSec = Math.round((performance.now() - state.startedAt) / 1000);
  const isCorrect = state.selectedIndex === question.answerIndex;

  state.answers.push({
    questionId: question.id,
    isCorrect,
    elapsedSec
  });

  renderFeedback(question, isCorrect);
}

function renderFeedback(question, isCorrect) {
  const selectedChoice = question.choices[state.selectedIndex];
  const correctChoice = question.choices[question.answerIndex];
  const progress = ((state.currentIndex + 1) / TRIAL_QUESTION_COUNT) * 100;

  app.innerHTML = `
    <section class="app-screen quiz-screen feedback-screen">
      <div class="app-content">
        <section class="quiz-page">
          <div class="quiz-head">
            <button class="round-close" data-action="home" aria-label="終了">×</button>
            <strong>${progressLabel()}</strong>
          </div>
          <div class="lesson-progress"><span style="width:${progress}%"></span></div>
          <div class="question-card">
            <h2>${question.question}</h2>
            <div class="choices review-choices">
              ${question.choices
                .map((choice, index) => {
                  const classes = [
                    "choice",
                    index === question.answerIndex ? "is-correct" : "",
                    index === state.selectedIndex && index !== question.answerIndex ? "is-wrong" : ""
                  ].join(" ");
                  return `<button class="${classes}" disabled>${choice}${index === question.answerIndex ? "<span>○</span>" : ""}</button>`;
                })
                .join("")}
            </div>
          </div>
          <div class="answer-panel ${isCorrect ? "correct" : "wrong"}">
            <span class="flag">${isCorrect ? "○" : "×"}</span>
            <h3>${isCorrect ? "正解！" : "おしい！"}</h3>
            <p>${isCorrect ? question.explanation : `選んだ答えは ${selectedChoice}。正解は ${correctChoice} です。${question.explanation}`}</p>
          </div>
          <button class="primary sticky-answer ${isCorrect ? "green" : ""}" data-action="next">
            ${state.currentIndex + 1 >= TRIAL_QUESTION_COUNT ? "結果を見る" : "次の問題へ"}
          </button>
        </section>
      </div>
    </section>
  `;

  trackScreen(isCorrect ? "feedback_correct" : "feedback_wrong");
}

function nextQuestion() {
  state.currentIndex += 1;

  if (state.currentIndex >= TRIAL_QUESTION_COUNT) {
    renderResult();
    return;
  }

  renderQuestion();
}

function renderResult() {
  const correctCount = state.answers.filter((answer) => answer.isCorrect).length;
  const totalSeconds = state.answers.reduce((sum, answer) => sum + answer.elapsedSec, 0);
  const rate = Math.round((correctCount / TRIAL_QUESTION_COUNT) * 100);

  app.innerHTML = `
    <section class="home-page result-page">
      <div class="home-copy">
        <img class="home-icon" src="./assets/icon.png" alt="サクサク数学のアイコン" />
        <p class="eyebrow">おつかれさま！</p>
        <h1>${correctCount}/${TRIAL_QUESTION_COUNT}問 正解</h1>
        <p class="lead">正答率 ${rate}%・かかった時間 ${totalSeconds}秒</p>
      </div>
      <div class="home-actions single-action">
        <button class="primary" data-action="start-trial">もう一度3問だけ試す</button>
      </div>
    </section>
  `;

  trackScreen("trial_result");
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-answer]");
  if (!target) return;

  if (target.dataset.action === "start-trial") {
    trackEvent("start_trial");
    resetTrial();
    renderQuestion();
    return;
  }

  if (target.dataset.action === "home") {
    renderHome();
    return;
  }

  if (target.dataset.action === "confirm") {
    confirmAnswer();
    return;
  }

  if (target.dataset.action === "next") {
    nextQuestion();
    return;
  }

  if (target.dataset.answer) {
    selectAnswer(Number(target.dataset.answer));
  }
});

renderHome();
