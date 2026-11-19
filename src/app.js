import { createQuestionPool, questionBankMeta } from "./data/web-question-bank.js";
import { inputAnswerSpec, normalizeMathText, rendererType } from "./question-validation.js";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/%E3%82%B5%E3%82%AF%E3%82%B5%E3%82%AF%E6%95%B0%E5%AD%A6-%E4%B8%AD%E5%AD%A6%E7%94%9F%E5%90%91%E3%81%91%E3%82%B9%E3%82%AD%E3%83%9E%E6%99%82%E9%96%93%E6%95%B0%E5%AD%A6%E3%82%A2%E3%83%97%E3%83%AA/id6764301338";
const APP_STORE_BADGE_URL =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83";
const TRIAL_QUESTION_COUNT = 3;
const app = document.querySelector("#app");
const allQuestions = createQuestionPool();

const state = {
  grade: "中1",
  questions: [],
  currentIndex: 0,
  answers: [],
  startedAt: 0,
  draft: null
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function track(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      app_name: "sakusaku_suugaku_web",
      ...params
    });
  }
}

function shuffled(items) {
  const copied = [...items];
  for (let index = copied.length - 1; index > 0; index -= 1) {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % (index + 1);
    [copied[index], copied[randomIndex]] = [copied[randomIndex], copied[index]];
  }
  return copied;
}

function evaluateArithmetic(value) {
  const normalized = normalizeMathText(value);
  if (!normalized || /[^0-9+\-*/().]/.test(normalized)) return null;
  let position = 0;

  const parseExpression = () => {
    let number = parseTerm();
    while (normalized[position] === "+" || normalized[position] === "-") {
      const operator = normalized[position++];
      const next = parseTerm();
      number = operator === "+" ? number + next : number - next;
    }
    return number;
  };
  const parseTerm = () => {
    let number = parseFactor();
    while (normalized[position] === "*" || normalized[position] === "/") {
      const operator = normalized[position++];
      const next = parseFactor();
      if (operator === "/" && next === 0) throw new Error("division by zero");
      number = operator === "*" ? number * next : number / next;
    }
    return number;
  };
  const parseFactor = () => {
    if (normalized[position] === "+" || normalized[position] === "-") {
      const operator = normalized[position++];
      const number = parseFactor();
      return operator === "-" ? -number : number;
    }
    if (normalized[position] === "(") {
      position += 1;
      const number = parseExpression();
      if (normalized[position] !== ")") throw new Error("missing parenthesis");
      position += 1;
      return number;
    }
    const match = normalized.slice(position).match(/^(?:\d+(?:\.\d+)?|\.\d+)/);
    if (!match) throw new Error("expected number");
    position += match[0].length;
    return Number(match[0]);
  };

  try {
    const result = parseExpression();
    return position === normalized.length && Number.isFinite(result) ? result : null;
  } catch {
    return null;
  }
}

function answersMatch(input, answer, requirement = "value_equivalent") {
  const entered = normalizeMathText(input);
  const expected = normalizeMathText(answer);
  if (!entered) return false;
  if (requirement === "explicit_positive_sign" && !entered.startsWith("+")) return false;
  if (entered === expected) return true;
  if (requirement === "standard_algebraic_form") return false;
  const inputValue = evaluateArithmetic(entered);
  const answerValue = evaluateArithmetic(expected);
  return inputValue !== null && answerValue !== null && Math.abs(inputValue - answerValue) < 1e-9;
}

function displayAnswer(answer) {
  return escapeHtml(String(answer).replaceAll("§§", "、").replaceAll("-", "−"));
}

function isEligibleQuestion(question) {
  return question.eligible;
}

function takeQuestion(candidates, excludedIds, excludedUnits, preferredKind) {
  const eligible = candidates.filter(
    (question) =>
      !excludedIds.has(question.id) &&
      !excludedUnits.has(question.unit) &&
      (!preferredKind || rendererType(question) === preferredKind)
  );
  const fallback = candidates.filter(
    (question) => !excludedIds.has(question.id) && (!preferredKind || rendererType(question) === preferredKind)
  );
  return shuffled(eligible.length ? eligible : fallback)[0] ?? null;
}

