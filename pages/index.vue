<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `${brand.name} | 何もしてないのに、いい感じ。`,
  description: brand.description,
  path: '/',
})

// ヒーロー：日曜の朝のシーン（1行ずつ、静かに）
const heroLines = [
  '日曜の朝。',
  '昨日買ったスウェットを着てる。',
  'シャワーは、ボトル1本で済んだ。',
  '肌、なんかいい感じ。',
  'コーヒーを淡れる。子供がそこにいる。',
  '別に、何も頑張ってない。',
  'でも、いい。',
]

// 問いかけ（哲学）
const questionLines = [
  '誰かが決めた。',
  'シャンプーのあとに、コンディショナー。',
  '洗顔料とボディソープは、別で買え、と。',
  'その「誰か」は、たぶん、あなたのためじゃなかった。',
]

// シーンの中の道具たち
const foamLines = [
  '全身これ1本。',
  '1プッシュで顔。2で体。3で髪。',
  'それ以上は、まあ、ない。',
  'アミノ酸系の洗浄成分で、弱酸性。',
  '手は抜いていい。品質は、抜いてない。',
]

const sweatLines = [
  '着崩してるけど、似合ってる。',
  '男女、どっちでも。',
  'ちゃんといい生地。でも、ロゴは小さく。',
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== 1. Hero — the scene ===== -->
    <section class="px-5 md:px-8">
      <div class="mx-auto grid min-h-[calc(100vh-4rem)] max-w-5xl items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <FadeIn>
          <h1 class="font-display text-2xl font-semibold leading-loose tracking-wide md:text-4xl md:leading-[1.9]">
            <span v-for="line in heroLines" :key="line" class="block">{{ line }}</span>
          </h1>
          <p class="mt-10 text-sm tracking-wide text-gold/60 md:text-base">
            <span class="font-display lowercase">zubora</span> — 何もしてないのに、いい感じ。
          </p>
        </FadeIn>
        <FadeIn :delay="150">
          <!-- 実写に差し替えるまでのプレースホルダー -->
          <figure>
            <div
              class="aspect-[4/5] w-full rounded-soft border border-gold/10 bg-gradient-to-b from-paper via-night-soft to-night-deep shadow-soft"
              role="img"
              aria-label="日曜の朝のシーン（実写は後で差し替え）"
            />
            <figcaption class="mt-3 text-xs text-gold/40">日曜の朝のシーン（実写は後で差し替え）</figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>

    <!-- ===== 2. The question ===== -->
    <section class="bg-night-deep px-5 py-28 md:px-8 md:py-36">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="max-w-2xl font-display text-lg leading-loose text-gold/70 md:text-xl md:leading-[2.1]">
            <span v-for="line in questionLines" :key="line" class="block">{{ line }}</span>
          </p>
          <p class="mt-14 font-display text-3xl font-semibold leading-snug tracking-wide md:text-5xl">
            本当に、分ける必要ある？
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== 3. Products as props ===== -->
    <section class="px-5 py-24 md:px-8 md:py-32">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">シーンの中にあるもの</p>
        </FadeIn>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div class="glass-card flex h-full flex-col p-9 md:p-10">
              <p class="text-xs tracking-widest text-gold/50">泡クレンザー / 発売中</p>
              <h2 class="mt-3 font-display text-2xl font-semibold lowercase tracking-wide">zubora foam</h2>
              <p class="mt-6 flex-1 leading-loose text-gold/80">
                <span v-for="line in foamLines" :key="line" class="block">{{ line }}</span>
              </p>
              <div class="mt-8">
                <NuxtLink to="/products/" class="btn-holo">詳しく見る</NuxtLink>
              </div>
            </div>
          </FadeIn>
          <FadeIn :delay="120">
            <div class="glass-card flex h-full flex-col p-9 md:p-10">
              <p class="text-xs tracking-widest text-gold/50">スウェット / 近日</p>
              <h2 class="mt-3 font-display text-2xl font-semibold lowercase tracking-wide">zubora sweat</h2>
              <p class="mt-6 flex-1 leading-loose text-gold/80">
                <span v-for="line in sweatLines" :key="line" class="block">{{ line }}</span>
              </p>
              <div class="mt-8">
                <span class="inline-block cursor-default rounded-full border border-gold/20 bg-night-soft px-9 py-3.5 text-base font-medium tracking-wide text-gold/50" aria-disabled="true">
                  近日
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 4. Family / unisex ===== -->
    <section class="bg-night-deep px-5 py-28 md:px-8 md:py-32">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="max-w-2xl font-display text-xl leading-loose tracking-wide md:text-2xl md:leading-[2]">
            父親と母親が、同じスウェット。<br />
            子供と、同じ泡。<br />
            押しつけじゃなくて、なんか自然に、そうなってる。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== 5. For whom / not for whom ===== -->
    <section class="px-5 py-24 md:px-8 md:py-32">
      <div class="mx-auto max-w-5xl">
        <div class="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div class="glass-card h-full p-8 md:p-9">
              <h2 class="text-lg font-semibold tracking-wide">こんな人に</h2>
              <ul class="mt-5 space-y-3 text-sm leading-loose text-gold/70">
                <li class="flex gap-3">
                  <span class="mt-0.5 text-kira-pink" aria-hidden="true">○</span>
                  <span>朝がとにかく無い人。</span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-0.5 text-kira-pink" aria-hidden="true">○</span>
                  <span>ボトルを増やしたくない人。</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn :delay="100">
            <div class="glass-card h-full p-8 md:p-9">
              <h2 class="text-lg font-semibold tracking-wide">こんな人には、たぶん向かない</h2>
              <ul class="mt-5 space-y-3 text-sm leading-loose text-gold/70">
                <li class="flex gap-3">
                  <span class="mt-0.5 text-kira-cyan" aria-hidden="true">△</span>
                  <span>がっつりスタイリングする人。</span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-0.5 text-kira-cyan" aria-hidden="true">△</span>
                  <span>脂性の頭皮の人。</span>
                </li>
              </ul>
              <p class="mt-6 text-xs leading-loose text-gold/50">
                正直に言うと、合わないと思う。無理はしないでください。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 6. Closing CTA ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8 md:py-28">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <NuxtLink to="/products/" class="btn-holo">とりあえず、見てみる</NuxtLink>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
