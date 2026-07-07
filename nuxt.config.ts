// https://nuxt.com/docs/api/configuration/nuxt-config
// ブランド固有の値はすべて brand.config.ts から読み込む。
import { brand, palette } from './brand.config'

const siteTitle = `${brand.name} | ${brand.tagline}`

// GA4 が未設定（空文字）の間は計測タグを出力しない
const ga4Scripts = brand.ga4Id
  ? [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${brand.ga4Id}`,
        async: true,
      },
      {
        innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${brand.ga4Id}', { send_page_view: false });`,
      },
    ]
  : []

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/sitemap'],
  site: {
    url: brand.url,
    name: brand.name,
    trailingSlash: true,
  },
  sitemap: {
    autoLastmod: true,
    xslColumns: [
      { label: 'URL', width: '75%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
  },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      // generate /path/index.html so trailing-slash URLs resolve on static hosting
      autoSubfolderIndex: true,
      routes: ['/sitemap.xml'],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: brand.description },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: brand.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: brand.name },
        { name: 'theme-color', content: palette.bg },
      ],
      script: [
        ...ga4Scripts,
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: brand.name,
            url: `${brand.url}/`,
            description: brand.description,
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: brand.name,
            url: `${brand.url}/`,
            logo: `${brand.url}${brand.logo}`,
          }),
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: brand.fonts.googleFontsHref },
      ],
    },
  },
})
