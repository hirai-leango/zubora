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
  name: 'ブランド名をここに',            // 例: キラキラテキーラ
  tagline: 'キャッチコピーをここに',      // 例: 一杯が、特別な体験になる
  description:
    'このサイトの説明文（120字前後）。meta description / OGP / JSON-LD に使われる。',

  // ── サイトURL ──────────────────────────────────────
  // 初期は pages.dev。独自ドメイン取得後にここだけ .com などへ書き換える。
  // 末尾スラッシュは付けない（コード側で付与）。
  url: 'https://your-project.pages.dev',

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
      'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap',
    sans: ['"Noto Sans JP"', 'sans-serif'],
    display: ['"Playfair Display"', 'serif'],
  },
} as const

/**
 * ── カラーパレット ────────────────────────────────────
 * tailwind.config.ts がここを読み込む。サイトごとに色を差し替える。
 * キー名（bg / accent1 ...）は固定。値（HEX）だけ変える。
 */
export const palette = {
  bg: '#0d0020',        // 背景（ダーク）
  bgDeep: '#0a0a0a',    // より深い背景
  accent1: '#FFD700',   // 主役アクセント（例: ゴールド）
  accent2: '#FF69B4',   // サブアクセント（例: ピンク）
  accent3: '#BF5FFF',   // サブアクセント（例: パープル）
  accent4: '#00FFFF',   // 差し色（例: シアン）
  text: '#FFFFFF',
} as const

/**
 * ── SEO キーワード設計 ────────────────────────────────
 * 記事生成エージェントに渡すクラスター設計。
 * 商品が変わってもこの「型」は流用できる（中身のキーワードだけ差し替え）。
 */
export const seo = {
  // 検索ボリュームは実データ（ラッコキーワード等）で埋めるのが理想
  clusters: [
    { name: '基礎知識',       intent: '認知・流入', keywords: ['〇〇 とは', '〇〇 種類', '〇〇 選び方'] },
    { name: 'エリア/店舗',    intent: '来店・比較', keywords: ['〇〇 東京', '〇〇 おすすめ'] },
    { name: '体験/使い方',    intent: '欲求喚起', keywords: ['〇〇 楽しみ方', '〇〇 演出'] },
    { name: 'ブランド文脈',   intent: '指名・転換', keywords: ['ブランド名', '〇〇 特別 体験'] },
  ],
} as const

/**
 * ── エージェント実行設定（モデル非依存の要） ───────────
 * Claude のモデルが変わったら model を1行変えるだけ。
 * トークンはここに書かず、実行時に環境変数 or 手渡しで注入する（漏洩防止）。
 */
export const agent = {
  model: 'claude-fable-5',   // モデルが変わったらここだけ更新
  repo: 'https://github.com/hirai-leango/your-project',
  articlesPerBatch: 20,      // 1バッチの記事数（新モデルほど増やせる）
  commitEvery: 5,            // 何記事ごとに commit&push するか
} as const

export default { brand, palette, seo, agent }
