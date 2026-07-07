<script setup lang="ts">
import { brand } from '~/brand.config'
</script>

<template>
  <div
    class="relative overflow-hidden rounded-3xl border border-gold/60 p-6 text-center"
    style="background: linear-gradient(135deg, #ffd700, #c9a800, #8a7200)"
  >
    <div class="relative z-10">
      <p class="text-3xl" aria-hidden="true">✨</p>
      <p class="mt-2 text-base font-black leading-snug tracking-wider text-night">
        {{ brand.name }}を<br />試してみませんか？
      </p>
      <p class="mt-3 text-xs leading-relaxed text-night/80">
        ここにサイドバーCTAの説明文を入れる。商品・サービスの価値をひとことで伝える。
      </p>
      <NuxtLink
        to="/contact/"
        class="hover-sparkle mt-5 inline-block rounded-full bg-night px-8 py-3 text-sm font-black tracking-widest text-gold transition-transform hover:scale-105"
      >
        お問い合わせ
      </NuxtLink>
    </div>
  </div>
</template>