function createTrial() {
  const gradePool = allQuestions.filter(
    (question) => isEligibleQuestion(question) && question.grade === state.grade
  );
  const fallbackPool = allQuestions.filter(isEligibleQuestion);
  const basePool = gradePool.length >= TRIAL_QUESTION_COUNT ? gradePool : fallbackPool;
  const easier = basePool.filter((question) => question.difficulty <= 2);
  const selected = [];
  const usedIds = new Set();
  const usedUnits = new Set();
  const availableKinds = [...new Set(easier.map(rendererType))];
  const interactionKind = shuffled(
    availableKinds.filter((kind) => !["choice", "input"].includes(kind))
  )[0];
  const wantedKinds = ["choice", "input", interactionKind ?? shuffled(availableKinds)[0]];

  for (const kind of wantedKinds) {
    const question = takeQuestion(easier, usedIds, usedUnits, kind);
    if (!question) continue;
    selected.push(question);
    usedIds.add(question.id);
    usedUnits.add(question.unit);
  }

  while (selected.length < TRIAL_QUESTION_COUNT) {
    const question = takeQuestion(basePool, usedIds, usedUnits);
    if (!question) break;
    selected.push(question);
    usedIds.add(question.id);
    usedUnits.add(question.unit);
  }

  state.questions = selected.slice(0, TRIAL_QUESTION_COUNT);
  state.currentIndex = 0;
  state.answers = [];
  state.draft = null;
}

function quizHeader() {
  const progress = ((state.currentIndex + 1) / TRIAL_QUESTION_COUNT) * 100;
  return `
    <header class="quiz-header">
      <button class="icon-button" type="button" data-action="home" aria-label="体験を終了してホームへ戻る">×</button>
      <div class="quiz-brand"><img src="./assets/icon.png" alt="" />サクサク数学</div>
      <strong class="counter">${state.currentIndex + 1}<span>/ ${TRIAL_QUESTION_COUNT}</span></strong>
    </header>
    <div class="progress-track" aria-label="全3問中${state.currentIndex + 1}問目"><span style="width:${progress}%"></span></div>
  `;
}

function renderHome() {
  app.innerHTML = `
    <main class="landing-page">
      <header class="app-status-card">
        <div class="brand-lockup"><img src="./assets/icon.png" alt="" /><span><strong>サクサク数学</strong><small>Web体験版</small></span></div>
        <div class="status-pills" aria-label="Web体験版メニュー">
          <span>◆ 3問</span>
          <a data-action="store" href="${APP_STORE_URL}" target="_blank" rel="noreferrer">アプリ版 <b aria-hidden="true">→</b></a>
        </div>
      </header>
      <section class="today-card">
        <div class="today-heading">
          <span class="spark-icon" aria-hidden="true">✦</span>
          <div><p>今日やること</p><h1>3問だけ、サクサク。</h1><span>1問ずつ答え合わせして、すぐにコツを確認できます。</span></div>
          <div class="goal-ring" aria-hidden="true"><strong>0/3</strong><small>今日</small></div>
        </div>
        <div class="grade-section" aria-label="学年を選ぶ">
          <p>挑戦する学年</p>
          <div class="grade-picker" role="group">
            ${["中1", "中2", "中3"].map((grade) => `<button class="grade-chip ${state.grade === grade ? "is-selected" : ""}" type="button" data-grade="${grade}" aria-pressed="${state.grade === grade}">${grade}</button>`).join("")}
          </div>
        </div>
        <button class="primary-button start-button" type="button" data-action="start"><span aria-hidden="true">✦</span>3問を始める</button>
        <p class="time-note">⏱ 目安 1〜2分・登録不要</p>
      </section>
      <section class="quest-map-card" aria-label="3問体験の流れ">
        <div class="section-title"><div><h2>今日のステージ</h2><p>${escapeHtml(state.grade)}の問題</p></div><span>体験版</span></div>
        <div class="quest-path" aria-hidden="true">
          <span class="quest-node is-current">1</span><i></i><span class="quest-node">2</span><i></i><span class="quest-node is-goal">✓</span>
          <img src="./assets/character.png" alt="" />
        </div>
        <div class="feature-row"><span>✓ すぐ採点</span><span>↻ 解き直せる</span><span>✦ 解説つき</span></div>
      </section>
      <section class="app-bridge">
        <img class="app-bridge-character" src="./assets/character.png" alt="" />
        <div class="app-bridge-copy"><p>続きはアプリで。</p><span>中1〜中3の数学を、毎日少しずつ。</span></div>
        <a class="app-store-badge" data-action="store" href="${APP_STORE_URL}" target="_blank" rel="noreferrer" aria-label="サクサク数学をApp Storeで見る">
          <img src="${APP_STORE_BADGE_URL}" alt="App Storeからダウンロード" />
        </a>
      </section>
      <p class="apple-legal">AppleおよびAppleロゴは、米国およびその他の国で登録されたApple Inc.の商標です。App StoreはApple Inc.のサービスマークです。</p>
    </main>
  `;
  track("screen_view", { screen_name: "home" });
}

