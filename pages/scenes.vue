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
    <section class="px-5 pb-20 pt-14 md:px-10 md:pb-32 md:pt-24">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <span class="eyebrow">scene — how to use</span>
          <h1 class="mt-10 font-display text-2xl font-normal leading-[2] tracking-[0.05em] md:text-[2.6rem] md:leading-[1.9]">
            朝、シャワーで、ポンポンポン。<br />これで終わり。
          </h1>
          <p class="mt-10 max-w-xl leading-loose text-gold/70 md:ml-[8%]">
            使い方は、プッシュの回数だけ。1、2、3。それ以上覚えることは、たぶんありません。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Push Rule ===== -->
    <section class="bg-night-deep px-5 py-28 md:px-10 md:py-44">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <span class="eyebrow">push rule</span>
          <h2 class="section-title mt-6 font-display">1・2・3の泡。</h2>
        </FadeIn>
        <div class="mt-16 grid gap-16 md:mt-24 md:grid-cols-3 md:gap-10">
          <FadeIn
            v-for="(rule, i) in pushRule"
            :key="rule.target"
            :delay="i * 100"
            :class="{ 'md:mt-14': i === 1, 'md:mt-28': i === 2 }"
          >
            <div class="border-t border-gold/25 pt-8">
              <p class="font-display text-7xl font-normal leading-none text-kira-pink/90 md:text-8xl">{{ rule.count }}</p>
              <p class="eyebrow mt-5">push</p>
              <h3 class="mt-6 font-display text-xl font-normal tracking-[0.1em]">{{ rule.target }}</h3>
              <p class="mt-4 text-sm leading-loose text-gold/70">{{ rule.body }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Daily Flow ===== -->
    <section class="px-5 py-28 md:px-10 md:py-44">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <span class="eyebrow">daily</span>
          <h2 class="section-title mt-6 font-display">毎日は、こんな感じ。</h2>
        </FadeIn>
        <div class="mt-16 max-w-2xl md:ml-[26%] md:mt-20">
          <FadeIn v-for="(flow, i) in dailyFlow" :key="flow.time" :delay="i * 100">
            <div class="grid gap-3 border-t border-gold/15 py-9 md:grid-cols-[auto_1fr] md:gap-10">
              <span class="index-num pt-1">0{{ i + 1 }}</span>
              <div>
                <h3 class="font-display text-lg font-normal tracking-[0.06em]">{{ flow.time }}</h3>
                <p class="mt-3 text-sm leading-loose text-gold/70">{{ flow.body }}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Tips ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-10 md:py-32">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <div class="max-w-xl border-t border-gold/25 pt-7">
            <span class="eyebrow">notes</span>
            <h2 class="mt-5 text-base font-normal tracking-[0.12em]">ちいさな補足</h2>
            <ul class="mt-7 space-y-4 text-xs leading-loose text-gold/60">
              <li v-for="tip in tips" :key="tip" class="flex gap-3">
                <span class="mt-0.5 text-kira-pink" aria-hidden="true">・</span>
                <span>{{ tip }}</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Quiet CTA ===== -->
    <section class="px-5 py-24 md:px-10 md:py-36">
      <div class="mx-auto max-w-6xl md:flex md:justify-end">
        <FadeIn class="md:w-3/5">
          <p class="font-display text-xl leading-relaxed text-gold/80">
            覚えました？ たぶん、もう大丈夫です。
          </p>
          <div class="mt-10">
            <NuxtLink to="/products/" class="btn-holo">とりあえず、見てみる</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
