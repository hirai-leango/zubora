# CHECKLIST ― サイト公開前の検証項目

「やったはず」で済ませず、**事実で確認する**ためのリスト。
過去に「完了したと思ったら未完了だった」ことが何度もあった。必ず1つずつ潰す。

## コンテンツ整合性
- [ ] 記事ファイル数 == 一覧登録数（`ls pages/blog/*.vue | grep -v index | wc -l` と `grep -c "slug:" composables/useBlogArticles.ts`）
- [ ] 全記事に summaryPoints / keyPoints / faqs / relatedArticles が入っている
- [ ] 内部リンクが全部 trailing slash

## ドメイン・URL
- [ ] `brand.config.ts` の url が正しい（pages.dev か 独自ドメイン）
- [ ] 旧ドメイン参照が残っていない（`grep -rn '旧ドメイン' . --include='*.vue' --include='*.ts'` が0件）
- [ ] canonical / og:url / JSON-LD の @id が現行ドメイン

## ビルド・デプロイ
- [ ] `NITRO_PRESET=cloudflare-pages npm run build` が成功
- [ ] Cloudflare Pages が Pages プロジェクトとして作成されている（Worker ではない）
- [ ] 本番URLでトップ・記事・各固定ページが 200

## SEO
- [ ] `https://<domain>/sitemap.xml` が 200・有効XML・全URL含む（`curl ... | grep -c '<loc>'`）
- [ ] `https://<domain>/robots.txt` が sitemap を参照
- [ ] Search Console にプロパティ登録 → サイトマップ送信（送信直後エラーでも翌日再送信で通ることが多い）

## 計測
- [ ] GA4 の測定IDが nuxt.config に入っている（`brand.ga4Id`）
- [ ] GA4 リアルタイムで自分のアクセスが計測される
- [ ] SPAルート遷移でページビューが飛ぶ（plugins/gtag.client.ts）

## メール（独自ドメイン昇格後）
- [ ] Cloudflare Email Routing: Status=Enabled / DNS records=公開済み（`dig MX <domain>` でレコード確認）
- [ ] 転送ルール（info@ → 受信先）が Active、受信先が Verified
- [ ] **別のメールアドレスから**テスト送信して受信できる（同一Gmail同士はGmailが重複非表示にするので不可）

## セキュリティ
- [ ] エージェント用トークンは Fine-grained・単一リポジトリ・Contents限定・短期失効
- [ ] 作業完了後、使い終わったトークンは無効化（漏洩リスクを残さない）
- [ ] ローカルで動かす前に `npm install`（エージェントが依存を追加した後は必須）
