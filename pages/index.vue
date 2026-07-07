<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `${brand.name} | ${brand.tagline}`,
  description: brand.description,
  path: '/',
})

// プッシュルール：1プッシュ＝顔、2プッシュ＝体、3プッシュ＝髪
const pushRule = [
  {
    count: '1',
    target: '顔',
    note: 'ワンプッシュを軽く泡立てて、顔へ。朝の寝ぼけた手でも、たぶん間違えない量です。',
  },
  {
    count: '2',
    target: '体',
    note: 'ツープッシュで全身へ。泡はよく伸びるので、背中の届く範囲まででだいたい足ります。',
  },
  {
    count: '3',
    target: '髪',
    note: 'スリープッシュを頭皮になじませて。髪の長い日は、まあ、もうひと押ししてもいいと思います。',
  },
]

// 商品のポイント（控えめに、事実だけ）
const productPoints = [
  {
    title: 'アミノ酸系の洗浄成分',
    body: '洗浄のベースはアミノ酸系。強く脱脂しすぎない設計なので、顔にも体にも頭皮にも使えます。',
  },
  {
    title: '弱酸性 pH5.0-6.0',
    body: '肌に近い弱酸性に整えています。派手さはないけれど、毎日のことなので、ここは真面目にやりました。',
  },
  {
    title: 'ボトルは1本だけ',
    body: 'シャンプー、洗顔料、ボディソープの置き場所が、ひとつにまとまります。バスルームが、なんか広い。',
  },
]

// 向いている人・向かない人（正直に）
const goodFor = [
  '風呂場のボトルを減らしたい人',
  'スキンケアを「続く仕組み」にしたい人',
  '出張やジムに1本だけ持っていきたい人',
  '家族のボトルが誰のか分からなくなっている人',
]

const notFor = [
  'スタイリング剤を毎日しっかり使う人（1回では落ちにくいことがあります）',
  '頭皮の皮脂が多めで、洗浄力の強いシャンプーが合っている人',
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="px-5 md:px-8">
      <div class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center py-20">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">zubora foam ― 全身これ1本の泡</p>
          <h1 class="mt-6 max-w-3xl font-display text-3xl font-semibold leading-relaxed tracking-wide md:text-5xl md:leading-snug">
            誰かが決めた。<br />
            シャンプーのあとに、<br class="md:hidden" />コンディショナーを、と。
          </h1>
          <p class="mt-8 max-w-2xl font-display text-xl leading-relaxed text-gold/80 md:text-2xl">
            でも、本当に分ける必要ある？
          </p>
          <p class="mt-8 max-w-xl leading-loose text-gold/70">
            zuboraは、顔と体と頭皮をひとつの泡で洗うためのブランドです。<br class="hidden md:block" />
            がんばらない人が、なんか、ちゃんとしてる。そういう状態をつくります。
          </p>
          <div class="mt-12 flex flex-wrap items-center gap-5">
            <NuxtLink to="/products/" class="btn-holo">詳しく見る</NuxtLink>
            <NuxtLink to="/scenes/" class="text-sm text-gold/60 underline decoration-gold/30 underline-offset-4 transition-colors hover:text-gold">
              使い方はこちら
            </NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Push Rule ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">push rule</p>
          <h2 class="section-title mt-4 font-display">覚えることは、3つだけ。</h2>
          <p class="mt-6 max-w-2xl leading-loose text-gold/70">
            プッシュの回数が、そのまま使い方です。説明書を読むのが面倒な人のために（つまり、私たちのために）そう設計しました。
          </p>
        </FadeIn>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn v-for="(rule, i) in pushRule" :key="rule.target" :delay="i * 100">
            <div class="glass-card h-full p-8">
              <p class="font-display text-5xl font-semibold text-kira-pink">{{ rule.count }}</p>
              <p class="mt-2 text-sm tracking-widest text-gold/50">push</p>
              <h3 class="mt-4 text-xl font-semibold tracking-wide">{{ rule.target }}</h3>
              <p class="mt-3 text-sm leading-loose text-gold/70">{{ rule.note }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Product Intro ===== -->
    <section class="px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-purple">zubora foam</p>
          <h2 class="section-title mt-4 font-display">1本で、顔・体・頭皮を洗えます。</h2>
          <p class="mt-6 max-w-2xl leading-loose text-gold/70">
            オールインワンの泡状洗浄料です。すごい発明ではないかもしれません。ただ、毎日のことを少し楽にするための工夫は、わりと真剣に詰めました。
          </p>
        </FadeIn>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn v-for="(point, i) in productPoints" :key="point.title" :delay="i * 100">
            <div class="glass-card h-full p-8">
              <h3 class="text-lg font-semibold tracking-wide">{{ point.title }}</h3>
              <p class="mt-3 text-sm leading-loose text-gold/70">{{ point.body }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== For whom / Not for whom ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">for you?</p>
          <h2 class="section-title mt-4 font-display">向いている人と、向かない人。</h2>
          <p class="mt-6 max-w-2xl leading-loose text-gold/70">
            正直に書きます。全員に合う、とは言いません。
          </p>
        </FadeIn>
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div class="glass-card h-full p-8">
              <h3 class="text-lg font-semibold tracking-wide">こんな人に</h3>
              <ul class="mt-4 space-y-3 text-sm leading-relaxed text-gold/70">
                <li v-for="item in goodFor" :key="item" class="flex gap-3">
                  <span class="mt-0.5 text-kira-pink" aria-hidden="true">○</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn :delay="100">
            <div class="glass-card h-full p-8">
              <h3 class="text-lg font-semibold tracking-wide">こんな人には、たぶん向かない</h3>
              <ul class="mt-4 space-y-3 text-sm leading-relaxed text-gold/70">
                <li v-for="item in notFor" :key="item" class="flex gap-3">
                  <span class="mt-0.5 text-kira-cyan" aria-hidden="true">△</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
              <p class="mt-5 text-xs leading-relaxed text-gold/50">
                無理にすすめて合わなかったら、お互いに悲しいので。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Quiet CTA ===== -->
    <section class="px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="max-w-2xl font-display text-xl leading-relaxed text-gold/80 md:text-2xl">
            ズボラで、普通よりいい状態。<br />まあ、一度見てみてください。
          </p>
          <div class="mt-10">
            <NuxtLink to="/products/" class="btn-holo">詳しく見る</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
