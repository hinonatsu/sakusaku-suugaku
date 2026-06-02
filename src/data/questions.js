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
    "id": "gen-pn-1-01",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "「+5」の正しい読み方は？",
    "choices": [
      "プラス5",
      "マイナス5",
      "ゼロ5",
      "5プラス"
    ],
    "answerIndex": 0,
    "explanation": "正の符号「+」は「プラス」と読みます。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-dd-1-01",
    "grade": "中1",
    "unit": "math.g7.stat.data_distribution",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "度数分布表でデータを区切る区間を何というか？",
    "choices": [
      "階級",
      "度数",
      "階級値",
      "範囲"
    ],
    "answerIndex": 0,
    "explanation": "データをいくつかの区間に分けたものを「階級」といいます。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.stat.data_distribution",
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
    "id": "genN-pb-1-01",
    "grade": "中1",
    "unit": "math.g7.stat.probability",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ある事がらの「起こりやすさ」を数で表したものを何というか？",
    "choices": [
      "確率",
      "平均",
      "範囲",
      "合計"
    ],
    "answerIndex": 0,
    "explanation": "起こりやすさを0〜1の数で表したものが確率です。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.stat.probability",
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
    "question": "正方形（1辺a）の内接円の半径は？",
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
  {
    "id": "gen-le-7-07",
    "grade": "中1",
    "unit": "math.g7.expr.literal_expressions",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "等式 3x + 5 = 14 の右辺は？",
    "choices": [
      "14",
      "3x + 5",
      "3x",
      "5"
    ],
    "answerIndex": 0,
    "explanation": "等式では「=」の左側を左辺、右側を右辺と呼びます。",
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
    "id": "gen-pn-1-02",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "0より小さい数を何という？",
    "choices": [
      "負の数",
      "正の数",
      "自然数",
      "整数"
    ],
    "answerIndex": 0,
    "explanation": "0より小さい数を負の数、0より大きい数を正の数といいます。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "gen-pn-1-06",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "次のうち整数でないものは？",
    "choices": [
      "-3",
      "0",
      "0.5",
      "5"
    ],
    "answerIndex": 2,
    "explanation": "整数は…-2,-1,0,1,2,…のように小数や分数を含まない数です。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "gen-pn-1-10",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "次の数のうち自然数はどれか？",
    "choices": [
      "-5",
      "0",
      "0.5",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "自然数は1以上の整数。-5や0や0.5は自然数ではありません。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "gen-pn-2-02",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ある数の絶対値とは何を意味するか？",
    "choices": [
      "数直線上での0からの距離",
      "その数の符号",
      "その数の2倍",
      "反対の数"
    ],
    "answerIndex": 0,
    "explanation": "絶対値は0からの距離を表すので、必ず0以上の値になります。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "gen-pn-3-06",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "(+9) + 0 = ?",
    "choices": [
      "9",
      "0",
      "-9",
      "18"
    ],
    "answerIndex": 0,
    "explanation": "0との和はもとの数のままです。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-003",
      "calculation_error"
    ]
  },
  {
    "id": "gen-pn-4-01",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "減法を加法に直すには、引く数の符号をどうすればよいか？",
    "choices": [
      "符号を反対にして足す",
      "符号をそのまま足す",
      "0をかける",
      "絶対値を引く"
    ],
    "answerIndex": 0,
    "explanation": "「a-b = a+(-b)」のように、引き算は引く数の符号を反対にして加法に直します。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-004",
      "definition_error"
    ]
  },
  {
    "id": "gen-pn-4-02",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "(+8) - (+3) = ?",
    "choices": [
      "+5",
      "-5",
      "+11",
      "-11"
    ],
    "answerIndex": 0,
    "explanation": "(+8)-(+3) = (+8)+(-3) = +5。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-004",
      "calculation_error"
    ]
  },
  {
    "id": "gen-pn-4-06",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "sign_error",
    "difficulty": 1,
    "question": "0 - (+9) = ?",
    "choices": [
      "-9",
      "+9",
      "0",
      "-1"
    ],
    "answerIndex": 0,
    "explanation": "0からある数を引くと、その数の符号が反対になります。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-004",
      "sign_error"
    ]
  },
  {
    "id": "gen-pn-5-04",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "(-7) × 0 = ?",
    "choices": [
      "0",
      "-7",
      "+7",
      "7"
    ],
    "answerIndex": 0,
    "explanation": "どんな数に0をかけても0になります。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-005",
      "calculation_error"
    ]
  },
  {
    "id": "gen-pn-6-04",
    "grade": "中1",
    "unit": "math.g7.num.positive_negative",
    "skill": "calculation_error",
    "difficulty": 1,
    "question": "0 ÷ (-5) = ?",
    "choices": [
      "0",
      "-5",
      "+5",
      "計算できない"
    ],
    "answerIndex": 0,
    "explanation": "0を0でない数で割ると0になります。",
    "estimatedTimeSec": 20,
    "tags": [
      "g7",
      "中1",
      "math.g7.num.positive_negative",
      "lesson-006",
      "calculation_error"
    ]
  },
  {
    "id": "genN-dd-1-02",
    "grade": "中1",
    "unit": "math.g7.stat.data_distribution",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "各階級に入るデータの個数を何というか？",
    "choices": [
      "度数",
      "階級値",
      "範囲",
      "平均"
    ],
    "answerIndex": 0,
    "explanation": "ある階級に入るデータの個数を度数といいます。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.stat.data_distribution",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-dd-1-04",
    "grade": "中1",
    "unit": "math.g7.stat.data_distribution",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "1つの階級の幅を何というか？",
    "choices": [
      "階級の幅（階級幅）",
      "度数",
      "範囲",
      "階級値"
    ],
    "answerIndex": 0,
    "explanation": "階級の上限と下限の差が階級の幅。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.stat.data_distribution",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "genN-dd-2-01",
    "grade": "中1",
    "unit": "math.g7.stat.data_distribution",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ヒストグラムとは何のグラフか？",
    "choices": [
      "度数分布表をもとに、長方形で度数を表したグラフ",
      "棒グラフ",
      "折れ線グラフ",
      "円グラフ"
    ],
    "answerIndex": 0,
    "explanation": "ヒストグラムは階級の幅を横軸に、度数を縦軸にとり長方形で表すグラフ。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.stat.data_distribution",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "genN-dd-2-02",
    "grade": "中1",
    "unit": "math.g7.stat.data_distribution",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ヒストグラムの横軸は何を表すか？",
    "choices": [
      "階級",
      "度数",
      "平均",
      "割合"
    ],
    "answerIndex": 0,
    "explanation": "横軸が階級（区間）、縦軸が度数を表します。",
    "estimatedTimeSec": 30,
    "tags": [
      "g7",
      "中1",
      "math.g7.stat.data_distribution",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-001-01",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "度数とは何か？",
    "choices": [
      "各階級に入るデータの個数",
      "階級の中央の値",
      "最大値と最小値の差",
      "平均値だけ"
    ],
    "answerIndex": 0,
    "explanation": "度数分布表では、各階級に入るデータ数を度数といいます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-expr-001-01",
    "grade": "中2",
    "unit": "math.g8.expr.calculation",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "単項式とはどのような式か？",
    "choices": [
      "数と文字の積だけでできた式",
      "項が2つ以上ある式",
      "等号を含む式",
      "分母に文字だけがある式"
    ],
    "answerIndex": 0,
    "explanation": "単項式は、数や文字をかけ合わせただけの1つの項からなる式です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.expr.calculation",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-lina-001-03",
    "grade": "中2",
    "unit": "math.g8.func.linear_applications",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ダイヤグラムでグラフの傾きが表すものは？",
    "choices": [
      "速さ",
      "面積",
      "角度",
      "濃度"
    ],
    "answerIndex": 0,
    "explanation": "時間を横軸、道のりを縦軸にすると傾きは速さです。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.func.linear_applications",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-linb-001-01",
    "grade": "中2",
    "unit": "math.g8.func.linear_basic",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "1次関数の一般的な式は？",
    "choices": [
      "y=ax+b",
      "y=a/x",
      "y=ax^2",
      "x+y=0だけ"
    ],
    "answerIndex": 0,
    "explanation": "aとbを定数として y=ax+b の形で表される関数です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.func.linear_basic",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-pc-001-01",
    "grade": "中2",
    "unit": "math.g8.geo.parallel_congruence",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "平行線で同位角の関係として正しいものは？",
    "choices": [
      "等しい",
      "和が90度",
      "和が180度とは限らない",
      "必ず2倍"
    ],
    "answerIndex": 0,
    "explanation": "2直線が平行なら同位角は等しくなります。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.geo.parallel_congruence",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-prob-001-02",
    "grade": "中2",
    "unit": "math.g8.stat.probability",
    "skill": "probability_error",
    "difficulty": 1,
    "question": "1個のサイコロで3の目が出る確率は？",
    "choices": [
      "1/6",
      "1/3",
      "1/2",
      "3/6"
    ],
    "answerIndex": 0,
    "explanation": "6通りのうち3の目は1通りです。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.probability",
      "lesson-001",
      "probability_error"
    ]
  },
  {
    "id": "g8-quad-001-01",
    "grade": "中2",
    "unit": "math.g8.geo.quadrilaterals",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "平行四辺形の向かい合う辺の関係は？",
    "choices": [
      "等しい",
      "必ず垂直",
      "必ず半分",
      "関係しない"
    ],
    "answerIndex": 0,
    "explanation": "平行四辺形では向かい合う辺の長さが等しいです。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.geo.quadrilaterals",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-sima-001-01",
    "grade": "中2",
    "unit": "math.g8.eq.simultaneous_applications",
    "skill": "modeling_error",
    "difficulty": 1,
    "question": "連立方程式の応用で最初にすることは？",
    "choices": [
      "何をx, yとおくか決める",
      "必ずグラフを描く",
      "両辺を2乗する",
      "答えを先に決める"
    ],
    "answerIndex": 0,
    "explanation": "未知の数量を文字で置くと式を立てられます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.eq.simultaneous_applications",
      "lesson-001",
      "modeling_error"
    ]
  },
  {
    "id": "g8-simb-001-01",
    "grade": "中2",
    "unit": "math.g8.eq.simultaneous_basic",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "2元1次方程式とはどのような方程式か？",
    "choices": [
      "2つの文字を含む1次方程式",
      "2次方程式",
      "文字を含まない方程式",
      "不等号を含む式"
    ],
    "answerIndex": 0,
    "explanation": "xとyなど2つの文字を含み、それぞれの次数が1の方程式です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.eq.simultaneous_basic",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-tc-001-01",
    "grade": "中2",
    "unit": "math.g8.geo.triangles_circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "二等辺三角形の底角の関係は？",
    "choices": [
      "等しい",
      "和が90度",
      "必ず30度",
      "関係しない"
    ],
    "answerIndex": 0,
    "explanation": "二等辺三角形では2つの底角が等しくなります。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.geo.triangles_circles",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-ineq-001-07",
    "grade": "中2",
    "unit": "math.g8.extra.inequalities",
    "skill": "inequality_sign_error",
    "difficulty": 2,
    "question": "不等式の両辺に負の数をかけると、不等号の向きは？",
    "choices": [
      "逆になる",
      "変わらない",
      "消える",
      "等号になる"
    ],
    "answerIndex": 0,
    "explanation": "負の数をかける・割ると大小関係が反対になります。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.extra.inequalities",
      "lesson-001",
      "inequality_sign_error"
    ]
  },
  {
    "id": "g8-data-001-02",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "階級値とは何か？",
    "choices": [
      "階級の中央の値",
      "度数の合計",
      "最大値",
      "最小値"
    ],
    "answerIndex": 0,
    "explanation": "階級値は階級の真ん中の値です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-001-04",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "平均を求める式は？",
    "choices": [
      "合計÷個数",
      "個数÷合計",
      "最大値-最小値",
      "度数×階級"
    ],
    "answerIndex": 0,
    "explanation": "平均はデータの合計をデータ数で割って求めます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-001-06",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ヒストグラムは何を表すグラフか？",
    "choices": [
      "度数分布を柱で表すグラフ",
      "点を散らしたグラフ",
      "円だけのグラフ",
      "関数の直線"
    ],
    "answerIndex": 0,
    "explanation": "階級ごとの度数を柱の高さで表します。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-001-07",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "correlation_error",
    "difficulty": 1,
    "question": "相関図で右上がりに点が並ぶとき、相関は？",
    "choices": [
      "正の相関",
      "負の相関",
      "相関なし",
      "反比例"
    ],
    "answerIndex": 0,
    "explanation": "一方が増えるともう一方も増える傾向があるので正の相関です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "correlation_error"
    ]
  },
  {
    "id": "g8-data-001-08",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "correlation_error",
    "difficulty": 1,
    "question": "相関図で右下がりに点が並ぶとき、相関は？",
    "choices": [
      "負の相関",
      "正の相関",
      "相関なし",
      "比例"
    ],
    "answerIndex": 0,
    "explanation": "一方が増えるともう一方が減る傾向があるので負の相関です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "correlation_error"
    ]
  },
  {
    "id": "g8-data-001-10",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "近似値で、真の値との差を何というか？",
    "choices": [
      "誤差",
      "度数",
      "階級",
      "相関"
    ],
    "answerIndex": 0,
    "explanation": "近似値と真の値の差を誤差といいます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-001-14",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "範囲を求める式は？",
    "choices": [
      "最大値-最小値",
      "最大値+最小値",
      "合計÷個数",
      "度数÷階級値"
    ],
    "answerIndex": 0,
    "explanation": "範囲はデータの散らばりを表す値で、最大値から最小値を引きます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-002-01",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "度数とは何か？",
    "choices": [
      "各階級に入るデータの個数",
      "階級の中央の値",
      "最大値と最小値の差",
      "平均値だけ"
    ],
    "answerIndex": 0,
    "explanation": "度数分布表では、各階級に入るデータ数を度数といいます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-002-02",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "階級値とは何か？",
    "choices": [
      "階級の中央の値",
      "度数の合計",
      "最大値",
      "最小値"
    ],
    "answerIndex": 0,
    "explanation": "階級値は階級の真ん中の値です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-002-04",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "平均を求める式は？",
    "choices": [
      "合計÷個数",
      "個数÷合計",
      "最大値-最小値",
      "度数×階級"
    ],
    "answerIndex": 0,
    "explanation": "平均はデータの合計をデータ数で割って求めます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-002-06",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ヒストグラムは何を表すグラフか？",
    "choices": [
      "度数分布を柱で表すグラフ",
      "点を散らしたグラフ",
      "円だけのグラフ",
      "関数の直線"
    ],
    "answerIndex": 0,
    "explanation": "階級ごとの度数を柱の高さで表します。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-002-07",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "correlation_error",
    "difficulty": 1,
    "question": "相関図で右上がりに点が並ぶとき、相関は？",
    "choices": [
      "正の相関",
      "負の相関",
      "相関なし",
      "反比例"
    ],
    "answerIndex": 0,
    "explanation": "一方が増えるともう一方も増える傾向があるので正の相関です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "correlation_error"
    ]
  },
  {
    "id": "g8-data-002-08",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "correlation_error",
    "difficulty": 1,
    "question": "相関図で右下がりに点が並ぶとき、相関は？",
    "choices": [
      "負の相関",
      "正の相関",
      "相関なし",
      "比例"
    ],
    "answerIndex": 0,
    "explanation": "一方が増えるともう一方が減る傾向があるので負の相関です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "correlation_error"
    ]
  },
  {
    "id": "g8-data-002-10",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "近似値で、真の値との差を何というか？",
    "choices": [
      "誤差",
      "度数",
      "階級",
      "相関"
    ],
    "answerIndex": 0,
    "explanation": "近似値と真の値の差を誤差といいます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-002-14",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "範囲を求める式は？",
    "choices": [
      "最大値-最小値",
      "最大値+最小値",
      "合計÷個数",
      "度数÷階級値"
    ],
    "answerIndex": 0,
    "explanation": "範囲はデータの散らばりを表す値で、最大値から最小値を引きます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-003-01",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "度数とは何か？",
    "choices": [
      "各階級に入るデータの個数",
      "階級の中央の値",
      "最大値と最小値の差",
      "平均値だけ"
    ],
    "answerIndex": 0,
    "explanation": "度数分布表では、各階級に入るデータ数を度数といいます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-003-02",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "階級値とは何か？",
    "choices": [
      "階級の中央の値",
      "度数の合計",
      "最大値",
      "最小値"
    ],
    "answerIndex": 0,
    "explanation": "階級値は階級の真ん中の値です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-003-04",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "平均を求める式は？",
    "choices": [
      "合計÷個数",
      "個数÷合計",
      "最大値-最小値",
      "度数×階級"
    ],
    "answerIndex": 0,
    "explanation": "平均はデータの合計をデータ数で割って求めます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-003-06",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "ヒストグラムは何を表すグラフか？",
    "choices": [
      "度数分布を柱で表すグラフ",
      "点を散らしたグラフ",
      "円だけのグラフ",
      "関数の直線"
    ],
    "answerIndex": 0,
    "explanation": "階級ごとの度数を柱の高さで表します。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g8-data-003-07",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "correlation_error",
    "difficulty": 1,
    "question": "相関図で右上がりに点が並ぶとき、相関は？",
    "choices": [
      "正の相関",
      "負の相関",
      "相関なし",
      "反比例"
    ],
    "answerIndex": 0,
    "explanation": "一方が増えるともう一方も増える傾向があるので正の相関です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-003",
      "correlation_error"
    ]
  },
  {
    "id": "g8-data-003-08",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "correlation_error",
    "difficulty": 1,
    "question": "相関図で右下がりに点が並ぶとき、相関は？",
    "choices": [
      "負の相関",
      "正の相関",
      "相関なし",
      "比例"
    ],
    "answerIndex": 0,
    "explanation": "一方が増えるともう一方が減る傾向があるので負の相関です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-003",
      "correlation_error"
    ]
  },
  {
    "id": "g8-data-003-10",
    "grade": "中2",
    "unit": "math.g8.stat.data",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "近似値で、真の値との差を何というか？",
    "choices": [
      "誤差",
      "度数",
      "階級",
      "相関"
    ],
    "answerIndex": 0,
    "explanation": "近似値と真の値の差を誤差といいます。",
    "estimatedTimeSec": 40,
    "tags": [
      "g8",
      "中2",
      "math.g8.stat.data",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g9-cang-001-01",
    "grade": "中3",
    "unit": "math.g9.geo.circle_angles",
    "skill": "circle_angle_error",
    "difficulty": 1,
    "question": "同じ弧に対する円周角どうしの関係は？",
    "choices": [
      "等しい",
      "必ず2倍",
      "必ず半分",
      "関係しない"
    ],
    "answerIndex": 0,
    "explanation": "同じ弧に対する円周角は等しくなります。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.circle_angles",
      "lesson-001",
      "circle_angle_error"
    ]
  },
  {
    "id": "g9-circ-001-01",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円の中心から円周上の点までの線分を何というか？",
    "choices": [
      "半径",
      "直径",
      "弦",
      "接線"
    ],
    "answerIndex": 0,
    "explanation": "中心と円周上の点を結ぶ線分が半径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g9-expr-001-12",
    "grade": "中3",
    "unit": "math.g9.expr.calculation",
    "skill": "formula_error",
    "difficulty": 1,
    "question": "(a+b)^2 の公式は？",
    "choices": [
      "a^2+2ab+b^2",
      "a^2+b^2",
      "a^2-2ab+b^2",
      "a^2-b^2"
    ],
    "answerIndex": 0,
    "explanation": "和の平方の公式です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.expr.calculation",
      "lesson-001",
      "formula_error"
    ]
  },
  {
    "id": "g9-pyth-001-01",
    "grade": "中3",
    "unit": "math.g9.geo.pythagorean",
    "skill": "formula_error",
    "difficulty": 1,
    "question": "直角三角形で斜辺c、他の2辺a,bの関係は？",
    "choices": [
      "a^2+b^2=c^2",
      "a+b=c",
      "a^2-b^2=c^2",
      "ab=c"
    ],
    "answerIndex": 0,
    "explanation": "三平方の定理です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.pythagorean",
      "lesson-001",
      "formula_error"
    ]
  },
  {
    "id": "g9-qeq-001-17",
    "grade": "中3",
    "unit": "math.g9.eq.quadratic",
    "skill": "check_error",
    "difficulty": 1,
    "question": "2次方程式の解を確認する方法は？",
    "choices": [
      "もとの方程式に代入する",
      "必ずグラフを描くだけ",
      "係数を足すだけ",
      "平方根を消すだけ"
    ],
    "answerIndex": 0,
    "explanation": "求めた値を代入して左辺と右辺が一致するか確認します。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.eq.quadratic",
      "lesson-001",
      "check_error"
    ]
  },
  {
    "id": "g9-qfn-001-01",
    "grade": "中3",
    "unit": "math.g9.func.quadratic",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "2次関数 y=ax^2 のグラフの形は？",
    "choices": [
      "放物線",
      "直線",
      "円",
      "双曲線"
    ],
    "answerIndex": 0,
    "explanation": "y=ax^2 のグラフは原点を頂点とする放物線です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.func.quadratic",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g9-ratio-001-01",
    "grade": "中3",
    "unit": "math.g9.geo.ratio",
    "skill": "ratio_error",
    "difficulty": 1,
    "question": "平行線と線分の比で、平行な線が作る対応する線分の比は？",
    "choices": [
      "等しい",
      "必ず2倍",
      "必ず半分",
      "関係しない"
    ],
    "answerIndex": 0,
    "explanation": "平行線で切られた対応する線分の比は等しくなります。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.ratio",
      "lesson-001",
      "ratio_error"
    ]
  },
  {
    "id": "g9-sim-001-01",
    "grade": "中3",
    "unit": "math.g9.geo.similarity",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "相似な図形で対応する角の関係は？",
    "choices": [
      "等しい",
      "必ず2倍",
      "必ず半分",
      "関係しない"
    ],
    "answerIndex": 0,
    "explanation": "相似な図形では対応する角は等しいです。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.similarity",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g9-sqrt-001-09",
    "grade": "中3",
    "unit": "math.g9.num.square_roots",
    "skill": "approximation_error",
    "difficulty": 1,
    "question": "√2 の近似値としてよく使うものは？",
    "choices": [
      "1.414",
      "1.732",
      "2.236",
      "3.14"
    ],
    "answerIndex": 0,
    "explanation": "√2 は約1.414です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.num.square_roots",
      "lesson-001",
      "approximation_error"
    ]
  },
  {
    "id": "g9-cang-001-04",
    "grade": "中3",
    "unit": "math.g9.geo.circle_angles",
    "skill": "circle_angle_error",
    "difficulty": 1,
    "question": "直径に対する円周角は？",
    "choices": [
      "90度",
      "45度",
      "60度",
      "180度"
    ],
    "answerIndex": 0,
    "explanation": "半円の弧に対する円周角は直角です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.circle_angles",
      "lesson-001",
      "circle_angle_error"
    ]
  },
  {
    "id": "g9-cang-001-12",
    "grade": "中3",
    "unit": "math.g9.geo.circle_angles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "点A,B,C,Dが同じ円周上にある四角形を何というか？",
    "choices": [
      "内接四角形",
      "平行四辺形",
      "正方形だけ",
      "相似四角形"
    ],
    "answerIndex": 0,
    "explanation": "4つの頂点が同じ円周上にある四角形です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.circle_angles",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g9-cang-001-14",
    "grade": "中3",
    "unit": "math.g9.geo.circle_angles",
    "skill": "circle_angle_error",
    "difficulty": 1,
    "question": "円周角が90度になるのは、見込む弧が何のときか？",
    "choices": [
      "半円",
      "小さい弧",
      "四分円だけ",
      "中心角30度"
    ],
    "answerIndex": 0,
    "explanation": "半円、つまり直径に対する円周角は90度です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.circle_angles",
      "lesson-001",
      "circle_angle_error"
    ]
  },
  {
    "id": "g9-cang-001-18",
    "grade": "中3",
    "unit": "math.g9.geo.circle_angles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心Oを通る弦ABは何と呼ばれるか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.geo.circle_angles",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-001-02",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円周上の2点を結ぶ線分を何というか？",
    "choices": [
      "弦",
      "半径",
      "接線",
      "中心"
    ],
    "answerIndex": 0,
    "explanation": "円周上の2点を結ぶ線分が弦です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-001-03",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心を通る弦を何というか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-001",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-002-01",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円の中心から円周上の点までの線分を何というか？",
    "choices": [
      "半径",
      "直径",
      "弦",
      "接線"
    ],
    "answerIndex": 0,
    "explanation": "中心と円周上の点を結ぶ線分が半径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-002-02",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円周上の2点を結ぶ線分を何というか？",
    "choices": [
      "弦",
      "半径",
      "接線",
      "中心"
    ],
    "answerIndex": 0,
    "explanation": "円周上の2点を結ぶ線分が弦です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-002-03",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心を通る弦を何というか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-002",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-003-01",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円の中心から円周上の点までの線分を何というか？",
    "choices": [
      "半径",
      "直径",
      "弦",
      "接線"
    ],
    "answerIndex": 0,
    "explanation": "中心と円周上の点を結ぶ線分が半径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-003-02",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円周上の2点を結ぶ線分を何というか？",
    "choices": [
      "弦",
      "半径",
      "接線",
      "中心"
    ],
    "answerIndex": 0,
    "explanation": "円周上の2点を結ぶ線分が弦です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-003-03",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心を通る弦を何というか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-003",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-004-01",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円の中心から円周上の点までの線分を何というか？",
    "choices": [
      "半径",
      "直径",
      "弦",
      "接線"
    ],
    "answerIndex": 0,
    "explanation": "中心と円周上の点を結ぶ線分が半径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-004",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-004-02",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円周上の2点を結ぶ線分を何というか？",
    "choices": [
      "弦",
      "半径",
      "接線",
      "中心"
    ],
    "answerIndex": 0,
    "explanation": "円周上の2点を結ぶ線分が弦です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-004",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-004-03",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心を通る弦を何というか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-004",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-005-01",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円の中心から円周上の点までの線分を何というか？",
    "choices": [
      "半径",
      "直径",
      "弦",
      "接線"
    ],
    "answerIndex": 0,
    "explanation": "中心と円周上の点を結ぶ線分が半径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-005",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-005-02",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円周上の2点を結ぶ線分を何というか？",
    "choices": [
      "弦",
      "半径",
      "接線",
      "中心"
    ],
    "answerIndex": 0,
    "explanation": "円周上の2点を結ぶ線分が弦です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-005",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-005-03",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心を通る弦を何というか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-005",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-006-01",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円の中心から円周上の点までの線分を何というか？",
    "choices": [
      "半径",
      "直径",
      "弦",
      "接線"
    ],
    "answerIndex": 0,
    "explanation": "中心と円周上の点を結ぶ線分が半径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-006",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-006-02",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円周上の2点を結ぶ線分を何というか？",
    "choices": [
      "弦",
      "半径",
      "接線",
      "中心"
    ],
    "answerIndex": 0,
    "explanation": "円周上の2点を結ぶ線分が弦です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-006",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-006-03",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心を通る弦を何というか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-006",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-007-01",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円の中心から円周上の点までの線分を何というか？",
    "choices": [
      "半径",
      "直径",
      "弦",
      "接線"
    ],
    "answerIndex": 0,
    "explanation": "中心と円周上の点を結ぶ線分が半径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-007",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-007-02",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "円周上の2点を結ぶ線分を何というか？",
    "choices": [
      "弦",
      "半径",
      "接線",
      "中心"
    ],
    "answerIndex": 0,
    "explanation": "円周上の2点を結ぶ線分が弦です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-007",
      "definition_error"
    ]
  },
  {
    "id": "g9-circ-007-03",
    "grade": "中3",
    "unit": "math.g9.extra.circles",
    "skill": "definition_error",
    "difficulty": 1,
    "question": "中心を通る弦を何というか？",
    "choices": [
      "直径",
      "半径",
      "接線",
      "弧"
    ],
    "answerIndex": 0,
    "explanation": "中心を通る弦は直径です。",
    "estimatedTimeSec": 40,
    "tags": [
      "g9",
      "中3",
      "math.g9.extra.circles",
      "lesson-007",
      "definition_error"
    ]
  }
];

export function createQuestionPool() {
  return curatedQuestions.map((question) => ({
    ...question,
    choices: [...question.choices],
    tags: [...question.tags]
  }));
}

export const questions = createQuestionPool();

