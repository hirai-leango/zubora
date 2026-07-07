<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `使い方 | ${brand.name}`,
  description:
    '朝、シャワーで、ポンポンポン。これで終わり。1プッシュで顔、2で体、3で髪。zubora foamの使い方は、それだけです。',
  path: '/scenes/',
})

// 毎日のプッシュルール
const pushRule = [
  {
    count: '1',
    target: '顔',
    body: 'ポン、と1プッシュ。泡をそのまま顔へ。ごしごしせず、転がすくらいで、たぶん十分です。',
  },
  {
    count: '2',
    target: '体',
    body: 'ポンポン、と2プッシュ。手に取って、全身へ。泡はよく伸びるので、まあ、なんとかなります。',
  },
  {
    count: '3',
    target: '髪',
    body: 'ポンポンポン、と3プッシュ。頭皮になじませて、指の腹で。髪の長い日は、もうひと押ししても。',
  },
]

// 一日の流れ（ゆるく）
const dailyFlow = [
  {
    time: '朝、シャワーで',
    body: 'ポンポンポン。これで終わり。出てきたら、もう朝の支度は半分済んでます。',
  },
  {
    time: '夜、お風呂で',
    body: '3→2→1の順（髪→体→顔）だと流し残しがなくて楽。順番を忘れても、特に何も起きません。',
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
          <h1 class="font-display text-2xl font-semibold leading-loose tracking-wide md:text-4xl">
            朝、シャワーで、ポンポンポン。<br />これで終わり。
          </h1>
          <p class="mt-6 max-w-2xl leading-loose text-gold/70">
            使い方は、プッシュの回数だけ。1、2、3。それ以上覚えることは、たぶんありません。
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
            <NuxtLink to="/products/" class="btn-holo">とりあえず、見てみる</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
