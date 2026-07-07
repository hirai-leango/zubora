<script setup lang="ts">
// 旧テンプレートのキラキラ背景。zubora では装飾を描画しない。
// 既存ページからの参照を壊さないよう、props だけ受け取って何も出さない。
withDefaults(
  defineProps<{
    /** （互換用）きらめく星の数 */
    count?: number
    /** （互換用）落下するダイヤの数 */
    diamonds?: number
    /** （互換用）シード値 */
    seed?: number
  }>(),
  { count: 0, diamonds: 0, seed: 0 },
)
</script>

<template>
  <span class="hidden" aria-hidden="true" />
</template>
