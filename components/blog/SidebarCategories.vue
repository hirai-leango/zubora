<script setup lang="ts">
const { categories } = useBlogArticles()
</script>

<template>
  <nav class="glass-card p-5" aria-label="ブログカテゴリー">
    <p class="text-sm font-black tracking-wider text-gold">🗂 カテゴリー</p>
    <ul class="mt-3 divide-y divide-white/10">
      <li v-for="cat in categories" :key="cat.name">
        <NuxtLink
          :to="`/blog/?category=${encodeURIComponent(cat.name)}`"
          class="flex items-center justify-between py-2.5 text-sm text-white/80 transition-colors hover:text-gold"
        >
          <span>{{ cat.name }}</span>
          <span class="rounded-full border border-gold/40 px-2.5 py-0.5 text-xs text-gold">
            {{ cat.count }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
