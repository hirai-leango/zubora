// サンプル記事。新サイトでは差し替える。
// 記事を追加したら pages/blog/ に .vue を作成し、ここにメタ情報を登録する。

export interface BlogArticleMeta {
  slug: string
  title: string
  category: string
  description: string
  publishedAt: string
}

/**
 * ブログ全記事のメタ情報レジストリ。
 * 記事一覧・カテゴリーサイドバー・関連記事の共通データソース。
 */
const articles: BlogArticleMeta[] = [
  // --- カテゴリーA（例: 基礎知識系） ---
  {
    slug: 'sample-01',
    title: 'サンプル記事01｜「〇〇とは」型の基礎解説記事のタイトルを入れる',
    category: 'カテゴリーA',
    description:
      'サンプル記事01のmeta description。検索結果に表示される120字前後の要約文をここに入れる。主要キーワードを自然に含め、記事を読むメリットが伝わる文章にする。',
    publishedAt: '2026-07-01',
  },
  {
    slug: 'sample-02',
    title: 'サンプル記事02｜「〇〇の種類」型の分類・整理記事のタイトルを入れる',
    category: 'カテゴリーA',
    description:
      'サンプル記事02のmeta description。種類・分類を比較表で整理する記事の要約をここに入れる。読者がこの記事で何を判断できるようになるかを書く。',
    publishedAt: '2026-07-01',
  },
  {
    slug: 'sample-03',
    title: 'サンプル記事03｜「〇〇と△△の違い」型の比較記事のタイトルを入れる',
    category: 'カテゴリーA',
    description:
      'サンプル記事03のmeta description。2つの対象を比較する記事の要約をここに入れる。比較の観点（原料・製法・価格など）を挙げると具体性が出る。',
    publishedAt: '2026-07-02',
  },
  {
    slug: 'sample-04',
    title: 'サンプル記事04｜「〇〇の歴史」型の背景・文脈記事のタイトルを入れる',
    category: 'カテゴリーA',
    description:
      'サンプル記事04のmeta description。歴史・背景を解説する記事の要約をここに入れる。時系列で何がわかるのかを予告する。',
    publishedAt: '2026-07-02',
  },
  // --- カテゴリーB（例: 選び方・比較系） ---
  {
    slug: 'sample-05',
    title: 'サンプル記事05｜「〇〇の選び方」型のガイド記事のタイトルを入れる',
    category: 'カテゴリーB',
    description:
      'サンプル記事05のmeta description。選び方ガイドの要約をここに入れる。初心者向け・シーン別など、切り口を明示する。',
    publishedAt: '2026-07-03',
  },
  {
    slug: 'sample-06',
    title: 'サンプル記事06｜「〇〇 おすすめ」型のランキング記事のタイトルを入れる',
    category: 'カテゴリーB',
    description:
      'サンプル記事06のmeta description。おすすめ紹介記事の要約をここに入れる。選定基準と紹介数を明示すると信頼感が出る。',
    publishedAt: '2026-07-03',
  },
  {
    slug: 'sample-07',
    title: 'サンプル記事07｜「〇〇 値段・相場」型の価格解説記事のタイトルを入れる',
    category: 'カテゴリーB',
    description:
      'サンプル記事07のmeta description。価格・相場を解説する記事の要約をここに入れる。価格帯別に何がわかるのかを書く。',
    publishedAt: '2026-07-04',
  },
  {
    slug: 'sample-08',
    title: 'サンプル記事08｜「〇〇 初心者」型の入門記事のタイトルを入れる',
    category: 'カテゴリーB',
    description:
      'サンプル記事08のmeta description。初心者向け入門記事の要約をここに入れる。最初のつまずきポイントを解消できることを伝える。',
    publishedAt: '2026-07-04',
  },
  // --- カテゴリーC（例: 活用・体験系） ---
  {
    slug: 'sample-09',
    title: 'サンプル記事09｜「〇〇の楽しみ方」型の体験提案記事のタイトルを入れる',
    category: 'カテゴリーC',
    description:
      'サンプル記事09のmeta description。楽しみ方・活用法を提案する記事の要約をここに入れる。読後にやってみたくなる要素を予告する。',
    publishedAt: '2026-07-05',
  },
  {
    slug: 'sample-10',
    title: 'サンプル記事10｜「〇〇のマナー・注意点」型の実用記事のタイトルを入れる',
    category: 'カテゴリーC',
    description:
      'サンプル記事10のmeta description。マナー・注意点を解説する記事の要約をここに入れる。失敗を避けられることを伝える。',
    publishedAt: '2026-07-05',
  },
  {
    slug: 'sample-11',
    title: 'サンプル記事11｜「〇〇 イベント・シーン」型の演出提案記事のタイトルを入れる',
    category: 'カテゴリーC',
    description:
      'サンプル記事11のmeta description。イベント・シーン別の演出を提案する記事の要約をここに入れる。具体的なシーンを挙げる。',
    publishedAt: '2026-07-06',
  },
  {
    slug: 'sample-12',
    title: 'サンプル記事12｜「ブランド名 × テーマ」型の指名検索向け記事のタイトルを入れる',
    category: 'カテゴリーC',
    description:
      'サンプル記事12のmeta description。自社ブランドへの指名検索・転換を狙う記事の要約をここに入れる。ブランドの独自価値を含める。',
    publishedAt: '2026-07-06',
  },
]

export const useBlogArticles = () => {
  const all = articles

  const byCategory = (category: string) =>
    articles.filter((a) => a.category === category)

  const categories = [...new Set(articles.map((a) => a.category))].map((name) => ({
    name,
    count: articles.filter((a) => a.category === name).length,
  }))

  const find = (slug: string) => articles.find((a) => a.slug === slug)

  return { all, byCategory, categories, find }
}
