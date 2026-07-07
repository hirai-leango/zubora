<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `ジャーナル | ${brand.name}`,
  description: `${brand.name}のジャーナル。オールインワン洗浄やアミノ酸系洗浄成分の基礎知識から、時短ケア・ミニマルな暮らしのヒントまで、ゆるく真面目に書いています。`,
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
    <section class="px-5 pb-12 pt-20 md:px-8 md:pt-28">
      <div class="mx-auto max-w-5xl">
        <p class="text-sm tracking-wide text-kira-pink">journal</p>
        <h1 class="section-title mt-4 font-display">ジャーナル</h1>
        <p class="mt-6 max-w-2xl leading-loose text-gold/70">
          洗うことと、暮らしを軽くすることについて。ゆるく、でもわりと真面目に書いています。
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <nav class="mx-auto max-w-5xl px-6" aria-label="カテゴリー絞り込み">
      <div class="flex flex-wrap items-center gap-3">
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
