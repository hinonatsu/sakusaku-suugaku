# サクサク数学 Web

中学生向け数学学習アプリ「サクサク数学」の、3問だけその場で解ける Web 体験版です。

## 目的

SNS・広告・検索・共有から来たユーザーが、スマホですぐに数学問題を体験し、最終的に iOS アプリのダウンロードへ進むための軽量な静的サイトです。

## MVP 範囲

- スマホ優先の「3問だけ」体験
- 中1〜中3を選べる問題出題
- 選択式、数式入力、表の穴埋め、座標、手順並べ替え
- 1問ごとの即時採点と解説
- App Store 誘導
- レスポンシブ対応、GitHub Pages 対応

## 技術構成

- HTML
- CSS
- JavaScript
- バックエンドなし
- ログインなし
- 外部 API なし

## 開発

依存パッケージなしで動きます。次のコマンドでローカル開発サーバーを起動し、ブラウザで `http://127.0.0.1:8080/` を開いてください。

```bash
npm run dev
```

ポートを変更する場合は、たとえば `npm run dev -- --port 4173` とします。

公開用ファイルの生成は次のコマンドで行います。

```bash
npm run build
```

`dist/` に GitHub Pages 公開用ファイルを出力します。

## 問題バンクの更新

配布用の `src/data/questions.js` はCSVから生成します。CSVのパスを明示して実行してください。

```bash
npm run questions:build -- --input C:/path/to/current_questions.csv
```

画像素材が別途必要な問題、条件不足が明記された問題、確認が必要な問題は体験版の出題対象から自動的に外れます。CSV自体は保持されるため、対応する図版を追加した後に出題対象を広げられます。

## GitHub Pages 公開

1. GitHub に push する
2. Repository Settings から Pages を開く
3. Source を GitHub Actions または `main` ブランチの `/dist` 相当の成果物公開に設定する
4. App Store の正式 URL が変更になった場合、`src/app.js` の `APP_STORE_URL` を更新する

## 注意

この Web 診断は短時間で到達目安とつまずき候補を示すためのもので、厳密な学力判定ではありません。結果文では断定を避けます。
