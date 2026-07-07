<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `お問い合わせ | ${brand.name}`,
  description:
    'zuboraへのお問い合わせはこちら。商品のこと、使い方のこと、気になることがあればメールでどうぞ。ゆっくりですが、ちゃんと返します。',
  path: '/contact/',
})

// contactEmail が未設定の間はプレースホルダーを表示する
const contactEmail = brand.contactEmail || 'info@example.com'
</script>

<template>
  <div class="min-h-[70vh] bg-night px-5 py-24 md:px-8">
    <div class="mx-auto max-w-5xl">
      <FadeIn>
        <p class="text-sm tracking-wide text-kira-pink">contact</p>
        <h1 class="section-title mt-4 font-display">お問い合わせ</h1>
        <p class="mt-6 max-w-2xl leading-loose text-gold/70">
          商品のこと、使い方のこと、「これって自分に合いますか」という相談。なんでもどうぞ。返信は早くないかもしれませんが、ちゃんと読んで、ちゃんと返します。
        </p>
      </FadeIn>
      <FadeIn :delay="120">
        <div class="glass-card mt-12 max-w-xl p-8 md:p-10">
          <p class="text-sm text-gold/60">メールでのお問い合わせ</p>
          <p class="mt-3 text-xl font-semibold md:text-2xl">{{ contactEmail }}</p>
          <p class="mt-5 text-sm leading-loose text-gold/60">
            お名前と、お問い合わせの内容を添えてお送りください。形式は気にしなくて大丈夫です。
          </p>
          <div class="mt-8">
            <a :href="`mailto:${contactEmail}`" class="btn-holo">メールを送る</a>
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
</template>