function hintFor(question) {
  const unit = question.unit ?? "";
  if (unit.includes("positive_negative")) return "符号と数の大きさを落ち着いて確認しよう";
  if (unit.includes("equation")) return "式の左右を同じように考えよう";
  if (unit.includes("function") || unit.includes("proportion")) return "式・表・グラフの関係に注目しよう";
  if (unit.includes("geometry")) return "図形の性質を思い出そう";
  return "わかるところから、ひとつずつ考えよう";
}

function renderChoice(question) {
  const selectedIndex = state.draft?.selectedChoice;
  return `<div class="answer-list choice-list" role="group" aria-label="答えを選ぶ">${question.choices
    .map(
      (choice, index) =>
        `<button class="answer-choice ${selectedIndex === index ? "is-selected" : ""}" type="button" data-choice="${index}" aria-pressed="${selectedIndex === index}"><span>${escapeHtml(choice)}</span><b aria-hidden="true">${selectedIndex === index ? "✓" : ""}</b></button>`
    )
    .join("")}</div>`;
}

function keypadKeys(question) {
  const base = ["7", "8", "9", "⌫", "4", "5", "6", "−", "1", "2", "3", "+", "0", ".", "/"];
  const symbols = [...new Set(inputAnswerSpec(question).expectedInput.match(/[a-z^=π√()]/g) ?? [])];
  return [...base, ...symbols];
}

function renderInput(question) {
  const value = state.draft?.value ?? "";
  const { unit } = inputAnswerSpec(question);
  return `
    <div class="input-answer">
      <label class="sr-only" for="math-answer">答え</label>
      <div class="math-display" id="math-answer" aria-live="polite"><span>${value ? escapeHtml(value) : "答えを入力"}</span>${unit ? `<b class="math-unit">${escapeHtml(unit)}</b>` : ""}</div>
      <div class="keypad" aria-label="数学キーパッド">
        ${keypadKeys(question)
          .map((key) => `<button class="key" type="button" data-key="${escapeHtml(key)}">${escapeHtml(key)}</button>`)
          .join("")}
      </div>
    </div>`;
}

function renderTable(question) {
  const data = question.interaction;
  const values = state.draft?.values ?? Array(data.blanks?.length ?? 0).fill("");
  const active = state.draft?.activeIndex ?? 0;
  return `
    <div class="table-answer">
      <p class="mini-instruction">空欄を選んで、数字を入力しよう</p>
      <div class="math-table-wrap"><table class="math-table"><caption>${escapeHtml(data.title ?? "値の表")}</caption><thead><tr>${data.headers.map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}</tr></thead><tbody>${data.rows
        .map((row) => `<tr>${row.map((cell) => {
          if (cell !== "□") return `<td>${escapeHtml(cell)}</td>`;
          const blankIndex = renderTable.blankIndex++;
          return `<td><button type="button" data-table-field="${blankIndex}" class="table-blank ${active === blankIndex ? "is-active" : ""}">${values[blankIndex] ? escapeHtml(values[blankIndex]) : "？"}</button></td>`;
        }).join("")}</tr>`)
        .join("")}</tbody></table></div>
      <div class="keypad compact-keypad">${["7", "8", "9", "⌫", "4", "5", "6", "−", "1", "2", "3", "+", "0", ".", "/"].map((key) => `<button class="key" type="button" data-key="${key}">${key}</button>`).join("")}</div>
    </div>`;
}

