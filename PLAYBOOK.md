# PLAYBOOK ― SEOサイト量産の指示テンプレート集

新しいサイトを作るとき、このファイルのプロンプトを**コピーして変数を埋め、リモートエージェントに投げる**。
毎回「どう指示するか」を考え直さないための定型集。

- `{{BRAND}}` … ブランド名（例: キラキラテキーラ）
- `{{REPO}}` … リポジトリURL
- `{{TOKEN}}` … Fine-grained PAT（Contents R/W・単一リポジトリ・短期失効）
- `{{MODEL}}` … 使用モデル（`brand.config.ts` の `agent.model` と一致させる）

> モデルが変わっても、このプレイブックは基本そのまま使える。`{{MODEL}}` を差し替えるだけ。
> プロンプトは「目的ベース」で書く。特定モデルの癖に依存した書き方はしない（移行で壊れるため）。

---

## 共通セットアップ（各プロンプト冒頭に付ける）

```bash
cd <repo-dir>
git config user.email 'agent@example.com'
git config user.name 'Site Agent'
git remote set-url origin https://{{TOKEN}}@github.com/hirai-leango/<repo>.git
cat brand.config.ts        # サイト固有の設定を読む
cat components/blog/ArticleLayout.vue | head -40
```

---

## ① プロジェクト初期化

```
You are setting up a new SEO site "{{BRAND}}" from this template.
Read brand.config.ts and apply its values to nuxt.config.ts, tailwind.config.ts:
- site name/url/description from brand.*
- GA4 id from brand.ga4Id (skip the gtag scripts if empty)
- colors from palette.* into tailwind theme
- fonts from brand.fonts
Build must pass: NITRO_PRESET=cloudflare-pages npm run build
Commit: 'chore: apply brand.config for {{BRAND}}'
```

## ② SEO記事生成（1バッチ = brand.config の articlesPerBatch 本）

```
Write N SEO blog articles for "{{BRAND}}". COMMIT EVERY 5 ARTICLES.
Rules per article:
- 2500-3500 words, Japanese, use <ArticleLayout>
- summaryPoints: 3, keyPoints: 5, faqs: 4, relatedArticles: 3-4 (trailing slash)
- First 100 chars contain the main keyword
- 1 comparison table + 1 numbered list minimum
- Article + FAQ + BreadcrumbList JSON-LD in useHead()
- Naturally mention {{BRAND}} where relevant
- ALSO register each new article in composables/useBlogArticles.ts (file+listing must match)
[ここに keyword と H1 の一覧を貼る。seo.clusters を元に作る]
```

## ③ 固定ページ（法的・ブランド）

```
Create: pages/privacy.vue, pages/legal.vue (特定商取引法), pages/about.vue,
pages/contact.vue (mailto: brand.contactEmail), pages/voices.vue (口コミ, カテゴリ絞込).
All Japanese, match theme, trailing-slash URLs, add to header nav.
Add underage-drinking notice to footer if alcohol.
```

## ④ デプロイ設定（Cloudflare Pages）

```
Configure for Cloudflare Pages: nitro preset 'cloudflare-pages',
@nuxtjs/sitemap module, server/middleware/trailing-slash.ts (301),
public/robots.txt referencing brand.url + /sitemap.xml, GA4 plugin (plugins/gtag.client.ts).
Build must pass. Commit.
```
→ その後は手動: Cloudflare > Workers & Pages > Create > **Pages** タブ > Connect to Git >
  Framework=Nuxt / Build=`npm run build` / Output=`dist`

## ⑤ 独自ドメイン昇格（pages.dev で伸びたら）

```
brand.config.ts の brand.url を独自ドメインに書き換え、
全ファイルの旧URL参照を一括置換（canonical / og / JSON-LD / robots）。
Commit: 'chore: promote to custom domain'.
```
→ その後は手動: Cloudflare Pages > Custom domains で追加、Email Routing で info@ を転送設定。
