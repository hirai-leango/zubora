<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `商品 | ${brand.name}`,
  description:
    'Zubora Foam（ズボラフォーム）は、顔・体・頭皮を1本で洗えるオールインワン泡状洗浄料。アミノ酸系洗浄成分、弱酸性pH5.0-6.0、500ml、¥2,800。',
  path: '/products/',
})

const specs = [
  { label: '品名', value: 'Zubora Foam（オールインワン泡状洗浄料）' },
  { label: '使えるところ', value: '顔・体・頭皮（1本で洗えます）' },
  { label: '使い方', value: '1プッシュ＝顔／2プッシュ＝体／3プッシュ＝髪' },
  { label: '洗浄成分', value: 'アミノ酸系' },
  { label: 'pH', value: '弱酸性（pH5.0-6.0）' },
  { label: '容量', value: '500ml' },
  { label: '価格', value: '¥2,800（税込）' },
]

const details = [
  {
    title: '泡で出てくる、を大事にしました',
    body: '泡立てる工程は、たいてい省略されます。私たちも省略したい側の人間なので、最初から泡で出るポンプにしました。出てきた泡をそのまま顔へ、体へ、頭皮へ。',
  },
  {
    title: '洗いすぎない、を基準にしました',
    body: '1本で全身を洗うなら、いちばん繊細な場所に合わせるべきだと考えました。アミノ酸系の洗浄成分と弱酸性pH5.0-6.0は、顔基準の設計です。',
  },
  {
    title: '香りは、ほのかに',
    body: 'バスルームに主張しすぎない、静かな香りにしています。「なんかいい匂いする」くらいの距離感が、たぶんちょうどいい。',
  },
]

const notFor = [
  'スタイリング剤（ワックス・スプレーなど）を毎日しっかり使う方。1回の洗浄では落ちにくいことがあります。',
  '頭皮の皮脂が多めで、洗浄力の強いシャンプーのほうが調子がいい方。',
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Page Header ===== -->
    <section class="px-5 pb-16 pt-20 md:px-8 md:pt-28">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">product</p>
          <h1 class="section-title mt-4 font-display">Zubora Foam</h1>
          <p class="mt-6 max-w-2xl leading-loose text-gold/70">
            シャンプーと、洗顔料と、ボディソープ。3本あった理由を、私たちはうまく思い出せませんでした。だから、1本にしました。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Product + Spec ===== -->
    <section class="px-5 pb-24 md:px-8">
      <div class="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
        <FadeIn>
          <div class="glass-card p-10">
            <!-- 商品画像に差し替える（現在はCSSプレースホルダー） -->
            <div class="mx-auto flex h-72 w-32 items-end justify-center">
              <div class="relative h-full w-24">
                <div class="absolute bottom-0 h-60 w-full rounded-b-2xl rounded-t-lg border border-gold/15 bg-paper shadow-soft" />
                <div class="absolute left-1/2 top-5 h-14 w-7 -translate-x-1/2 rounded-t-md border border-gold/15 bg-night-deep" />
                <div class="absolute left-1/2 top-0 h-6 w-10 -translate-x-1/2 rounded-sm bg-gold" />
                <div class="absolute left-1/2 top-32 w-20 -translate-x-1/2 py-2 text-center">
                  <span class="block font-display text-sm font-semibold lowercase tracking-wide text-gold">zubora</span>
                  <span class="mt-1 block text-[10px] tracking-widest text-gold/50">foam</span>
                </div>
              </div>
            </div>
            <p class="mt-8 text-center text-xs text-gold/40">※画像は準備中です。ボトルは、もう少しちゃんとしています。</p>
          </div>
        </FadeIn>
        <FadeIn :delay="120">
          <div>
            <h2 class="text-xl font-semibold tracking-wide">スペック</h2>
            <dl class="mt-6 divide-y divide-gold/10 border-y border-gold/10">
              <div v-for="spec in specs" :key="spec.label" class="flex flex-col gap-1 py-3.5 text-sm sm:flex-row sm:justify-between sm:gap-6">
                <dt class="shrink-0 font-medium text-gold/60 sm:w-32">{{ spec.label }}</dt>
                <dd class="leading-relaxed text-gold sm:text-right">{{ spec.value }}</dd>
              </div>
            </dl>
            <p class="mt-6 text-sm leading-loose text-gold/60">
              顔・体・頭皮を洗えます。プッシュの回数だけ覚えれば、あとはいつも通りお風呂に入るだけです。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Details ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-purple">details</p>
          <h2 class="section-title mt-4 font-display">地味なこだわり、3つ。</h2>
        </FadeIn>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn v-for="(detail, i) in details" :key="detail.title" :delay="i * 100">
            <div class="glass-card h-full p-8">
              <h3 class="text-lg font-semibold leading-snug tracking-wide">{{ detail.title }}</h3>
              <p class="mt-3 text-sm leading-loose text-gold/70">{{ detail.body }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Not recommended ===== -->
    <section class="px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <h2 class="text-xl font-semibold tracking-wide">こんな方には、たぶん向きません</h2>
          <ul class="mt-6 max-w-2xl space-y-3 text-sm leading-loose text-gold/70">
            <li v-for="item in notFor" :key="item" class="flex gap-3">
              <span class="mt-0.5 text-kira-cyan" aria-hidden="true">△</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <p class="mt-6 max-w-2xl text-sm leading-loose text-gold/50">
            合わないかも、と思ったら無理をしないでください。1本にまとめるのは手段であって、目的ではないので。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Quiet CTA ===== -->
    <section class="bg-night-deep px-5 py-20 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="font-display text-xl leading-relaxed text-gold/80">
            気になることがあれば、気軽にどうぞ。
          </p>
          <div class="mt-8 flex flex-wrap gap-5">
            <NuxtLink to="/scenes/" class="btn-holo">使い方を見る</NuxtLink>
            <NuxtLink to="/contact/" class="btn-outline-holo">お問い合わせ</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
