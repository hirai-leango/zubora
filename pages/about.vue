<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `ブランドストーリー | ${brand.name}`,
  description: `${brand.name}のブランドストーリー。ここにブランドが生まれた理由とビジョンの要約（120字前後）を入れる。`,
  path: '/about/',
})

// ここにブランドを象徴する数字を4つ書く
const stats = [
  { icon: '✨', value: '数字1', label: 'ここに数字1の説明を入れる' },
  { icon: '💫', value: '数字2', label: 'ここに数字2の説明を入れる' },
  { icon: '🎁', value: '数字3', label: 'ここに数字3の説明を入れる' },
  { icon: '⭐', value: '数字4', label: 'ここに数字4の説明を入れる' },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.22)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,105,180,0.14)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,255,255,0.12)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="32" :diamonds="12" :seed="61" />

      <div class="relative z-10 px-6 py-24 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">BRAND STORY</p>
        <h1 class="text-holo mt-6 text-4xl font-black leading-tight tracking-wider md:text-6xl">
          ここにブランドの<br class="md:hidden" />ビジョンを一文で。
        </h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/70 md:text-lg">
          ここにヒーローの補足文を入れる。<br class="md:hidden" />ブランドの原点をひとことで。<br />
          それが、{{ brand.name }}の始まりです。
        </p>
      </div>
    </section>

    <!-- ===== 誕生のストーリー ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="16" :seed="72" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">ORIGIN</p>
            <h2 class="text-holo mt-4 section-title">誕生のストーリー</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <div class="glass-card mt-12 p-8 md:p-12">
            <p class="leading-loose text-white/80 md:text-lg">
              ここに誕生ストーリーの導入文を入れる。きっかけとなった出来事や光景を描写する。
            </p>
            <p class="mt-6 leading-loose text-white/80 md:text-lg">
              ここに課題の描写を入れる。創業者が感じた「もったいない」「変えたい」という気づきを、具体的なシーンとして書く。
            </p>
            <p class="mt-6 leading-loose text-white/80 md:text-lg">
              ——そこから生まれた想いを、<strong class="font-bold text-gold">ここに強調して書く。</strong>
            </p>
            <p class="mt-6 leading-loose text-white/80 md:text-lg">
              その想いから、{{ brand.name }}は生まれました。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== アイデンティティ ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="16" :diamonds="6" :seed="83" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">IDENTITY</p>
            <h2 class="text-holo mt-4 section-title">ここにアイデンティティの見出し</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <p class="mx-auto mt-10 max-w-3xl text-center leading-loose text-white/80 md:text-lg">
            ここにブランドの象徴（トレードマーク）の説明を入れる。<br class="hidden md:block" />
            {{ brand.name }}を一目で identify させる要素を<strong class="font-bold text-gold">強調</strong>して書く。
          </p>
          <p class="mx-auto mt-6 max-w-3xl text-center leading-loose text-white/80 md:text-lg">
            ここに補足の段落を入れる。<br class="hidden md:block" />
            その象徴がユーザー体験の中でどう機能するかを書く。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== ビジョン ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="20" :seed="94" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-gold">VISION</p>
            <h2 class="text-holo mt-4 section-title">ここにビジョンの見出し</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-10 max-w-3xl leading-loose text-white/80 md:text-lg">
              ここにビジョンの本文を入れる。<br class="hidden md:block" />
              ブランドが目指す未来の情景を描写し、<br class="hidden md:block" />
              読み手が共感できるゴールを3行程度で書く。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== 数字で見るブランド ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="14" :seed="105" />
      <div class="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-purple">BY THE NUMBERS</p>
            <h2 class="text-holo mt-4 section-title">数字で見る{{ brand.name }}</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.label" class="glass-card p-8 text-center">
              <p class="text-3xl" aria-hidden="true">{{ stat.icon }}</p>
              <p class="text-shimmer mt-4 text-4xl font-black tracking-wider">{{ stat.value }}</p>
              <p class="mt-3 text-sm leading-relaxed text-white/70">{{ stat.label }}</p>
            </div>
          </div>
          <p class="mt-6 text-center text-xs text-white/40">※ここに注記を入れる（必要な場合）。</p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night to-night-deep py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="116" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 class="text-holo section-title">ここにCTAの見出し</h2>
          <div class="holo-divider" />
          <p class="mt-8 leading-loose text-white/80 md:text-lg">
            ここにCTAの本文を入れる。<br class="hidden md:block" />
            誰に向けて、何を提供できるのかを書く。
          </p>
          <div class="mt-10">
            <NuxtLink to="/contact/" class="btn-holo hover-sparkle">お問い合わせはこちら</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