function graphPointCoordinates(question) {
  const data = question.interaction;
  const answerPoints = String(question.answer)
    .split("§§")
    .map((entry) => entry.trim())
    .filter(Boolean);
  return { data, answerPoints };
}

function renderGraph(question) {
  const { data, answerPoints } = graphPointCoordinates(question);
  const selected = state.draft?.points ?? [];
  const width = 300;
  const height = 300;
  const pad = 30;
  const xCount = data.xMax - data.xMin;
  const yCount = data.yMax - data.yMin;
  const toX = (x) => pad + ((x - data.xMin) / xCount) * (width - pad * 2);
  const toY = (y) => height - pad - ((y - data.yMin) / yCount) * (height - pad * 2);
  const grid = [];
  const labels = [];
  for (let x = data.xMin; x <= data.xMax; x += 1) {
    grid.push(`<line x1="${toX(x)}" y1="${pad}" x2="${toX(x)}" y2="${height - pad}" />`);
    if (x !== 0) labels.push(`<text x="${toX(x)}" y="${height - 8}" text-anchor="middle">${x}</text>`);
  }
  for (let y = data.yMin; y <= data.yMax; y += 1) {
    grid.push(`<line x1="${pad}" y1="${toY(y)}" x2="${width - pad}" y2="${toY(y)}" />`);
    if (y !== 0) labels.push(`<text x="${pad - 10}" y="${toY(y) + 4}" text-anchor="middle">${y}</text>`);
  }
  const points = [];
  for (let x = data.xMin; x <= data.xMax; x += 1) {
    for (let y = data.yMin; y <= data.yMax; y += 1) {
      const value = `${x},${y}`;
      points.push(`<button type="button" aria-label="点 (${x}, ${y})" data-graph-point="${value}" class="graph-node ${selected.includes(value) ? "is-selected" : ""}" style="left:${(toX(x) / width) * 100}%;top:${(toY(y) / height) * 100}%"></button>`);
    }
  }
  return `
    <div class="graph-answer">
      <p class="mini-instruction">${question.type === "graph_plot" ? `${answerPoints.length}つの点を選ぼう` : "正しい点をタップしよう"}</p>
      <div class="graph-board" style="--x-axis:${(toY(0) / height) * 100}%;--y-axis:${(toX(0) / width) * 100}%">
        <svg viewBox="0 0 ${width} ${height}" aria-hidden="true"><g class="grid-lines">${grid.join("")}</g><g class="axis-lines"><line x1="${toX(0)}" y1="${pad}" x2="${toX(0)}" y2="${height - pad}"/><line x1="${pad}" y1="${toY(0)}" x2="${width - pad}" y2="${toY(0)}"/></g><g class="grid-labels">${labels.join("")}<text x="${width - 14}" y="${toY(0) - 8}">x</text><text x="${toX(0) + 8}" y="${pad + 10}">y</text></g></svg>
        ${points.join("")}
      </div>
    </div>`;
}

function renderSteps(question) {
  const data = question.interaction;
  const selected = state.draft?.steps ?? [];
  const options = state.draft?.stepOptions ?? [...data.steps, ...(data.distractors ?? [])];
  const sequence = selected.length
    ? selected.map((step, index) => `<button type="button" class="sequence-step" data-remove-step="${index}"><span>${index + 1}</span>${escapeHtml(step)}</button>`).join("")
    : `<p class="sequence-placeholder">式を順に選ぼう</p>`;
  return `
    <div class="steps-answer">
      <div class="sequence-board">${sequence}</div>
      <p class="mini-instruction">下のカードを順番にタップ</p>
      <div class="step-options">${options.map((option) => `<button type="button" class="step-option ${selected.includes(option) ? "is-used" : ""}" data-step-option="${escapeHtml(option)}" ${selected.includes(option) ? "disabled" : ""}>${escapeHtml(option)}</button>`).join("")}</div>
    </div>`;
}

