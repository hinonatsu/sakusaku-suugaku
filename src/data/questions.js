const curatedQuestions = [
  {
    "id": "gen-le-1-01",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "a × b を、×記号を使わずに表すと？",
    "choices": [
      "ab",
      "ba",
      "a+b",
      "a/b"
    ],
    "answerIndex": 0,
    "explanation": "文字どうしの積は×を省き、ふつうアルファベット順に並べます。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-eq-1-02",
    "grade": "中1",
    "unit": "math.g7.expr.linear_equations",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "方程式の「解」とは何か？",
    "choices": [
      "方程式を成り立たせる文字の値",
      "方程式の答えの数",
      "右辺の数",
      "係数"
    ],
    "answerIndex": 0,
    "explanation": "解とは、その値を文字に代入したとき等式が成り立つような値のことです。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.linear_equations",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-pg-1-01",
    "grade": "中1",
    "unit": "math.g7.geo.plane_geometry",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "「2点を通り、両方の方向に限りなくのびた線」を何というか？",
    "choices": [
      "直線",
      "線分",
      "半直線",
      "曲線"
    ],
    "answerIndex": 0,
    "explanation": "両方向に無限に伸びるのが直線。端のあるのが線分や半直線です。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.geo.plane_geometry",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-pr-1-02",
    "grade": "中1",
    "unit": "math.g7.func.proportions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "「いろいろな値をとる文字」を何という？",
    "choices": [
      "変数",
      "定数",
      "係数",
      "指数"
    ],
    "answerIndex": 0,
    "explanation": "値が変わる文字を変数、値が決まっている文字や数を定数といいます。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.func.proportions",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-sg-1-01",
    "grade": "中1",
    "unit": "math.g7.geo.solid_geometry",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "「いくつかの平面で囲まれた立体」を何というか？",
    "choices": [
      "多面体",
      "曲面体",
      "回転体",
      "球面体"
    ],
    "answerIndex": 0,
    "explanation": "多面体は平面で囲まれた立体図形。角柱や角錐などが含まれます。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.geo.solid_geometry",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-s3-3-07",
    "grade": "中1",
    "unit": "math.g7.geo.s-003",
    "skill": "calculation_error",
    "difficulty": 3,
    "question": "正方形（1辺a）に内接する円の半径は？",
    "choices": [
      "a/2",
      "a",
      "a/√2",
      "a√2"
    ],
    "answerIndex": 0,
    "explanation": "正方形に内接する円の半径=辺の半分=a/2。",
    "estimatedTimeSec": 50,
    "tags": [
      "g7",
      "中1",
      "math.g7.geo.s-003",
      "lesson-003",
      "calculation_error"
    ]
  },
  {
    "id": "gen-le-1-02",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "3 × a を、×記号を使わずに表すと？",
    "choices": [
      "3a",
      "a3",
      "3+a",
      "a/3"
    ],
    "answerIndex": 0,
    "explanation": "数と文字の積は数を文字の前に書き、×を省略します。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "gen-le-1-04",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "1 × x は、×記号を省くと？",
    "choices": [
      "x",
      "1x",
      "x1",
      "x+1"
    ],
    "answerIndex": 0,
    "explanation": "1×x = x。数1は文字の前から省略します。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "gen-le-2-06",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "縦が a cm、横が b cmの長方形の面積は？",
    "choices": [
      "ab cm²",
      "2(a+b) cm²",
      "a+b cm²",
      "a-b cm²"
    ],
    "answerIndex": 0,
    "explanation": "長方形の面積 = 縦 × 横 = ab。単位はcm²。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "gen-le-4-01",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "3x + 2x を計算すると？",
    "choices": [
      "5x",
      "5x²",
      "6x",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "同類項（文字が同じ項）の係数を足します。3+2=5、よって5x。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-004",
      "calculation_error"
    ]
  },
  {
    "id": "gen-le-4-02",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "7a - 4a を計算すると？",
    "choices": [
      "3a",
      "3",
      "3a²",
      "11a"
    ],
    "answerIndex": 0,
    "explanation": "同類項の係数を引きます。7-4=3、よって3a。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-004",
      "calculation_error"
    ]
  },
  {
    "id": "gen-le-5-01",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "3 × 2x を計算すると？",
    "choices": [
      "6x",
      "6x²",
      "3x²",
      "5x"
    ],
    "answerIndex": 0,
    "explanation": "数と数をかけ、文字はそのまま：3×2x = (3×2)×x = 6x。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-005",
      "calculation_error"
    ]
  },
  {
    "id": "gen-le-5-04",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "8x ÷ 4 を計算すると？",
    "choices": [
      "2x",
      "4x",
      "2",
      "2x²"
    ],
    "answerIndex": 0,
    "explanation": "8x÷4 = (8÷4)x = 2x。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-005",
      "calculation_error"
    ]
  },
  {
    "id": "gen-le-6-02",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "1辺の長さが x cm の正方形の周の長さは？",
    "choices": [
      "4x cm",
      "x² cm",
      "4+x cm",
      "x/4 cm"
    ],
    "answerIndex": 0,
    "explanation": "正方形は4辺すべて同じ長さ。周=4×x=4x。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-006",
      "definition_error"
    ]
  },
  {
    "id": "gen-le-7-01",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "「xはyに等しい」を式で表すと？",
    "choices": [
      "x = y",
      "x > y",
      "x < y",
      "x + y"
    ],
    "answerIndex": 0,
    "explanation": "「等しい」関係は等号「=」で表します。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-007",
      "definition_error"
    ]
  },
  {
    "id": "gen-le-7-02",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "「xはyより大きい」を不等号で表すと？",
    "choices": [
      "x > y",
      "x < y",
      "x ≧ y",
      "x = y"
    ],
    "answerIndex": 0,
    "explanation": "「より大きい」は不等号「>」を使います。等号は含みません。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.expr.literal_expressions",
      "lesson-007",
      "definition_error"
    ]
  },
];

export function createQuestionPool() {
  return curatedQuestions.map((question) => ({
    ...question,
    choices: [...question.choices],
    tags: [...question.tags]
  }));
}

export const questions = createQuestionPool();

