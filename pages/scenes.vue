<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `活用シーン | ${brand.name}`,
  description: `${brand.name}の活用シーン・アイデア集。ここにシーン紹介ページの説明文（120字前後）を入れる。`,
  path: '/scenes/',
})

// ここにシーン別の活用アイデアを6つ書く
const scenes = [
  {
    icon: '🎉',
    title: 'シーン1の見出し',
    description:
      'ここにシーン1の説明を入れる。どんな場面で、商品がどう活きるのかを2〜3文で書く。',
    glow: 'hover:shadow-glow-pink',
  },
  {
    icon: '💫',
    title: 'シーン2の見出し',
    description:
      'ここにシーン2の説明を入れる。ユーザーの気持ちがどう動くのかを2〜3文で書く。',
    glow: 'hover:shadow-glow-purple',
  },
  {
    icon: '🏆',
    title: 'シーン3の見出し',
    description:
      'ここにシーン3の説明を入れる。イベントや記念日など特別な場面での使い方を書く。',
    glow: 'hover:shadow-glow-gold',
  },
  {
    icon: '📸',
    title: 'シーン4の見出し',
    description:
      'ここにシーン4の説明を入れる。SNS拡散や口コミにつながる使い方を書く。',
    glow: 'hover:shadow-glow-cyan',
  },
  {
    icon: '🛋',
    title: 'シーン5の見出し',
    description:
      'ここにシーン5の説明を入れる。日常づかい・常設での活用方法を書く。',
    glow: 'hover:shadow-glow-gold',
  },
  {
    icon: '🕴',
    title: 'シーン6の見出し',
    description:
      'ここにシーン6の説明を入れる。プレミアムな組み合わせ・上位プランの提案を書く。',
    glow: 'hover:shadow-glow-purple',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,105,180,0.2)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(191,95,255,0.15)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="30" :diamonds="10" :seed="127" />

      <div class="relative z-10 px-6 py-24 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">SCENE IDEAS</p>
        <h1 class="text-holo mt-6 text-4xl font-black leading-tight tracking-wider md:text-6xl">
          ここにシーンページの<br class="md:hidden" />キャッチコピー
        </h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/70 md:text-lg">
          {{ brand.name }}の活用アイデアをご紹介。<br class="hidden md:block" />
          ここにページの導入文を入れる。
        </p>
      </div>
    </section>

    <!-- ===== シーン別活用アイデア ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="18" :seed="138" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">IDEAS</p>
            <h2 class="text-holo mt-4 section-title">シーン別活用アイデア</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn v-for="(scene, i) in scenes" :key="scene.title" :delay="i * 100">
            <div class="glass-card h-full p-8" :class="scene.glow">
              <p class="text-4xl" aria-hidden="true">{{ scene.icon }}</p>
              <h3 class="mt-5 text-xl font-black tracking-wider text-gold">{{ scene.title }}</h3>
              <p class="mt-4 text-sm leading-loose text-white/70">{{ scene.description }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 導入のメリット ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="16" :diamonds="6" :seed="149" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">MERIT</p>
            <h2 class="text-holo mt-4 section-title">導入のメリット</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <div class="glass-card mt-12 p-8 text-center md:p-12">
            <p class="text-shimmer text-xl font-black leading-relaxed tracking-wider md:text-2xl">
              ここにメリットを象徴する<br />キーメッセージを入れる。
            </p>
            <p class="mt-8 leading-loose text-white/80">
              ここにメリットの本文を入れる。<br class="hidden md:block" />
              導入する側にとっての具体的な効果（売上・集客・満足度など）を、<br class="hidden md:block" />
              3行程度で説得力をもって書く。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night to-night-deep py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="160" />
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