function renderQuestionBody(question) {
  renderTable.blankIndex = 0;
  const kind = rendererType(question);
  if (kind === "choice") return renderChoice(question);
  if (kind === "table") return renderTable(question);
  if (kind === "graph") return renderGraph(question);
  if (kind === "steps") return renderSteps(question);
  return renderInput(question);
}

function answerIsReady(question) {
  const kind = rendererType(question);
  if (kind === "choice") return Number.isInteger(state.draft?.selectedChoice);
  if (kind === "input") return Boolean(state.draft?.value);
  if (kind === "table") {
    const expectedCount = String(question.answer).split("§§").length;
    const values = state.draft?.values ?? [];
    return values.length === expectedCount && values.every(Boolean);
  }
  if (kind === "graph") {
    const expectedCount = String(question.answer).split("§§").length;
    return (state.draft?.points?.length ?? 0) === expectedCount;
  }
  if (kind === "steps") return (state.draft?.steps?.length ?? 0) === question.interaction.steps.length;
  return false;
}

function renderQuestion({ trackView = true } = {}) {
  const question = state.questions[state.currentIndex];
  if (!question) return renderHome();
  const isNewQuestion = state.draft === null;
  state.draft ??= {
    value: "",
    values: [],
    activeIndex: 0,
    points: [],
    steps: [],
    selectedChoice: null,
    stepOptions: question.interaction?.steps
      ? shuffled([...question.interaction.steps, ...(question.interaction.distractors ?? [])])
      : []
  };
  if (isNewQuestion) state.startedAt = performance.now();
  app.innerHTML = `
    <main class="quiz-page">
      ${quizHeader()}
      <section class="question-meta"><span>${escapeHtml(question.grade)}</span><span>${escapeHtml(question.unitName)}</span></section>
      <section class="question-card">
        <p class="question-kicker">問題 ${state.currentIndex + 1}</p>
        <h1 tabindex="-1">${escapeHtml(question.question)}</h1>
        <p class="hint-card"><span>ヒント</span>${escapeHtml(hintFor(question))}</p>
      </section>
      <button class="unknown-link" type="button" data-action="unknown">わからない</button>
      <section class="answer-area">${renderQuestionBody(question)}</section>
      <footer class="answer-bar"><button class="primary-button" type="button" data-action="confirm" ${answerIsReady(question) ? "" : "disabled"}>${answerIsReady(question) ? "この答えでOK" : rendererType(question) === "choice" ? "答えを選ぼう" : "答えを入力しよう"}</button></footer>
    </main>
  `;
  if (trackView) {
    track("screen_view", { screen_name: "trial_question", question_type: question.type, question_index: state.currentIndex + 1 });
    requestAnimationFrame(() => document.querySelector(".question-card h1")?.focus({ preventScroll: true }));
  }
}

function recordAnswer(question, isCorrect, answer) {
  const elapsedSec = Math.max(1, Math.round((performance.now() - state.startedAt) / 1000));
  state.answers.push({ id: question.id, isCorrect, answer, elapsedSec, unit: question.unitName });
  track("answer_question", {
    question_id: question.id,
    question_type: question.type,
    correct: isCorrect,
    elapsed_seconds: elapsedSec,
    question_index: state.currentIndex + 1
  });
  renderFeedback(question, isCorrect, answer);
}

function renderFeedback(question, isCorrect, answer) {
  const finalQuestion = state.currentIndex + 1 === TRIAL_QUESTION_COUNT;
  app.innerHTML = `
    <main class="feedback-page ${isCorrect ? "is-correct" : "is-wrong"}">
      ${quizHeader()}
      <section class="feedback-question"><span>${escapeHtml(question.unitName)}</span><p>${escapeHtml(question.question)}</p></section>
      <section class="feedback-card">
        <div class="feedback-badge" aria-hidden="true">${isCorrect ? "✓" : "×"}</div>
        <h1>${isCorrect ? "正解！" : "おしい！"}</h1>
        ${isCorrect ? "" : `<p class="your-answer">あなたの答え：<strong>${displayAnswer(answer)}</strong></p>`}
        <div class="correct-answer">正解 <strong>${displayAnswer(question.answer)}</strong></div>
        <div class="explanation-card"><p class="explanation-title">考え方</p><p>${escapeHtml(question.explanation)}</p></div>
      </section>
      <footer class="answer-bar"><button class="primary-button next-button" type="button" data-action="next">${finalQuestion ? "結果を見る" : "次の問題へ"}</button></footer>
      <p class="sr-only" role="status">${isCorrect ? "正解です" : `不正解です。正解は${escapeHtml(question.answer)}です`}</p>
    </main>
  `;
  track("screen_view", { screen_name: isCorrect ? "feedback_correct" : "feedback_wrong", question_index: state.currentIndex + 1 });
}

