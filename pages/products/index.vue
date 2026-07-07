<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `商品紹介 | ${brand.name}`,
  description: `${brand.name}の商品紹介ページ。ここに商品ラインアップの説明文（120字前後）を入れる。`,
  path: '/products/',
})

// ここに商品1のスペックを書く
const product1Specs = [
  { label: 'スペック1', value: 'ここに値を入れる' },
  { label: 'スペック2', value: 'ここに値を入れる' },
  { label: 'スペック3', value: 'ここに値を入れる' },
  { label: 'スペック4', value: 'ここに値を入れる' },
]

// ここに商品2のスペックを書く
const product2Specs = [
  { label: 'スペック1', value: 'ここに値を入れる' },
  { label: 'スペック2', value: 'ここに値を入れる' },
  { label: 'スペック3', value: 'ここに値を入れる' },
  { label: 'スペック4', value: 'ここに値を入れる' },
]

// ここに商品の3つのこだわりを書く
const secrets = [
  {
    icon: '💎',
    title: 'こだわりその1',
    description:
      'ここにこだわり1の説明文を入れる。素材・製法・デザインなど、商品を特別にしている理由を具体的に3〜4文で書く。',
  },
  {
    icon: '✨',
    title: 'こだわりその2',
    description:
      'ここにこだわり2の説明文を入れる。競合にはない独自の工夫を、体験と結びつけて3〜4文で書く。',
  },
  {
    icon: '📸',
    title: 'こだわりその3',
    description:
      'ここにこだわり3の説明文を入れる。ユーザーが思わず誰かに伝えたくなるポイントを3〜4文で書く。',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Page Header ===== -->
    <section class="relative overflow-hidden py-24 text-center md:py-32">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.2)_0%,transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,105,180,0.1)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="28" :diamonds="10" :seed="11" />
      <div class="relative z-10 px-6">
        <p class="font-display text-sm italic tracking-[0.5em] text-kira-cyan">PRODUCTS</p>
        <h1 class="text-holo mt-4 section-title">商品紹介</h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/80 md:text-lg">
          ここに商品紹介ページの導入文を入れる。<br class="md:hidden" />ラインアップの魅力をひとことで。
        </p>
      </div>
    </section>

    <!-- ===== Product 01 ===== -->
    <section class="py-20">
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <FadeIn>
          <div
            class="glass-card hover:shadow-glow-pink relative order-1 overflow-hidden p-12"
          >
            <SparkleBackground :count="14" :seed="31" />
            <!-- 商品画像に差し替える（現在はCSSプレースホルダー） -->
            <div class="animate-float-slow relative z-10 mx-auto flex h-72 w-32 items-end justify-center">
              <div class="relative h-full w-24">
                <div
                  class="absolute bottom-0 h-56 w-full rounded-b-xl rounded-t-md border border-kira-pink/60 bg-gradient-to-b from-kira-pink/25 via-kira-purple/15 to-kira-cyan/10 shadow-glow-pink"
                />
                <div class="absolute left-1/2 top-4 h-16 w-7 -translate-x-1/2 rounded-t-lg border border-kira-pink/60 bg-kira-pink/10" />
                <div class="absolute left-1/2 top-0 h-5 w-9 -translate-x-1/2 rounded-sm bg-gold" />
                <div class="absolute left-1/2 top-32 w-16 -translate-x-1/2 rounded border border-gold/50 bg-night/70 py-2 text-center backdrop-blur-sm">
                  <span class="text-shimmer block text-[10px] font-black tracking-widest">BRAND</span>
                  <span class="mt-1 block animate-twinkle text-xl text-gold">◆</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn :delay="120">
          <div class="order-2">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">PRODUCT 01</p>
            <h2 class="text-holo mt-3 text-3xl font-black tracking-widest md:text-4xl">商品名その1</h2>
            <p class="mt-6 leading-loose text-white/80">
              ここに商品1の紹介文（1段落目）を入れる。見た目・第一印象・存在感など、最初に伝わる魅力を書く。
            </p>
            <p class="mt-4 leading-loose text-white/80">
              ここに商品1の紹介文（2段落目）を入れる。どんなシーン・どんなユーザーに向いているのかを書く。
            </p>
            <dl class="mt-8 divide-y divide-white/10 border-y border-white/10">
              <div v-for="spec in product1Specs" :key="spec.label" class="flex justify-between py-3 text-sm">
                <dt class="font-bold tracking-widest text-gold">{{ spec.label }}</dt>
                <dd class="text-white/80">{{ spec.value }}</dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Product 02 ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-20">
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <FadeIn :delay="120">
          <div class="order-2 md:order-1">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">PRODUCT 02</p>
            <h2 class="text-holo mt-3 text-3xl font-black tracking-widest md:text-4xl">商品名その2</h2>
            <p class="mt-6 leading-loose text-white/80">
              ここに商品2の紹介文（1段落目）を入れる。商品1との違い・組み合わせの魅力を書く。
            </p>
            <p class="mt-4 leading-loose text-white/80">
              ここに商品2の紹介文（2段落目）を入れる。この商品ならではの体験価値を書く。
            </p>
            <dl class="mt-8 divide-y divide-white/10 border-y border-white/10">
              <div v-for="spec in product2Specs" :key="spec.label" class="flex justify-between py-3 text-sm">
                <dt class="font-bold tracking-widest text-gold">{{ spec.label }}</dt>
                <dd class="text-white/80">{{ spec.value }}</dd>
              </div>
            </dl>
          </div>
        </FadeIn>
        <FadeIn>
          <div
            class="glass-card hover:shadow-glow-cyan relative order-1 overflow-hidden p-12 md:order-2"
          >
            <SparkleBackground :count="14" :seed="47" />
            <!-- 商品画像に差し替える（現在はCSSプレースホルダー） -->
            <div class="animate-float-slow relative z-10 mx-auto flex h-72 w-40 items-end justify-center pb-8">
              <div class="relative h-32 w-24">
                <div
                  class="absolute bottom-0 h-full w-full rounded-b-lg border border-kira-cyan/60 bg-gradient-to-b from-kira-cyan/30 via-kira-purple/15 to-kira-pink/10 shadow-glow-cyan [clip-path:polygon(8%_0,92%_0,82%_100%,18%_100%)]"
                />
                <div class="absolute inset-x-6 top-4 h-px bg-kira-cyan/40" />
                <div class="absolute inset-x-8 top-8 h-px bg-kira-cyan/30" />
                <span class="absolute left-1/2 top-12 -translate-x-1/2 animate-twinkle text-lg text-gold">◆</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== こだわり ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="18" :seed="63" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-gold">OUR CRAFT</p>
            <h2 class="text-holo mt-4 section-title">3つのこだわり</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-8 max-w-2xl leading-loose text-white/80">
              ここにこだわりセクションの導入文を入れる。<br class="hidden md:block" />
              なぜこの商品が選ばれるのか、理由を予告する。
            </p>
          </div>
        </FadeIn>
        <div class="mt-14 grid gap-8 md:grid-cols-3">
          <FadeIn v-for="(secret, i) in secrets" :key="secret.title" :delay="i * 120">
            <div class="glass-card hover-sparkle h-full p-8">
              <span class="text-4xl" aria-hidden="true">{{ secret.icon }}</span>
              <h3 class="mt-4 text-xl font-black tracking-wider text-gold">{{ secret.title }}</h3>
              <p class="mt-4 text-sm leading-loose text-white/70">{{ secret.description }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-[#1c0033] to-night py-20">
      <SparkleBackground :count="16" :diamonds="6" :seed="77" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 class="text-holo section-title">ご相談・お見積り</h2>
          <div class="holo-divider" />
          <p class="mt-8 leading-loose text-white/80">
            ここにCTAの本文を入れる。<br />
            ご興味のある方はお気軽にお問い合わせください。
          </p>
          <div class="mt-8">
            <NuxtLink to="/contact/" class="btn-holo hover-sparkle">お問い合わせ</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
