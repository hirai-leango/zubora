<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `${brand.name} | ${brand.tagline}`,
  description: brand.description,
  path: '/',
})

// ここに商品・サービスの3つの強みを書く
const storyPoints = [
  {
    icon: '✨',
    title: '特徴その1',
    description:
      'ここに1つ目の特徴の説明文を入れる。何がどう優れているのか、具体的なディテールを2〜3文で書く。',
  },
  {
    icon: '💫',
    title: '特徴その2',
    description:
      'ここに2つ目の特徴の説明文を入れる。競合との違いや、こだわりのポイントを2〜3文で書く。',
  },
  {
    icon: '⭐',
    title: '特徴その3',
    description:
      'ここに3つ目の特徴の説明文を入れる。品質・体験・価格など、選ばれる理由を2〜3文で書く。',
  },
]

// ここに主力プロダクト（2つ）を書く
const teaserProducts = [
  {
    emoji: '🎁',
    en: 'PRODUCT 01',
    name: '商品名その1',
    description:
      'ここに商品1の紹介文を入れる。どんな場面で、誰に、どんな価値を届けるのかを書く。',
    glow: 'hover:shadow-glow-pink',
    accent: 'text-kira-pink',
  },
  {
    emoji: '🎀',
    en: 'PRODUCT 02',
    name: '商品名その2',
    description:
      'ここに商品2の紹介文を入れる。商品1との違いや、組み合わせて使う魅力を書く。',
    glow: 'hover:shadow-glow-cyan',
    accent: 'text-kira-cyan',
  },
]

// ここに体験の流れ（3ステップ）を書く
const experienceSteps = [
  {
    step: '01',
    title: 'ステップ1の見出し',
    description: 'ここにステップ1の説明を入れる。ユーザーが最初に体験する瞬間を描写する。',
  },
  {
    step: '02',
    title: 'ステップ2の見出し',
    description: 'ここにステップ2の説明を入れる。体験が盛り上がる中心の瞬間を描写する。',
  },
  {
    step: '03',
    title: 'ステップ3の見出し',
    description: 'ここにステップ3の説明を入れる。体験の余韻や、シェアしたくなる理由を描写する。',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <!-- 背景グロー -->
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.22)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,105,180,0.14)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,255,255,0.12)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <!-- きらめき背景 -->
      <SparkleBackground :count="36" :diamonds="14" :seed="7" />

      <div class="relative z-10 px-6 py-20 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">
          BRAND CONCEPT
        </p>
        <h1 class="text-holo mt-6 text-5xl font-black leading-tight tracking-wider md:text-8xl">
          {{ brand.name }}
        </h1>
        <p class="text-shimmer mt-8 text-xl font-black tracking-[0.25em] md:text-3xl">
          {{ brand.tagline }}
        </p>
        <p class="mt-6 leading-loose text-white/70 md:text-lg">
          ここにヒーローの補足文を入れる。<br class="md:hidden" />
          ブランドの世界観をひとことで伝える。
        </p>
        <div class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink to="/products/" class="btn-holo hover-sparkle">商品を見る</NuxtLink>
          <NuxtLink to="/contact/" class="btn-outline-holo">お問い合わせ</NuxtLink>
        </div>
      </div>

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold" aria-hidden="true">
        <span class="block animate-bounce text-2xl">▾</span>
      </div>
    </section>

    <!-- ===== Brand Story ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="16" :seed="21" />
      <div class="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">BRAND STORY</p>
            <h2 class="text-holo mt-4 section-title">ここにブランドの核となる一文</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-10 max-w-3xl leading-loose text-white/80 md:text-lg">
              ここにブランドストーリーの導入文を入れる。<br class="hidden md:block" />
              どんな課題や想いから生まれたのかを、<br class="hidden md:block" />
              3行程度で情緒的に書く。
            </p>
          </div>
        </FadeIn>

        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <FadeIn v-for="(point, i) in storyPoints" :key="point.title" :delay="i * 120">
            <div class="glass-card hover-sparkle h-full p-8 text-center">
              <span class="text-4xl" aria-hidden="true">{{ point.icon }}</span>
              <h3 class="mt-5 text-xl font-black tracking-wider text-gold">{{ point.title }}</h3>
              <p class="mt-4 text-sm leading-loose text-white/70">{{ point.description }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Product Teaser ===== -->
    <section class="relative overflow-hidden py-24">
      <div class="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">LINE UP</p>
            <h2 class="text-holo mt-4 section-title">プロダクトラインアップ</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>

        <div class="mt-16 grid gap-8 md:grid-cols-2">
          <FadeIn v-for="(product, i) in teaserProducts" :key="product.name" :delay="i * 150">
            <NuxtLink
              to="/products/"
              class="glass-card group relative block overflow-hidden p-10 text-center"
              :class="product.glow"
            >
              <SparkleBackground :count="10" :seed="i * 31 + 3" />
              <div class="relative z-10">
                <span
                  class="inline-block text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  aria-hidden="true"
                >
                  {{ product.emoji }}
                </span>
                <p class="mt-6 font-display text-xs italic tracking-[0.4em]" :class="product.accent">
                  {{ product.en }}
                </p>
                <h3 class="mt-2 text-2xl font-black tracking-widest text-white">{{ product.name }}</h3>
                <p class="mt-4 text-sm leading-loose text-white/70">{{ product.description }}</p>
                <span class="mt-6 inline-block text-sm font-bold tracking-widest text-gold">
                  詳しく見る →
                </span>
              </div>
            </NuxtLink>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Experience Section ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-[#1c0033] to-night py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="55" />
      <div class="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-gold">EXPERIENCE</p>
            <h2 class="text-holo mt-4 section-title">ここに体験セクションの見出し</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-10 max-w-3xl leading-loose text-white/80 md:text-lg">
              ここに体験セクションの導入文を入れる。<br class="hidden md:block" />
              商品がユーザーの行動や気持ちをどう変えるのかを書く。
            </p>
          </div>
        </FadeIn>

        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <FadeIn v-for="(item, i) in experienceSteps" :key="item.step" :delay="i * 120">
            <div class="glass-card h-full p-8">
              <p class="text-holo font-display text-4xl font-bold italic">{{ item.step }}</p>
              <h3 class="mt-4 text-lg font-black tracking-wider text-white">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-loose text-white/70">{{ item.description }}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn :delay="200">
          <div class="mt-16 text-center">
            <p class="text-lg font-black tracking-widest text-white md:text-xl">
              ここにクロージングのひとことを入れる。
            </p>
            <div class="mt-8">
              <NuxtLink to="/contact/" class="btn-holo hover-sparkle">お問い合わせはこちら</NuxtLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
