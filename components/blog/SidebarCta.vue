<script setup lang="ts">
import { brand } from '~/brand.config'
</script>

<template>
  <div class="rounded-soft border border-kira-pink/40 bg-kira-pink/15 p-6">
    <p class="text-2xl" aria-hidden="true">🫧</p>
    <p class="mt-2 text-base font-semibold leading-snug tracking-wide text-gold">
      {{ brand.name }}、<br />試してみます？
    </p>
    <p class="mt-3 text-xs leading-relaxed text-gold/70">
      顔・体・頭皮を1本で洗える泡。プッシュの回数だけ覚えれば、あとはいつも通りです。
    </p>
    <NuxtLink
      to="/products/"
      class="mt-5 inline-block rounded-full bg-gold px-7 py-2.5 text-sm font-medium tracking-wide text-night transition-transform hover:-translate-y-0.5"
    >
      商品を見る
    </NuxtLink>
  </div>
</template>
