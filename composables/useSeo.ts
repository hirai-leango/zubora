import { brand } from '~/brand.config'

export const SITE_URL = brand.url
export const SITE_NAME = brand.name
export const DEFAULT_OG_IMAGE = `${SITE_URL}${brand.ogImage}`
export const SITE_LOGO = `${SITE_URL}${brand.logo}`

interface ArticleSeoOptions {
  /** JSON-LD の headline。省略時は title を使用 */
  headline?: string
  datePublished: string
  dateModified?: string
}

interface SeoOptions {
  title: string
  description: string
  /** サイトルートからのパス（例: '/blog/sample-01/'） */
  path: string
  /** og:type。記事ページは 'article' を指定 */
  type?: 'website' | 'article'
  /** OG / Twitter カード画像の絶対 URL */
  image?: string
  /** 指定すると Article JSON-LD を出力する */
  article?: ArticleSeoOptions
  /** 追加の JSON-LD（Article 以外の構造化データ） */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * 全ページ共通の SEO メタタグをまとめて設定するコンポーザブル。
 * title / description / OG / Twitter カード / canonical / JSON-LD を出力する。
 */
export function useSeo(options: SeoOptions) {
  const {
    title,
    description,
    path,
    type = 'website',
    image = DEFAULT_OG_IMAGE,
    article,
    jsonLd,
  } = options

  // canonical / og:url は常に末尾スラッシュ付きで出力する
  const normalizedPath = path.endsWith('/') ? path : `${path}/`
  const url = `${SITE_URL}${normalizedPath}`

  const structuredData: Record<string, unknown>[] = []

  if (article) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline ?? title,
      description,
      datePublished: article.datePublished,
      dateModified: article.dateModified ?? article.datePublished,
      author: { '@type': 'Organization', name: SITE_NAME },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: { '@type': 'ImageObject', url: SITE_LOGO },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    })
  }

  if (jsonLd) {
    structuredData.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]))
  }

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { name: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [{ rel: 'canonical', href: url }],
    script: structuredData.map((data) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(data),
    })),
  })
}
