<script setup lang="ts">
import { brand } from '~/brand.config'

const menuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'トップ' },
  { to: '/about/', label: 'ブランド' },
  { to: '/products/', label: '商品' },
  { to: '/scenes/', label: '活用シーン' },
  { to: '/voices/', label: '口コミ' },
  { to: '/blog/', label: 'ブログ' },
  { to: '/contact/', label: 'お問い合わせ' },
]

const legalLinks = [
  { to: '/privacy/', label: 'プライバシーポリシー' },
  { to: '/legal/', label: '特定商取引法に基づく表記' },
]

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-night">
    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <NuxtLink to="/" class="hover-sparkle flex items-center gap-2">
          <span class="text-xl" aria-hidden="true">✦</span>
          <span class="text-shimmer text-lg font-black tracking-widest md:text-xl">{{ brand.name }}</span>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-8 md:flex" aria-label="メイン">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-bold tracking-widest text-white/80 transition-colors hover:text-gold"
            active-class="text-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Mobile hamburger -->
        <button
          class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          :aria-expanded="menuOpen"
          aria-label="メニューを開閉"
          @click="menuOpen = !menuOpen"
        >
          <span
            class="h-0.5 w-6 rounded bg-gold transition-transform"
            :class="{ 'translate-y-2 rotate-45': menuOpen }"
          />
          <span class="h-0.5 w-6 rounded bg-gold transition-opacity" :class="{ 'opacity-0': menuOpen }" />
          <span
            class="h-0.5 w-6 rounded bg-gold transition-transform"
            :class="{ '-translate-y-2 -rotate-45': menuOpen }"
          />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <nav
          v-if="menuOpen"
          class="border-t border-white/10 bg-night/95 backdrop-blur-md md:hidden"
          aria-label="モバイルメニュー"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block border-b border-white/5 px-6 py-4 font-bold tracking-widest text-white/80 transition-colors hover:text-gold"
            active-class="text-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </Transition>
    </header>

    <!-- Page content -->
    <main class="flex-1 pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="relative overflow-hidden border-t border-white/10 bg-night-deep">
      <SparkleBackground :count="14" :seed="99" />
      <div class="relative z-10 mx-auto max-w-6xl px-6 py-12 text-center">
        <p class="text-holo text-2xl font-black tracking-widest">{{ brand.name }}</p>
        <p class="mt-2 font-display text-sm italic text-white/50">{{ brand.tagline }}</p>
        <nav class="mt-6 flex flex-wrap justify-center gap-6" aria-label="フッター">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm text-white/60 transition-colors hover:text-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <nav class="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="規約・ポリシー">
          <NuxtLink
            v-for="link in legalLinks"
            :key="link.to"
            :to="link.to"
            class="text-xs text-white/50 transition-colors hover:text-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <!-- 注意書きが必要な商材（酒類など）はここに免責・法定表示を追加する -->
        <p class="mt-8 text-xs text-white/40">
          &copy; {{ new Date().getFullYear() }} {{ brand.name }}. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
