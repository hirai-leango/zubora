<script setup lang="ts">
// スクロールで画面に入ったらフェードインさせるラッパー
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const target = ref<HTMLElement | null>(null)
const visible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    if (entry?.isIntersecting) {
      visible.value = true
      stop()
    }
  },
  { threshold: 0.15 },
)
</script>

<template>
  <div
    ref="target"
    class="fade-in-up"
    :class="{ 'is-visible': visible }"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>
