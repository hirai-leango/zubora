<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `商品 | ${brand.name}`,
  description:
    'zubora foam（泡クレンザー）。全身これ1本。1プッシュで顔、2で体、3で髪。アミノ酸系洗浄成分、弱酸性pH5.0-6.0、500ml、¥2,800。',
  path: '/products/',
})

const specs = [
  { label: '品名', value: 'zubora foam（オールインワン泡状洗浄料）' },
  { label: '使えるところ', value: '全身これ1本（顔・体・髪）' },
  { label: '使い方', value: '1プッシュで顔。2で体。3で髪。' },
  { label: '洗浄成分', value: 'アミノ酸系' },
  { label: 'pH', value: '弱酸性（pH5.0-6.0）' },
  { label: '容量', value: '500ml' },
  { label: '価格', value: '¥2,800（税込）' },
]

const notFor = [
  'がっつりスタイリングする人。ワックスやスプレーは、1回では落ちにくいことがあります。',
  '脂性の頭皮の人。洗浄力の強いシャンプーのほうが、たぶん合っています。',
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Scene opening ===== -->
    <section class="px-5 pb-20 pt-14 md:px-10 md:pb-28 md:pt-24">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <span class="eyebrow">product — 01</span>
          <p class="mt-10 max-w-2xl font-display text-xl leading-[2.1] tracking-[0.04em] text-gold/80 md:text-2xl md:leading-[2.1]">
            朝、シャワーを浴びて、出てくる。<br />
            使ったボトルは、1本だけ。<br />
            それだけの話なんですが、なんか、いいんです。
          </p>
          <h1 class="mt-16 font-display text-4xl font-normal lowercase tracking-[0.08em] md:text-6xl">zubora foam</h1>
          <p class="mt-5 text-[11px] tracking-[0.2em] text-gold/50">泡クレンザー / 発売中</p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Product + Spec ===== -->
    <section class="px-5 pb-28 md:px-10 md:pb-40">
      <div class="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-12 md:gap-10">
        <FadeIn class="md:col-span-5">
          <!-- 商品画像に差し替える（現在はCSSプレースホルダー） -->
          <figure>
            <div class="film-frame -rotate-[0.4deg] px-8 py-14">
              <div class="mx-auto flex h-72 w-32 items-end justify-center">
                <div class="relative h-full w-24">
                  <div class="absolute bottom-0 h-60 w-full rounded-b-2xl rounded-t-lg border border-gold/15 bg-paper shadow-soft" />
                  <div class="absolute left-1/2 top-5 h-14 w-7 -translate-x-1/2 rounded-t-md border border-gold/15 bg-night-deep" />
                  <div class="absolute left-1/2 top-0 h-6 w-10 -translate-x-1/2 rounded-sm bg-gold" />
                  <div class="absolute left-1/2 top-32 w-20 -translate-x-1/2 py-2 text-center">
                    <span class="block font-display text-sm font-normal lowercase tracking-[0.15em] text-gold">zubora</span>
                    <span class="mt-1 block text-[10px] tracking-[0.3em] text-gold/50">foam</span>
                  </div>
                </div>
              </div>
            </div>
            <figcaption class="caption">※画像は準備中です。ボトルは、もう少しちゃんとしています。</figcaption>
          </figure>
        </FadeIn>
        <FadeIn :delay="120" class="md:col-span-6 md:col-start-7 md:mt-10">
          <span class="eyebrow">spec</span>
          <h2 class="mt-4 text-lg font-normal tracking-[0.1em]">スペック</h2>
          <dl class="mt-8 divide-y divide-gold/10 border-y border-gold/20">
            <div v-for="spec in specs" :key="spec.label" class="flex flex-col gap-1 py-4 text-sm sm:flex-row sm:justify-between sm:gap-6">
              <dt class="shrink-0 text-xs tracking-[0.12em] text-gold/50 sm:w-32 sm:pt-0.5">{{ spec.label }}</dt>
              <dd class="leading-relaxed text-gold sm:text-right">{{ spec.value }}</dd>
            </div>
          </dl>
          <p class="mt-8 text-sm leading-loose text-gold/60">
            覚えるのは、プッシュの数だけ。1で顔、2で体、3で髪。それ以上は、まあ、ないです。アミノ酸系の洗浄成分で、弱酸性。手は抜いていい。品質は、抜いてない。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Not recommended ===== -->
    <section class="bg-night-deep px-5 py-28 md:px-10 md:py-36">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <div class="max-w-2xl border-t border-gold/25 pt-7 md:ml-[26%]">
            <h2 class="text-base font-normal tracking-[0.12em]">こんな人には向かない</h2>
            <ul class="mt-7 space-y-4 text-sm leading-loose text-gold/70">
              <li v-for="item in notFor" :key="item" class="flex gap-3">
                <span class="mt-0.5 text-kira-cyan" aria-hidden="true">△</span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <p class="mt-7 text-xs leading-loose text-gold/50">
              正直に言うと、合わないと思う。無理はしないでください。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Coming soon: sweat ===== -->
    <section class="px-5 py-28 md:px-10 md:py-44">
      <div class="mx-auto max-w-6xl md:flex md:justify-end">
        <FadeIn class="md:w-1/2">
          <span class="eyebrow">product — 02</span>
          <p class="mt-6 text-[11px] tracking-[0.2em] text-gold/50">スウェット / 近日</p>
          <h2 class="mt-3 font-display text-3xl font-normal lowercase tracking-[0.08em] md:text-4xl">zubora sweat</h2>
          <p class="mt-8 max-w-xl leading-loose text-gold/70">
            着崩してるけど、似合ってる。男女、どっちでも。ちゃんといい生地。でも、ロゴは小さく。<br />
            近日、出ます。たぶん。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Quiet CTA ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-10 md:py-32">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <p class="font-display text-xl leading-relaxed text-gold/80">
            気になることがあれば、気軽にどうぞ。
          </p>
          <div class="mt-10 flex flex-wrap gap-10">
            <NuxtLink to="/scenes/" class="btn-holo">使い方を見る</NuxtLink>
            <NuxtLink to="/contact/" class="btn-outline-holo">お問い合わせ</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
