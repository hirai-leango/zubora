<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `お問い合わせ | ${brand.name}`,
  description: `${brand.name}へのお問い合わせはこちら。ここにお問い合わせページの説明文（120字前後）を入れる。`,
  path: '/contact/',
})

// contactEmail が未設定の間はプレースホルダーを表示する
const contactEmail = brand.contactEmail || 'info@example.com'
</script>

<template>
  <div class="relative min-h-[70vh] overflow-hidden bg-night py-24">
    <SparkleBackground :count="30" :diamonds="8" :seed="17" />
    <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <FadeIn>
        <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">CONTACT</p>
        <h1 class="text-holo mt-4 section-title">お問い合わせ</h1>
        <div class="holo-divider" />
        <p class="mt-10 leading-loose text-white/80 md:text-lg">
          {{ brand.name }}に関するお問い合わせはこちら。<br class="hidden md:block" />
          ここに受け付ける相談内容の例（価格・サンプル・導入など）を書く。
        </p>
      </FadeIn>
      <FadeIn :delay="150">
        <div class="glass-card mx-auto mt-12 max-w-xl p-8 md:p-10">
          <p class="text-sm tracking-widest text-white/60">メールでのお問い合わせ</p>
          <p class="mt-3 text-xl font-bold text-gold md:text-2xl">{{ contactEmail }}</p>
          <p class="mt-6 text-sm leading-relaxed text-white/60">
            ここに添えてほしい情報（お名前・ご希望内容など）を案内する文章を入れる。
          </p>
          <div class="mt-8">
            <a :href="`mailto:${contactEmail}`" class="btn-holo hover-sparkle">メールを送る</a>
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
</template>