function renderResult() {
  const correct = state.answers.filter((answer) => answer.isCorrect).length;
  const seconds = state.answers.reduce((sum, answer) => sum + answer.elapsedSec, 0);
  const percentage = Math.round((correct / TRIAL_QUESTION_COUNT) * 100);
  const headline = correct === 3 ? "3問クリア！" : correct >= 1 ? "3問、最後までできた！" : "3問チャレンジ完了！";
  const missedUnits = [...new Set(state.answers.filter((answer) => !answer.isCorrect).map((answer) => answer.unit))];
  app.innerHTML = `
    <main class="result-page">
      <div class="brand-lockup result-brand"><img src="./assets/icon.png" alt="" /><span>サクサク数学</span></div>
      <section class="result-hero">
        <img src="./assets/icon.png" alt="" />
        <p>おつかれさま！</p>
        <h1>${headline}</h1>
        <div class="score-ring"><strong>${correct}</strong><span>/ 3問 正解</span></div>
      </section>
      <section class="result-stats"><div><strong>${percentage}%</strong><span>正答率</span></div><div><strong>${seconds}<small>秒</small></strong><span>かかった時間</span></div><div><strong>${escapeHtml(state.grade)}</strong><span>選んだ学年</span></div></section>
      ${missedUnits.length ? `<section class="focus-card"><p>もう一度見ると伸びるポイント</p><strong>${missedUnits.map(escapeHtml).join("・")}</strong></section>` : `<section class="focus-card success"><p>できたポイント</p><strong>${escapeHtml(state.grade)}の問題を全問クリア！</strong></section>`}
      <section class="continue-card">
        <p>Web体験はここまで。</p>
        <h2>アプリで、今日の学習を続けよう。</h2>
        <span>解き直し・学習マップ・毎日の目標も使えます。</span>
        <a class="app-store-badge result-store-badge" data-action="store" href="${APP_STORE_URL}" target="_blank" rel="noreferrer" aria-label="サクサク数学をApp Storeで見る">
          <img src="${APP_STORE_BADGE_URL}" alt="App Storeからダウンロード" />
        </a>
      </section>
      <button class="restart-button" type="button" data-action="restart">別の3問を試す</button>
      <p class="apple-legal result-legal">AppleおよびAppleロゴは、米国およびその他の国で登録されたApple Inc.の商標です。App StoreはApple Inc.のサービスマークです。</p>
    </main>
  `;
  track("complete_trial", { correct_count: correct, total_seconds: seconds, grade: state.grade });
  track("screen_view", { screen_name: "trial_result" });
}

function submitInput() {
  const question = state.questions[state.currentIndex];
  const answer = state.draft?.value ?? "";
  if (!answer) return;
  const { expectedInput, unit } = inputAnswerSpec(question);
  recordAnswer(question, answersMatch(answer, expectedInput, question.answerRequirement), `${answer}${unit}`);
}

function submitTable() {
  const question = state.questions[state.currentIndex];
  const expected = question.answer.split("§§");
  const values = state.draft?.values ?? [];
  if (values.length !== expected.length || values.some((value) => !value)) return;
  const isCorrect = expected.every((answer, index) => answersMatch(values[index], answer, question.answerRequirement));
  recordAnswer(question, isCorrect, values.join("§§"));
}

function submitGraph() {
  const question = state.questions[state.currentIndex];
  const entered = [...(state.draft?.points ?? [])].sort();
  const expected = question.answer.split("§§").map((point) => normalizeText(point)).sort();
  const isCorrect = entered.length === expected.length && entered.every((point, index) => normalizeText(point) === expected[index]);
  recordAnswer(question, isCorrect, entered.join("§§"));
}

