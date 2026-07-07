<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `使い方 | ${brand.name}`,
  description:
    'Zubora Foamの使い方はプッシュの回数だけ。1プッシュ＝顔、2プッシュ＝体、3プッシュ＝髪。毎日のお風呂での使い方を、順を追ってご紹介します。',
  path: '/scenes/',
})

// 毎日のプッシュルール
const pushRule = [
  {
    count: '1',
    target: '顔',
    body: 'ワンプッシュ分の泡を、そのまま顔へ。ごしごしこすらず、泡を転がすくらいで十分です。ぬるま湯で流します。',
  },
  {
    count: '2',
    target: '体',
    body: 'ツープッシュを手に取って、全身へ。泡はよく伸びます。タオルを使うかどうかは、お好みで。私たちは手で済ませる派です。',
  },
  {
    count: '3',
    target: '髪',
    body: 'スリープッシュを頭皮になじませて、指の腹で洗います。髪が長い日や、汗をかいた日は、もうひと押ししても大丈夫。',
  },
]

// 一日の流れ（ゆるく）
const dailyFlow = [
  {
    time: '夜、お風呂で',
    body: '3→2→1の順（髪→体→顔）で洗うと、流し残しがなくて楽です。順番を忘れても、特に問題はありません。',
  },
  {
    time: '朝、シャワーだけの日',
    body: '顔にワンプッシュ、あとはお湯を浴びるだけ、でも成立します。朝の5分は貴重なので。',
  },
  {
    time: '出張・ジム・旅行',
    body: '持っていくのは1本だけ。ポーチの中身を考える時間が、まるごと消えます。',
  },
]

const tips = [
  '泡が足りないと感じたら、素直に足してください。プッシュ数は目安です。',
  'お風呂上がりの保湿は、いつも通りに。zuboraは「洗う」担当です。',
  'スタイリング剤をしっかり使った日は、先にお湯でよく流すと落ちやすくなります。',
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Page Header ===== -->
    <section class="px-5 pb-16 pt-20 md:px-8 md:pt-28">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">how to use</p>
          <h1 class="section-title mt-4 font-display">使い方は、数えるだけ。</h1>
          <p class="mt-6 max-w-2xl leading-loose text-gold/70">
            Zubora Foamの使い方は、プッシュの回数がすべてです。1、2、3。それ以上覚えることは、たぶんありません。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Push Rule ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-purple">push rule</p>
          <h2 class="section-title mt-4 font-display">1・2・3の泡。</h2>
        </FadeIn>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn v-for="(rule, i) in pushRule" :key="rule.target" :delay="i * 100">
            <div class="glass-card h-full p-8">
              <p class="font-display text-5xl font-semibold text-kira-pink">{{ rule.count }}</p>
              <p class="mt-2 text-sm tracking-widest text-gold/50">push</p>
              <h3 class="mt-4 text-xl font-semibold tracking-wide">{{ rule.target }}</h3>
              <p class="mt-3 text-sm leading-loose text-gold/70">{{ rule.body }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Daily Flow ===== -->
    <section class="px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-purple">daily</p>
          <h2 class="section-title mt-4 font-display">毎日は、こんな感じ。</h2>
        </FadeIn>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn v-for="(flow, i) in dailyFlow" :key="flow.time" :delay="i * 100">
            <div class="glass-card h-full p-8">
              <h3 class="text-lg font-semibold tracking-wide">{{ flow.time }}</h3>
              <p class="mt-3 text-sm leading-loose text-gold/70">{{ flow.body }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Tips ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <h2 class="text-xl font-semibold tracking-wide">ちいさな補足</h2>
          <ul class="mt-6 max-w-2xl space-y-3 text-sm leading-loose text-gold/70">
            <li v-for="tip in tips" :key="tip" class="flex gap-3">
              <span class="mt-0.5 text-kira-pink" aria-hidden="true">・</span>
              <span>{{ tip }}</span>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Quiet CTA ===== -->
    <section class="px-5 py-20 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="font-display text-xl leading-relaxed text-gold/80">
            覚えました？ たぶん、もう大丈夫です。
          </p>
          <div class="mt-8">
            <NuxtLink to="/products/" class="btn-holo">商品を見る</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
