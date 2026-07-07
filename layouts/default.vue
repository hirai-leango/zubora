<script setup lang="ts">
import { brand } from '~/brand.config'

const menuOpen = ref(false)

const navLinks = [
  { to: '/products/', label: '商品' },
  { to: '/scenes/', label: '使い方' },
  { to: '/blog/', label: 'ジャーナル' },
  { to: '/about/', label: 'zuboraについて' },
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
  <div class="flex min-h-screen flex-col bg-night text-gold">
    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-night/85 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:px-8">
        <NuxtLink to="/" class="flex items-baseline gap-2">
          <span class="font-display text-xl font-semibold lowercase tracking-wide">{{ brand.name }}</span>
          <span class="hidden text-[11px] tracking-wide text-gold/50 sm:inline">何もしてないのに、いい感じ。</span>
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-7 md:flex" aria-label="メイン">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm text-gold/70 transition-colors hover:text-gold"
            active-class="text-gold underline decoration-kira-pink decoration-2 underline-offset-8"
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
          class="border-t border-gold/10 bg-night/95 backdrop-blur-md md:hidden"
          aria-label="モバイルメニュー"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block border-b border-gold/5 px-6 py-4 text-gold/80 transition-colors hover:text-gold"
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
    <footer class="border-t border-gold/10 bg-night-deep">
      <div class="mx-auto max-w-5xl px-5 py-14 md:px-8">
        <p class="font-display text-2xl font-semibold lowercase tracking-wide">{{ brand.name }}</p>
        <p class="mt-2 text-sm text-gold/60">{{ brand.tagline }}</p>
        <nav class="mt-8 flex flex-wrap gap-x-7 gap-y-3" aria-label="フッター">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm text-gold/60 transition-colors hover:text-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <nav class="mt-4 flex flex-wrap gap-x-7 gap-y-2" aria-label="規約・ポリシー">
          <NuxtLink
            v-for="link in legalLinks"
            :key="link.to"
            :to="link.to"
            class="text-xs text-gold/50 transition-colors hover:text-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <p class="mt-10 text-xs leading-relaxed text-gold/40">
          シャンプー、洗顔、ボディソープ。全部これです。
        </p>
        <p class="mt-2 text-xs text-gold/40">
          &copy; {{ new Date().getFullYear() }} {{ brand.name }}. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
