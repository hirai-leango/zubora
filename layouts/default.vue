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
    <!-- Header : 余白多め、罫はなし。ロゴ左・ナビ右のゆったり構成 -->
    <header class="fixed inset-x-0 top-0 z-50 bg-night/90 backdrop-blur-sm">
      <div class="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-10">
        <NuxtLink to="/" class="link-quiet flex items-baseline gap-4">
          <span class="font-display text-xl font-normal lowercase tracking-[0.12em]">{{ brand.name }}</span>
          <span class="hidden text-[10px] tracking-[0.2em] text-gold/40 sm:inline">何もしてないのに、いい感じ。</span>
        </NuxtLink>

        <!-- Desktop nav : 小さく、トラッキングを効かせて右寄せ -->
        <nav class="hidden items-center gap-9 md:flex" aria-label="メイン">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-xs tracking-[0.18em] text-gold/55 transition-colors duration-300 hover:text-gold"
            active-class="text-gold underline decoration-kira-pink/70 decoration-1 underline-offset-[10px]"
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
            class="h-px w-6 bg-gold transition-transform"
            :class="{ 'translate-y-[7px] rotate-45': menuOpen }"
          />
          <span class="h-px w-6 bg-gold transition-opacity" :class="{ 'opacity-0': menuOpen }" />
          <span
            class="h-px w-6 bg-gold transition-transform"
            :class="{ '-translate-y-[7px] -rotate-45': menuOpen }"
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
          class="border-t border-gold/10 bg-night/95 backdrop-blur-sm md:hidden"
          aria-label="モバイルメニュー"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block border-b border-gold/5 px-6 py-4 text-sm tracking-[0.12em] text-gold/70 transition-colors hover:text-gold"
            active-class="text-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </Transition>
    </header>

    <!-- Page content -->
    <main class="flex-1 pt-20">
      <slot />
    </main>

    <!-- Footer : 雑誌の奥付ふう。ヘアライン1本と小さな活字 -->
    <footer class="mt-24 border-t border-gold/15">
      <div class="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-20">
        <div class="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p class="font-display text-3xl font-normal lowercase tracking-[0.12em]">{{ brand.name }}</p>
            <p class="mt-3 text-xs tracking-[0.1em] text-gold/55">{{ brand.tagline }}</p>
            <p class="mt-12 max-w-xs text-xs leading-loose text-gold/40">
              シャンプー、洗顔、ボディソープ。全部これです。
            </p>
          </div>
          <div class="md:justify-self-end md:text-right">
            <span class="eyebrow">index</span>
            <nav class="mt-5 flex flex-col gap-3 md:items-end" aria-label="フッター">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="link-quiet text-xs tracking-[0.15em] text-gold/60"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
            <nav class="mt-8 flex flex-col gap-2 md:items-end" aria-label="規約・ポリシー">
              <NuxtLink
                v-for="link in legalLinks"
                :key="link.to"
                :to="link.to"
                class="link-quiet text-[10px] tracking-[0.15em] text-gold/40"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>
        </div>
        <div class="mt-16 flex flex-wrap items-baseline justify-between gap-4 border-t border-gold/10 pt-6">
          <p class="text-[10px] tracking-[0.25em] text-gold/35">
            &copy; {{ new Date().getFullYear() }} {{ brand.name }}. All rights reserved.
          </p>
          <p class="font-display text-[10px] lowercase tracking-[0.3em] text-gold/30">zubora — do less</p>
        </div>
      </div>
    </footer>
  </div>
</template>
