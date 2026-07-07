<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `ブログ | ${brand.name}`,
  description: `${brand.name}のブログ一覧。ここにブログメディアの説明文（120字前後）を入れる。どんなテーマの記事を、誰に向けて届けるのかを書く。`,
  path: '/blog/',
})

const { all, categories } = useBlogArticles()
const route = useRoute()

const selectedCategory = computed(() =>
  typeof route.query.category === 'string' ? route.query.category : '',
)

const filtered = computed(() =>
  selectedCategory.value
    ? all.filter((a) => a.category === selectedCategory.value)
    : all,
)
</script>

<template>
  <div class="bg-night">
    <!-- Page Header -->
    <section class="relative overflow-hidden py-20 text-center">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.2)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="20" :diamonds="6" :seed="37" />
      <div class="relative z-10 px-6">
        <p class="font-display text-sm italic tracking-[0.5em] text-kira-cyan">BLOG</p>
        <h1 class="text-holo mt-4 section-title">ブログ</h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/80">
          ここにブログ一覧ページの導入文を入れる。扱うテーマの範囲をひとことで。
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <nav class="mx-auto max-w-5xl px-6" aria-label="カテゴリー絞り込み">
      <div class="flex flex-wrap items-center justify-center gap-3">
        <NuxtLink
          to="/blog/"
          class="rounded-full border px-4 py-1.5 text-xs font-bold tracking-widest transition-colors"
          :class="
            selectedCategory === ''
              ? 'border-gold bg-gold/15 text-gold'
              : 'border-white/20 text-white/60 hover:border-gold/60 hover:text-gold'
          "
        >
          すべて（{{ all.length }}）
        </NuxtLink>
        <NuxtLink
          v-for="cat in categories"
          :key="cat.name"
          :to="`/blog/?category=${encodeURIComponent(cat.name)}`"
          class="rounded-full border px-4 py-1.5 text-xs font-bold tracking-widest transition-colors"
          :class="
            selectedCategory === cat.name
              ? 'border-gold bg-gold/15 text-gold'
              : 'border-white/20 text-white/60 hover:border-gold/60 hover:text-gold'
          "
        >
          {{ cat.name }}（{{ cat.count }}）
        </NuxtLink>
      </div>
    </nav>

    <!-- Article List -->
    <section class="py-16 pb-24">
      <div class="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
        <FadeIn v-for="(article, i) in filtered" :key="article.slug" :delay="(i % 4) * 80">
          <NuxtLink :to="`/blog/${article.slug}/`" class="glass-card group block h-full p-7">
            <div class="flex flex-wrap items-center gap-3 text-xs">
              <span class="rounded-full border border-gold/50 px-3 py-1 font-bold tracking-widest text-gold">
                {{ article.category }}
              </span>
              <time :datetime="article.publishedAt" class="text-white/50">
                {{ article.publishedAt }}
              </time>
            </div>
            <h2 class="mt-4 text-lg font-black leading-snug tracking-wider text-white transition-colors duration-300 group-hover:text-gold">
              {{ article.title }}
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-white/70">
              {{ article.description }}
            </p>
            <span class="mt-4 inline-block text-sm font-bold tracking-widest text-gold">
              続きを読む →
            </span>
          </NuxtLink>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
