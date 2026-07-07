<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** きらめく星の数 */
    count?: number
    /** 落下するダイヤの数（0で無効） */
    diamonds?: number
    /** シード値（複数配置時に模様を変える） */
    seed?: number
  }>(),
  { count: 24, diamonds: 0, seed: 42 },
)

const COLORS = ['#FFD700', '#FF69B4', '#00FFFF', '#BF5FFF', '#FFFFFF']

// 疑似乱数（シード固定）で SSR とクライアントの描画を一致させる
function makeRand(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const twinkles = computed(() => {
  const rand = makeRand(props.seed)
  return Array.from({ length: props.count }, (_, i) => {
    const color = COLORS[Math.floor(rand() * COLORS.length)]
    return {
      id: i,
      top: `${Math.round(rand() * 100)}%`,
      left: `${Math.round(rand() * 100)}%`,
      delay: `${(rand() * 3).toFixed(2)}s`,
      duration: `${(1.8 + rand() * 2.6).toFixed(2)}s`,
      scale: (0.5 + rand() * 1.3).toFixed(2),
      color,
    }
  })
})

const fallingDiamonds = computed(() => {
  const rand = makeRand(props.seed + 7)
  return Array.from({ length: props.diamonds }, (_, i) => {
    const color = COLORS[Math.floor(rand() * COLORS.length)]
    return {
      id: i,
      left: `${Math.round(rand() * 100)}%`,
      delay: `${(rand() * 9).toFixed(2)}s`,
      duration: `${(6 + rand() * 7).toFixed(2)}s`,
      size: `${Math.round(6 + rand() * 10)}px`,
      color,
    }
  })
})
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <!-- きらめく星 -->
    <span
      v-for="s in twinkles"
      :key="`t-${s.id}`"
      class="sparkle"
      :style="{
        top: s.top,
        left: s.left,
        animationDelay: s.delay,
        animationDuration: s.duration,
        transform: `scale(${s.scale})`,
        background: `radial-gradient(circle, #fff 0%, ${s.color} 45%, transparent 75%)`,
        filter: `drop-shadow(0 0 4px ${s.color})`,
      }"
    />
    <!-- 落ちてくるダイヤモンド -->
    <span
      v-for="d in fallingDiamonds"
      :key="`d-${d.id}`"
      class="diamond"
      :style="{
        left: d.left,
        top: '-24px',
        width: d.size,
        height: d.size,
        animationDelay: d.delay,
        animationDuration: d.duration,
        background: `linear-gradient(135deg, #fff 0%, ${d.color} 60%)`,
        filter: `drop-shadow(0 0 6px ${d.color})`,
      }"
    />
  </div>
</template>
