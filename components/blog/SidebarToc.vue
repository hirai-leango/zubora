<script setup lang="ts">
interface TocHeading {
  id: string
  text: string
  level: string
}

const headings = ref<TocHeading[]>([])
const activeId = ref('')
const collapsed = ref(true)

let observer: IntersectionObserver | null = null

const slugifyHeading = (text: string) => text.trim().replace(/\s+/g, '-')

onMounted(() => {
  const els = document.querySelectorAll<HTMLElement>(
    '.article-body h2, .article-body h3',
  )
  // アンカーリンク用に見出しへ ID を付与
  els.forEach((el) => {
    if (!el.id) el.id = slugifyHeading(el.textContent || '')
  })
  headings.value = Array.from(els).map((el) => ({
    id: el.id,
    text: (el.textContent || '').trim(),
    level: el.tagName,
  }))
  // スクロール位置に応じて現在のセクションをハイライト
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id
      })
    },
    { rootMargin: '-20% 0% -70% 0%' },
  )
  els.forEach((el) => observer!.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav v-if="headings.length" class="glass-card p-5" aria-label="サイドバー目次">
    <!-- モバイルでは開閉式 -->
    <button
      type="button"
      class="flex w-full items-center justify-between text-sm font-black tracking-wider text-gold lg:pointer-events-none"
      :aria-expanded="!collapsed"
      @click="collapsed = !collapsed"
    >
      <span>📖 目次</span>
      <span class="lg:hidden" aria-hidden="true">{{ collapsed ? '▼' : '▲' }}</span>
    </button>
    <ul
      class="mt-3 max-h-[60vh] space-y-0.5 overflow-y-auto lg:block"
      :class="collapsed ? 'hidden' : 'block'"
    >
      <li v-for="heading in headings" :key="heading.id">
        <a
          :href="`#${heading.id}`"
          class="block rounded-r-md border-l-2 py-1.5 text-xs leading-relaxed transition-colors"
          :class="[
            heading.level === 'H3' ? 'pl-7' : 'pl-3',
            activeId === heading.id
              ? 'border-gold bg-gold/10 font-bold text-gold'
              : 'border-transparent text-white/60 hover:bg-white/5 hover:text-gold',
          ]"
          @click.prevent="scrollTo(heading.id)"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