function submitSteps() {
  const question = state.questions[state.currentIndex];
  const selected = state.draft?.steps ?? [];
  const expected = question.interaction.steps;
  const isCorrect = selected.length === expected.length && selected.every((step, index) => step === expected[index]);
  recordAnswer(question, isCorrect, selected.join("§§"));
}

function submitCurrentAnswer({ unknown = false } = {}) {
  const question = state.questions[state.currentIndex];
  if (!question) return;
  if (unknown) {
    recordAnswer(question, false, "わからない");
    return;
  }
  if (!answerIsReady(question)) return;

  const kind = rendererType(question);
  if (kind === "choice") {
    const answer = question.choices[state.draft.selectedChoice];
    recordAnswer(question, answersMatch(answer, question.answer, question.answerRequirement), answer);
  } else if (kind === "input") {
    submitInput();
  } else if (kind === "table") {
    submitTable();
  } else if (kind === "graph") {
    submitGraph();
  } else if (kind === "steps") {
    submitSteps();
  }
}

function updateKeypad(key) {
  const question = state.questions[state.currentIndex];
  const kind = rendererType(question);
  if (kind === "table") {
    const values = [...(state.draft.values ?? [])];
    const index = state.draft.activeIndex ?? 0;
    values[index] ??= "";
    if (key === "⌫") values[index] = values[index].slice(0, -1);
    else values[index] += key;
    state.draft.values = values;
  } else {
    const value = state.draft.value ?? "";
    state.draft.value = key === "⌫" ? value.slice(0, -1) : value + key;
  }
  renderQuestion({ trackView: false });
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], [data-grade], [data-choice], [data-key], [data-table-field], [data-graph-point], [data-step-option], [data-remove-step]");
  if (!target) return;

  if (target.dataset.grade) {
    state.grade = target.dataset.grade;
    track("select_grade", { grade: state.grade });
    renderHome();
    return;
  }
  if (target.dataset.action === "start" || target.dataset.action === "restart") {
    createTrial();
    track("start_trial", { grade: state.grade, available_questions: questionBankMeta.eligible });
    renderQuestion();
    return;
  }
  if (target.dataset.action === "home") {
    renderHome();
    return;
  }
  if (target.dataset.action === "store") {
    track("app_store_click", { from_screen: state.answers.length === TRIAL_QUESTION_COUNT ? "result" : "home" });
    return;
  }
  if (target.dataset.action === "next") {
    state.currentIndex += 1;
    state.draft = null;
    if (state.currentIndex >= TRIAL_QUESTION_COUNT) renderResult();
    else renderQuestion();
    return;
  }
  if (target.dataset.action === "confirm") {
    submitCurrentAnswer();
    return;
  }
  if (target.dataset.action === "unknown") {
    submitCurrentAnswer({ unknown: true });
    return;
  }
  if (target.dataset.choice !== undefined) {
    state.draft.selectedChoice = Number(target.dataset.choice);
    renderQuestion({ trackView: false });
    return;
  }
  if (target.dataset.key !== undefined) {
    updateKeypad(target.dataset.key);
    return;
  }
  if (target.dataset.tableField !== undefined) {
    state.draft.activeIndex = Number(target.dataset.tableField);
    renderQuestion({ trackView: false });
    return;
  }
  if (target.dataset.graphPoint !== undefined) {
    const question = state.questions[state.currentIndex];
    const point = target.dataset.graphPoint;
    const points = new Set(state.draft.points ?? []);
    if (points.has(point)) points.delete(point);
    else if (question.type === "graph_point") points.clear(), points.add(point);
    else points.add(point);
    state.draft.points = [...points];
    renderQuestion({ trackView: false });
    return;
  }
  if (target.dataset.stepOption !== undefined) {
    state.draft.steps = [...(state.draft.steps ?? []), target.dataset.stepOption];
    renderQuestion({ trackView: false });
    return;
  }
  if (target.dataset.removeStep !== undefined) {
    state.draft.steps.splice(Number(target.dataset.removeStep), 1);
    renderQuestion({ trackView: false });
    return;
  }
});

renderHome();
