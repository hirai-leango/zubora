<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `zuboraについて | ${brand.name}`,
  description:
    '子供は泡シャンプー1本なのに、自分は3本使ってた。なんか変だな、と思った。それがzuboraのはじまり。',
  path: '/about/',
})

const beliefs = [
  {
    title: '引き算は、けっこう頭を使う',
    body: '増やすのは簡単。減らすには、何がいらないかを考えないといけない。zuboraの「ズボラ」は、怠慢じゃなくて、考えた結果の引き算。のつもりです。たぶん。',
  },
  {
    title: '決意は、3日で切れる',
    body: '「毎日ちゃんとやるぞ」は、だいたい続きません。決意がいらないくらい簡単なら、続く。私たちは自分の意志の力を、まあ、信用していません。',
  },
  {
    title: '正直に売る',
    body: '向かない人には向かない、と書きます。曖昧にして売っても、長い付き合いにはならないので。',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="px-5 pb-16 pt-20 md:px-8 md:pt-28">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <h1 class="font-display text-2xl font-semibold leading-loose tracking-wide md:text-4xl md:leading-relaxed">
            子供は泡シャンプー1本なのに、<br />自分は3本使ってた。
          </h1>
          <p class="mt-8 font-display text-lg leading-loose text-gold/70 md:text-xl">
            なんか変だな、と思った。<br />
            それがzuboraのはじまり。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Origin Story ===== -->
    <section class="px-5 pb-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn :delay="100">
          <div class="max-w-2xl space-y-6 leading-loose text-gold/80">
            <p>
              ある晩、子供をお風呂に入れていて、気づきました。この子、泡シャンプー1本で頭からつま先まで洗ってる。それで機嫌よく寝て、翌朝もすべすべしてる。
            </p>
            <p>
              一方の自分は、シャンプーとコンディショナーと洗顔料とボディソープ。詰め替えの在庫を切らし、棚でボトルを倒し、たまに妻のシャンプーを勝手に使って怒られていました。
            </p>
            <p>
              なんか変だな、と。<strong class="font-semibold">本当に、分ける必要あるんだっけ。</strong>
            </p>
            <p>
              調べてみたら、「大人だから3本必要」という決まりは、どこにもありませんでした。あるのは習慣と、売り場の棚割りだけ。じゃあ、大人がちゃんと使える品質で1本にまとめたら、毎日が少し軽くなるんじゃないか。
            </p>
            <p>
              そうして生まれたのが、zuboraです。ブランド名に自分の性格をそのまま付けるのはどうかと思いましたが、まあ、事実なので。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Beliefs ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-purple">考えていること</p>
          <h2 class="section-title mt-4 font-display">たいしたことは、考えていません。でも。</h2>
        </FadeIn>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <FadeIn v-for="(belief, i) in beliefs" :key="belief.title" :delay="i * 100">
            <div class="glass-card h-full p-8">
              <h3 class="text-lg font-semibold leading-snug tracking-wide">{{ belief.title }}</h3>
              <p class="mt-3 text-sm leading-loose text-gold/70">{{ belief.body }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Closing ===== -->
    <section class="px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="max-w-2xl font-display text-xl leading-relaxed text-gold/80 md:text-2xl">
            何もしてないのに、いい感じ。<br />
            そういう時間を、売っています。
          </p>
          <div class="mt-10">
            <NuxtLink to="/products/" class="btn-holo">とりあえず、見てみる</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
