<script setup lang="ts">
interface Faq {
  q: string
  a: string
}

interface RelatedArticle {
  title: string
  url: string
  category: string
}

interface Heading {
  id: string
  text: string
  level: 'H2' | 'H3'
}

const props = withDefaults(
  defineProps<{
    title: string
    /** meta description（検索結果に表示される要約文） */
    description: string
    category: string
    publishedAt: string
    updatedAt?: string
    ogImage?: string
    /** 「この記事でわかること」3項目 */
    summaryPoints: string[]
    /** 「この記事のポイント」5項目 */
    keyPoints: string[]
    /** よくある質問 3〜5問（FAQ JSON-LD にも出力） */
    faqs: Faq[]
    relatedArticles: RelatedArticle[]
  }>(),
  {
    updatedAt: '',
    ogImage: '/og-image.png',
  },
)

const route = useRoute()
const path = route.path.endsWith('/') ? route.path : `${route.path}/`
const canonicalUrl = `${SITE_URL}${path}`
const displayUpdatedAt = computed(() => props.updatedAt || props.publishedAt)
const absoluteOgImage = props.ogImage.startsWith('http')
  ? props.ogImage
  : `${SITE_URL}${props.ogImage}`

// --- SEO: meta / canonical / Article + FAQPage + BreadcrumbList JSON-LD ---
useSeo({
  title: `${props.title} | ${SITE_NAME}`,
  description: props.description,
  path,
  type: 'article',
  image: absoluteOgImage,
  article: {
    headline: props.title,
    datePublished: props.publishedAt,
    dateModified: props.updatedAt || props.publishedAt,
  },
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: props.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'ブログ', item: `${SITE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: props.title, item: canonicalUrl },
      ],
    },
  ],
})

// --- 目次: 本文スロット内の h2/h3 から自動生成 ---
const headings = ref<Heading[]>([])
const articleBody = ref<HTMLElement | null>(null)

const slugifyHeading = (text: string) => text.trim().replace(/\s+/g, '-')

onMounted(() => {
  if (!articleBody.value) return
  const els = articleBody.value.querySelectorAll<HTMLElement>('h2, h3')
  els.forEach((el) => {
    if (!el.id) el.id = slugifyHeading(el.textContent || '')
  })
  headings.value = Array.from(els).map((el) => ({
    id: el.id,
    text: (el.textContent || '').trim(),
    level: el.tagName as 'H2' | 'H3',
  }))
})

const scrollToHeading = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="blog-article bg-night">
    <div class="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <!-- Breadcrumb -->
      <nav class="breadcrumb text-xs leading-relaxed text-white/50" aria-label="パンくずリスト">
        <NuxtLink to="/" class="transition-colors hover:text-gold">ホーム</NuxtLink>
        <span class="mx-1.5" aria-hidden="true">&gt;</span>
        <NuxtLink to="/blog/" class="transition-colors hover:text-gold">ブログ</NuxtLink>
        <span class="mx-1.5" aria-hidden="true">&gt;</span>
        <NuxtLink
          :to="`/blog/?category=${encodeURIComponent(category)}`"
          class="transition-colors hover:text-gold"
        >
          {{ category }}
        </NuxtLink>
        <span class="mx-1.5" aria-hidden="true">&gt;</span>
        <span class="text-white/70">{{ title }}</span>
      </nav>

      <div class="article-container mt-6 flex flex-col gap-10 lg:flex-row">
        <!-- Main Content -->
        <main class="article-main min-w-0 lg:w-[70%]">
          <!-- Header -->
          <header class="article-header">
            <div class="tags">
              <span class="rounded-full border border-gold/50 px-3 py-1 text-xs font-bold tracking-widest text-gold">
                {{ category }}
              </span>
            </div>
            <h1 class="text-holo mt-4 text-2xl font-black leading-snug tracking-wider md:text-3xl">
              {{ title }}
            </h1>
            <div class="meta mt-3 text-xs text-white/50">
              公開日: <time :datetime="publishedAt">{{ publishedAt }}</time>
              <span class="mx-1.5" aria-hidden="true">|</span>
              更新日: <time :datetime="displayUpdatedAt">{{ displayUpdatedAt }}</time>
            </div>
            <img
              :src="ogImage"
              :alt="title"
              class="mt-6 w-full rounded-2xl border border-white/10"
              width="1200"
              height="630"
              loading="eager"
            />
          </header>

          <!-- この記事でわかること box -->
          <div class="article-summary-box glass-card mt-8 p-6">
            <h2 class="box-title text-lg font-black tracking-wider text-kira-cyan">
              📌 この記事でわかること
            </h2>
            <ul class="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-white/80 marker:text-kira-cyan">
              <li v-for="(point, i) in summaryPoints" :key="i">{{ point }}</li>
            </ul>
          </div>

          <!-- ポイントまとめ box -->
          <div class="article-points-box mt-6 rounded-3xl border border-gold/40 bg-gold/5 p-6">
            <h2 class="box-title text-lg font-black tracking-wider text-gold">
              ✅ この記事のポイント
            </h2>
            <ul class="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-white/80 marker:text-gold">
              <li v-for="(point, i) in keyPoints" :key="i">{{ point }}</li>
            </ul>
          </div>

          <!-- In-article TOC -->
          <nav v-if="headings.length" class="article-toc glass-card mt-6 p-6" aria-label="目次">
            <h2 class="text-lg font-black tracking-wider text-gold">目次</h2>
            <ol class="mt-3 list-decimal space-y-1.5 pl-6 text-sm leading-relaxed marker:text-gold">
              <li
                v-for="heading in headings"
                :key="heading.id"
                :class="heading.level === 'H3' ? 'ml-4 list-none text-white/60' : ''"
              >
                <a
                  :href="`#${heading.id}`"
                  class="text-white/80 transition-colors hover:text-gold"
                  @click.prevent="scrollToHeading(heading.id)"
                >
                  <span v-if="heading.level === 'H3'" aria-hidden="true">－ </span>{{ heading.text }}
                </a>
              </li>
            </ol>
          </nav>

          <!-- Article Body -->
          <div ref="articleBody" class="article-body">
            <slot />
          </div>

          <!-- Mid-article CTA -->
          <div class="mid-cta relative mt-14 overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-night-soft to-night p-8 text-center">
            <SparkleBackground :count="10" :seed="41" />
            <div class="relative z-10">
              <p class="text-lg font-black tracking-wider text-white">
                {{ SITE_NAME }}についてのお問い合わせはこちら
              </p>
              <NuxtLink to="/contact/" class="btn-holo hover-sparkle mt-6 !px-8 !py-3 !text-base">
                お問い合わせする
              </NuxtLink>
            </div>
          </div>

          <!-- FAQ Section -->
          <section class="faq-section mt-14">
            <h2 class="border-l-4 border-gold pl-4 text-2xl font-black tracking-wider text-gold">
              よくある質問
            </h2>
            <div v-for="(faq, i) in faqs" :key="i" class="faq-item glass-card mt-4 p-6">
              <h3 class="font-bold leading-relaxed text-gold-light">Q: {{ faq.q }}</h3>
              <p class="mt-3 leading-loose text-white/80">A: {{ faq.a }}</p>
            </div>
          </section>

          <!-- Related Articles -->
          <section v-if="relatedArticles.length" class="related-articles mt-14">
            <h2 class="border-l-4 border-gold pl-4 text-2xl font-black tracking-wider text-gold">
              関連記事
            </h2>
            <div class="related-grid mt-6 grid gap-4 sm:grid-cols-2">
              <NuxtLink
                v-for="(article, i) in relatedArticles"
                :key="i"
                :to="article.url"
                class="glass-card group block p-5"
              >
                <span class="rounded-full border border-gold/50 px-2.5 py-0.5 text-[11px] font-bold tracking-widest text-gold">
                  {{ article.category }}
                </span>
                <p class="mt-3 text-sm font-bold leading-relaxed text-white transition-colors group-hover:text-gold">
                  {{ article.title }}
                </p>
              </NuxtLink>
            </div>
          </section>

          <!-- Author Box -->
          <div class="author-box glass-card mt-14 flex items-center gap-5 p-6">
            <div
              class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-holo-gradient text-2xl"
              aria-hidden="true"
            >
              ✦
            </div>
            <div>
              <h3 class="text-sm font-black tracking-wider text-gold">監修・執筆</h3>
              <p class="mt-1 text-sm leading-relaxed text-white/70">
                {{ SITE_NAME }}編集部 |
                ここに編集部・メディアの紹介文を入れる。どんなテーマを、どんな読者に向けて発信しているかを書く。
              </p>
            </div>
          </div>

          <!-- End CTA -->
          <div class="end-cta relative mt-10 overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-night via-night-soft to-night p-10 text-center">
            <SparkleBackground :count="14" :diamonds="4" :seed="73" />
            <div class="relative z-10">
              <p class="text-shimmer text-xl font-black tracking-widest">{{ SITE_NAME }}</p>
              <p class="mt-4 text-lg font-bold leading-relaxed text-white">
                {{ SITE_NAME }}にご興味のある方はこちら
              </p>
              <p class="mt-3 text-sm leading-loose text-white/70">
                ここに記事末尾CTAの説明文を入れる。商品・サービスの魅力をひとことで伝える。<br class="hidden md:block" />
                ご相談・お見積りはお気軽にどうぞ。
              </p>
              <NuxtLink to="/contact/" class="btn-holo hover-sparkle mt-8">
                導入のご相談はこちら
              </NuxtLink>
            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside class="article-sidebar lg:w-[30%]">
          <div class="flex flex-col gap-6 lg:sticky lg:top-24">
            <BlogSidebarToc />
            <BlogSidebarCta />
            <BlogSidebarCategories />
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
