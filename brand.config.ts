/**
 * ============================================================
 *  brand.config.ts  ―  サイトごとに書き換える「唯一の設定ファイル」
 * ============================================================
 *
 * 新しいサイトを作るときは、原則このファイルだけを書き換える。
 * nuxt.config.ts / tailwind.config.ts / 各ページは、すべてここを参照する。
 *
 * ドメインは「まず pages.dev で公開 → 伸びたら独自ドメインに昇格」の運用。
 * 独自ドメイン取得後は `site.url` の1行を書き換えるだけで全ページが移行する。
 *
 * モデルやトークンなどエージェント実行に関する設定は `agent` にまとめてある。
 * Claude のモデルが変わっても、ここの `agent.model` を1箇所直すだけで済む。
 */

export const brand = {
  // ── ブランド基本情報 ───────────────────────────────
  name: 'zubora',
  tagline: 'ズボラで、普通よりいい状態。',
  description:
    'シャンプーも、洗顔料も、ボディソープも。本当に分ける必要があるのか。zuboraは問いかける。',

  // ── サイトURL ──────────────────────────────────────
  // 初期は pages.dev。独自ドメイン取得後にここだけ .com などへ書き換える。
  // 末尾スラッシュは付けない（コード側で付与）。
  url: 'https://zubora.pages.dev',

  // ── 計測・連絡先 ───────────────────────────────────
  ga4Id: '',                             // 例: G-XXXXXXXXXX（未取得なら空文字）
  contactEmail: '',                      // 例: info@your-domain.com（未設定なら空文字）

  // ── SNS / OGP ─────────────────────────────────────
  ogImage: '/og-image.png',              // public/ 配下の実画像に差し替える
  logo: '/logo.png',

  // ── フォント（Google Fonts） ───────────────────────
  // 見出し用・本文用を差し替えるとサイトの印象が大きく変わる。
  fonts: {
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;600&display=swap',
    sans: ['"Noto Sans JP"', 'sans-serif'],
    display: ['"Noto Serif JP"', 'serif'],
  },
} as const

/**
 * ── カラーパレット ────────────────────────────────────
 * tailwind.config.ts がここを読み込む。サイトごとに色を差し替える。
 * キー名（bg / accent1 ...）は固定。値（HEX）だけ変える。
 */
export const palette = {
  bg: '#F4F1EA',        // 背景（明るい生成り）
  bgDeep: '#EDE8DE',    // 少し深い背景
  accent1: '#2B2926',   // 主役アクセント（洗いざらしの黒）
  accent2: '#8A9A82',   // サブアクセント（セージグリーン）
  accent3: '#9AAAB4',   // サブアクセント（ダストブルー）
  accent4: '#B8AE9C',   // 差し色（グレージュ）
  text: '#2B2926',
} as const

/**
 * ── SEO キーワード設計 ────────────────────────────────
 * 記事生成エージェントに渡すクラスター設計。
 * 商品が変わってもこの「型」は流用できる（中身のキーワードだけ差し替え）。
 */
export const seo = {
  // 検索ボリュームは実データ（ラッコキーワード等）で埋めるのが理想
  clusters: [
    { name: 'オールインワン洗浄',   intent: '認知・流入', keywords: ['オールインワン 洗浄 とは', '全身洗える ソープ', 'オールインワン 洗顔 体'] },
    { name: '全身シャンプー',       intent: '比較・検討', keywords: ['全身シャンプー おすすめ', '全身シャンプー 大人', '全身シャンプー デメリット'] },
    { name: 'アミノ酸系洗浄成分',   intent: '認知・信頼', keywords: ['アミノ酸系 洗浄成分 とは', 'アミノ酸シャンプー 弱酸性', '洗浄成分 やさしい'] },
    { name: 'ミニマリストケア',     intent: '欲求喚起', keywords: ['ミニマリスト スキンケア', 'バスルーム ミニマル', '持たない暮らし お風呂'] },
    { name: '時短ケア',             intent: '欲求喚起・転換', keywords: ['時短 お風呂', '朝シャワー 時短', 'めんどくさい スキンケア'] },
  ],
} as const

/**
 * ── エージェント実行設定（モデル非依存の要） ───────────
 * Claude のモデルが変わったら model を1行変えるだけ。
 * トークンはここに書かず、実行時に環境変数 or 手渡しで注入する（漏洩防止）。
 */
export const agent = {
  model: 'claude-fable-5',   // モデルが変わったらここだけ更新
  repo: 'https://github.com/hirai-leango/zubora',
  articlesPerBatch: 20,      // 1バッチの記事数（新モデルほど増やせる）
  commitEvery: 5,            // 何記事ごとに commit&push するか
} as const

export default { brand, palette, seo, agent }
