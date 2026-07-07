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
    <section class="overflow-hidden px-5 md:px-10">
      <div class="mx-auto max-w-6xl pb-28 pt-14 md:pb-40 md:pt-24">
        <FadeIn>
          <div class="flex items-baseline gap-5">
            <span class="index-num">01</span>
            <span class="eyebrow">scene — sunday morning</span>
          </div>
        </FadeIn>
        <div class="mt-12 grid gap-16 md:mt-16 md:grid-cols-12 md:gap-10">
          <FadeIn class="md:col-span-7">
            <h1 class="font-display text-[1.45rem] font-normal leading-[2.3] tracking-[0.05em] md:text-[2.4rem] md:leading-[2.1]">
              <span v-for="line in heroLines" :key="line" class="block">{{ line }}</span>
            </h1>
            <p class="mt-14 text-xs tracking-[0.15em] text-gold/50">
              <span class="font-display lowercase tracking-[0.2em]">zubora</span> — 何もしてないのに、いい感じ。
            </p>
          </FadeIn>
          <FadeIn :delay="150" class="md:col-span-5 md:mt-28">
            <!-- 実写に差し替えるまでのプレースホルダー（右端へ少しはみ出す） -->
            <figure class="md:-mr-10 lg:-mr-24">
              <div
                class="film-frame aspect-[4/5] w-full rotate-[0.6deg]"
                role="img"
                aria-label="日曜の朝のシーン（実写は後で差し替え）"
              />
              <figcaption class="caption">日曜の朝のシーン（実写は後で差し替え）</figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 2. The question ===== -->
    <section class="bg-night-deep px-5 py-32 md:px-10 md:py-52">
      <div class="mx-auto max-w-6xl">
        <div class="md:ml-[26%]">
          <FadeIn>
            <div class="flex items-baseline gap-5">
              <span class="index-num">02</span>
              <span class="eyebrow">a question</span>
            </div>
            <p class="mt-10 max-w-xl font-display text-lg leading-[2.2] text-gold/70 md:text-xl md:leading-[2.2]">
              <span v-for="line in questionLines" :key="line" class="block">{{ line }}</span>
            </p>
            <div class="mt-14 h-px w-12 bg-gold/30" aria-hidden="true" />
            <p class="mt-12 font-display text-3xl font-normal leading-[1.6] tracking-[0.04em] md:text-5xl md:leading-[1.5]">
              本当に、分ける必要ある？
            </p>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 3. Products as props ===== -->
    <section class="px-5 py-28 md:px-10 md:py-44">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <div class="flex items-baseline gap-5">
            <span class="index-num">03</span>
            <span class="eyebrow">product</span>
          </div>
          <p class="mt-6 text-sm tracking-[0.1em] text-kira-pink">シーンの中にあるもの</p>
        </FadeIn>
        <div class="mt-16 grid gap-24 md:mt-24 md:grid-cols-12 md:gap-10">
          <!-- foam : 大きめの誌面フィーチャー -->
          <FadeIn class="md:col-span-7">
            <figure>
              <div class="film-frame aspect-[4/3] w-full -rotate-[0.4deg]" role="img" aria-label="zubora foam のイメージ（実写は後で差し替え）" />
              <figcaption class="caption">zubora foam</figcaption>
            </figure>
            <p class="eyebrow mt-10">01 — foam</p>
            <p class="mt-4 text-[11px] tracking-[0.2em] text-gold/50">泡クレンザー / 発売中</p>
            <h2 class="mt-3 font-display text-3xl font-normal lowercase tracking-[0.08em] md:text-4xl">zubora foam</h2>
            <p class="mt-8 max-w-md leading-loose text-gold/80">
              <span v-for="line in foamLines" :key="line" class="block">{{ line }}</span>
            </p>
            <div class="mt-10">
              <NuxtLink to="/products/" class="btn-holo">詳しく見る</NuxtLink>
            </div>
          </FadeIn>
          <!-- sweat : 少し下げて、細く -->
          <FadeIn :delay="120" class="md:col-span-4 md:col-start-9 md:mt-40">
            <figure>
              <div class="film-frame aspect-[3/4] w-full rotate-[0.5deg]" role="img" aria-label="zubora sweat のイメージ（実写は後で差し替え）" />
              <figcaption class="caption">zubora sweat</figcaption>
            </figure>
            <p class="eyebrow mt-10">02 — sweat</p>
            <p class="mt-4 text-[11px] tracking-[0.2em] text-gold/50">スウェット / 近日</p>
            <h2 class="mt-3 font-display text-2xl font-normal lowercase tracking-[0.08em] md:text-3xl">zubora sweat</h2>
            <p class="mt-8 leading-loose text-gold/80">
              <span v-for="line in sweatLines" :key="line" class="block">{{ line }}</span>
            </p>
            <div class="mt-10">
              <span class="inline-block pb-1.5 text-sm tracking-[0.18em] text-gold/40" aria-disabled="true">
                近日
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 4. Family / unisex ===== -->
    <section class="bg-night-deep px-5 py-32 md:px-10 md:py-48">
      <div class="mx-auto max-w-6xl md:flex md:justify-end">
        <FadeIn class="md:w-3/5">
          <span class="eyebrow">family</span>
          <p class="mt-10 font-display text-xl leading-[2.1] tracking-[0.04em] md:text-2xl md:leading-[2.1]">
            父親と母親が、同じスウェット。<br />
            子供と、同じ泡。<br />
            押しつけじゃなくて、なんか自然に、そうなってる。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== 5. For whom / not for whom ===== -->
    <section class="px-5 py-24 md:px-10 md:py-36">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-14 md:grid-cols-[5fr_2fr_5fr]">
          <FadeIn>
            <div class="border-t border-gold/25 pt-7">
              <h2 class="text-base font-normal tracking-[0.12em]">こんな人に</h2>
              <ul class="mt-7 space-y-4 text-sm leading-loose text-gold/70">
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
          <div class="hidden md:block" aria-hidden="true" />
          <FadeIn :delay="100" class="md:mt-16">
            <div class="border-t border-gold/25 pt-7">
              <h2 class="text-base font-normal tracking-[0.12em]">こんな人には、たぶん向かない</h2>
              <ul class="mt-7 space-y-4 text-sm leading-loose text-gold/70">
                <li class="flex gap-3">
                  <span class="mt-0.5 text-kira-cyan" aria-hidden="true">△</span>
                  <span>がっつりスタイリングする人。</span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-0.5 text-kira-cyan" aria-hidden="true">△</span>
                  <span>脂性の頭皮の人。</span>
                </li>
              </ul>
              <p class="mt-7 text-xs leading-loose text-gold/50">
                正直に言うと、合わないと思う。無理はしないでください。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 6. Closing CTA ===== -->
    <section class="bg-night-deep px-5 py-28 md:px-10 md:py-40">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <div class="md:ml-[26%]">
            <NuxtLink to="/products/" class="btn-holo">とりあえず、見てみる</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
