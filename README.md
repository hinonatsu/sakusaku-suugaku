# サクサク数学 Web

中学生向け数学学習アプリ「サクサク数学」の Web 体験版です。

## 目的

SNS・広告・検索・共有から来たユーザーが、スマホですぐに数学問題を体験し、最終的に iOS アプリのダウンロードへ進むための軽量な静的サイトです。

## MVP 範囲

- トップページ
- 5問だけ試す
- 2〜5分で数学力チェック
- 分岐式の簡易診断
- 回答時間の記録
- 結果表示
- App Store 誘導
- レスポンシブ対応
- GitHub Pages 対応

## 技術構成

- HTML
- CSS
- JavaScript
- バックエンドなし
- ログインなし
- 外部 API なし

## 開発

依存パッケージなしで動きます。ブラウザで `index.html` を開くか、任意の静的サーバーで確認してください。

```bash
npm run build
```

`dist/` に GitHub Pages 公開用ファイルを出力します。

## GitHub Pages 公開

1. GitHub に push する
2. Repository Settings から Pages を開く
3. Source を GitHub Actions または `main` ブランチの `/dist` 相当の成果物公開に設定する
4. App Store の正式 URL が決まり次第、`src/app.js` の `APP_STORE_URL` を更新する

## 注意

この Web 診断は短時間で到達目安とつまずき候補を示すためのもので、厳密な学力判定ではありません。結果文では断定を避けます。
