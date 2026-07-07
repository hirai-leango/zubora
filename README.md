# zero ― SEOサイトテンプレート

商品・ブランドごとのSEOサイトを量産するための **Nuxt 3 テンプレート**。
ブランド固有の値（名前・色・URL・GA4・フォント）はすべて `brand.config.ts` に集約されており、
原則 **このファイルだけを書き換えれば** 新しいサイトが立ち上がる。

## 新しいサイトの作り方

1. GitHub でこのリポジトリを **Use this template** → 新リポジトリを作成
2. `brand.config.ts` を埋める（名前・タグライン・説明・URL・色・フォント・SEOクラスター）
3. あとは **[NEW-SITE-GUIDE.md](./NEW-SITE-GUIDE.md)** の手順に従う

詳しい運用は以下を参照:

- **[NEW-SITE-GUIDE.md](./NEW-SITE-GUIDE.md)** … 新サイト立ち上げの手順書（作業の中心）
- **[PLAYBOOK.md](./PLAYBOOK.md)** … サイト設計・記事量産の戦略プレイブック
- **[CHECKLIST.md](./CHECKLIST.md)** … 公開前チェックリスト

## 構成

| パス | 役割 |
| --- | --- |
| `brand.config.ts` | **唯一の設定ファイル**。ブランド情報・パレット・SEO設計・エージェント設定 |
| `nuxt.config.ts` | brand.config を読んで meta / OGP / JSON-LD / GA4 / フォントを出力 |
| `tailwind.config.ts` | brand.config の `palette` から色を生成（クラス名 `night` / `gold` / `kira-*` は固定） |
| `pages/` | トップ・ブランド・商品・シーン・口コミ・ブログ・お問い合わせ・法務ページ（プレースホルダー文入り） |
| `pages/blog/sample-*.vue` | サンプル記事12本。記事の「型」のデモ。新サイトでは差し替える |
| `composables/useBlogArticles.ts` | 記事メタ情報のレジストリ（一覧・カテゴリ・関連記事の共通データソース） |
| `composables/useSeo.ts` | 全ページ共通のSEOメタタグ出力 |
| `components/blog/ArticleLayout.vue` | 記事レイアウト（目次・FAQ・関連記事・CTA・JSON-LD 自動生成） |
| `public/` | ロゴ・OG画像はプレースホルダー。`PLACEHOLDER-IMAGES.md` 参照 |

## 開発

```bash
npm install
npm run dev          # http://localhost:3000
```

## ビルド & デプロイ（Cloudflare Pages）

```bash
NITRO_PRESET=cloudflare-pages npm run build   # dist/ に静的出力
```

Cloudflare Pages にリポジトリを接続し、ビルドコマンドを `npm run build`、出力ディレクトリを `dist` に設定する。

## 差し替えチェック（最低限）

- [ ] `brand.config.ts` を全項目埋めた
- [ ] `public/og-image.png` / `logo.png` / `favicon.ico` を実画像に差し替えた
- [ ] `public/robots.txt` の Sitemap URL を書き換えた
- [ ] 各ページの「ここに〜を入れる」プレースホルダー文を実コピーに差し替えた
- [ ] `pages/blog/sample-*.vue` を実記事に差し替え、`useBlogArticles.ts` を更新した
- [ ] `pages/legal.vue` / `pages/privacy.vue` の事業者情報を埋めた

公開前の詳細チェックは [CHECKLIST.md](./CHECKLIST.md) を使う。
