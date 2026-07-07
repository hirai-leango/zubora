<script setup lang="ts">
import { brand } from '~/brand.config'

type VoiceCategory = 'business' | 'customer'

interface Voice {
  id: number
  category: VoiceCategory
  name: string
  role: string
  avatar: string
  rating: number
  title: string
  body: string
  date: string
}

// ここに実際の口コミ・声を入れる（以下はサンプル）
const voices: Voice[] = [
  {
    id: 1,
    category: 'business',
    name: '東京都・導入企業 Aさん',
    role: '導入企業',
    avatar: '👑',
    rating: 5,
    title: 'ここに口コミ1のタイトルを入れる',
    body: 'ここに口コミ1の本文を入れる。導入して何がどう変わったのか、具体的な変化を2〜3文で書く。',
    date: '2026-05-18',
  },
  {
    id: 2,
    category: 'customer',
    name: '20代・利用者 Bさん',
    role: 'お客さま',
    avatar: '🎀',
    rating: 5,
    title: 'ここに口コミ2のタイトルを入れる',
    body: 'ここに口コミ2の本文を入れる。利用したときの体験や気持ちの変化を2〜3文で書く。',
    date: '2026-06-02',
  },
  {
    id: 3,
    category: 'business',
    name: '大阪・導入企業 Cさん',
    role: '導入企業',
    avatar: '💼',
    rating: 5,
    title: 'ここに口コミ3のタイトルを入れる',
    body: 'ここに口コミ3の本文を入れる。競合との差別化につながった点を書く。',
    date: '2026-04-27',
  },
  {
    id: 4,
    category: 'customer',
    name: '20代・利用者 Dさん',
    role: 'お客さま',
    avatar: '💖',
    rating: 5,
    title: 'ここに口コミ4のタイトルを入れる',
    body: 'ここに口コミ4の本文を入れる。特別な日の体験談を書く。',
    date: '2026-05-30',
  },
  {
    id: 5,
    category: 'business',
    name: '名古屋・導入企業 Eさん',
    role: '導入企業',
    avatar: '🏢',
    rating: 4,
    title: 'ここに口コミ5のタイトルを入れる',
    body: 'ここに口コミ5の本文を入れる。宣伝・集客への効果を書く。',
    date: '2026-03-14',
  },
  {
    id: 6,
    category: 'customer',
    name: '30代・利用者 Fさん',
    role: 'お客さま',
    avatar: '🥂',
    rating: 4,
    title: 'ここに口コミ6のタイトルを入れる',
    body: 'ここに口コミ6の本文を入れる。リピートしたくなった理由を書く。',
    date: '2026-04-09',
  },
]

const averageRating =
  Math.round((voices.reduce((sum, v) => sum + v.rating, 0) / voices.length) * 10) / 10

useSeo({
  title: `口コミ・お客さまの声 | ${brand.name}`,
  description: `${brand.name}に寄せられた口コミ・お客さまの声一覧。ここに口コミページの説明文（120字前後）を入れる。`,
  path: '/voices/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: SITE_NAME,
    description: brand.description,
    brand: { '@type': 'Brand', name: SITE_NAME },
    image: DEFAULT_OG_IMAGE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: voices.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: voices.slice(0, 5).map((voice) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: voice.name },
      datePublished: voice.date,
      name: voice.title,
      reviewBody: voice.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: voice.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  },
})

const categories = [
  { key: 'all', label: 'すべて' },
  { key: 'business', label: '導入企業の声' },
  { key: 'customer', label: 'お客さまの声' },
] as const

type CategoryKey = (typeof categories)[number]['key']

const selectedCategory = ref<CategoryKey>('all')

const filteredVoices = computed(() =>
  selectedCategory.value === 'all'
    ? voices
    : voices.filter((voice) => voice.category === selectedCategory.value),
)

function formatDate(date: string) {
  const [year, month] = date.split('-')
  return `${year}年${Number(month)}月`
}
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.18)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,105,180,0.15)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="30" :diamonds="10" :seed="171" />

      <div class="relative z-10 px-6 py-24 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">VOICES</p>
        <h1 class="text-holo mt-6 text-4xl font-black leading-tight tracking-wider md:text-6xl">
          みんなの声
        </h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/70 md:text-lg">
          {{ brand.name }}に寄せられた<br class="md:hidden" />声をお届けします。
        </p>
      </div>
    </section>

    <!-- ===== 口コミ一覧 ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="18" :seed="182" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">REVIEWS</p>
            <h2 class="text-holo mt-4 section-title">口コミ一覧</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>

        <!-- カテゴリフィルタ -->
        <FadeIn :delay="100">
          <div class="mt-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="声のカテゴリ">
            <button
              v-for="category in categories"
              :key="category.key"
              type="button"
              role="tab"
              :aria-selected="selectedCategory === category.key"
              class="rounded-full border px-6 py-2.5 text-sm font-bold tracking-widest transition-all duration-300"
              :class="
                selectedCategory === category.key
                  ? 'border-gold bg-gold/15 text-gold shadow-glow-gold'
                  : 'border-white/20 bg-white/5 text-white/60 hover:border-gold/50 hover:text-gold'
              "
              @click="selectedCategory = category.key"
            >
              {{ category.label }}
            </button>
          </div>
        </FadeIn>

        <!-- 声カード -->
        <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="voice in filteredVoices"
            :key="voice.id"
            class="glass-card hover-sparkle flex h-full flex-col p-7"
            :class="voice.category === 'business' ? 'hover:shadow-glow-gold' : 'hover:shadow-glow-pink'"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl"
                  aria-hidden="true"
                >
                  {{ voice.avatar }}
                </span>
                <div>
                  <p class="text-sm font-bold leading-snug text-white/90">{{ voice.name }}</p>
                  <span
                    class="mt-1 inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wider"
                    :class="
                      voice.category === 'business'
                        ? 'border-gold/50 bg-gold/10 text-gold'
                        : 'border-kira-pink/50 bg-kira-pink/10 text-kira-pink'
                    "
                  >
                    {{ voice.role }}
                  </span>
                </div>
              </div>
            </div>

            <p class="mt-4 text-sm tracking-[0.2em] text-gold" :aria-label="`評価 5点満点中${voice.rating}点`">
              <span aria-hidden="true">{{ '★'.repeat(voice.rating) }}<span class="text-white/20">{{ '★'.repeat(5 - voice.rating) }}</span></span>
            </p>

            <h3 class="mt-3 text-base font-black leading-relaxed tracking-wider text-white">
              {{ voice.title }}
            </h3>
            <p class="mt-3 flex-1 text-sm leading-loose text-white/70">{{ voice.body }}</p>
            <p class="mt-5 text-xs text-white/40">{{ formatDate(voice.date) }}</p>
          </div>
        </div>

        <p class="mt-12 text-center text-xs text-white/40">※掲載の声はイメージです。</p>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night to-night-deep py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="193" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 class="text-holo section-title">ここにCTAの見出し</h2>
          <div class="holo-divider" />
          <p class="mt-8 leading-loose text-white/80 md:text-lg">
            ここにCTAの本文を入れる。<br class="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
          <div class="mt-10">
            <NuxtLink to="/contact/" class="btn-holo hover-sparkle">お問い合わせはこちら</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
