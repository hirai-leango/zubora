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
    <section class="px-5 pb-20 pt-14 md:px-10 md:pb-32 md:pt-24">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <span class="eyebrow">about — where it began</span>
          <h1 class="mt-10 font-display text-2xl font-normal leading-[2] tracking-[0.05em] md:text-[2.6rem] md:leading-[1.9]">
            子供は泡シャンプー1本なのに、<br />自分は3本使ってた。
          </h1>
          <p class="mt-12 font-display text-lg leading-[2.1] text-gold/70 md:ml-[8%] md:text-xl">
            なんか変だな、と思った。<br />
            それがzuboraのはじまり。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Origin Story ===== -->
    <section class="px-5 pb-28 md:px-10 md:pb-44">
      <div class="mx-auto max-w-6xl">
        <FadeIn :delay="100">
          <div class="max-w-xl space-y-7 leading-[2.1] text-gold/80 md:ml-[26%]">
            <p>
              ある晩、子供をお風呂に入れていて、気づきました。この子、泡シャンプー1本で頭からつま先まで洗ってる。それで機嫌よく寝て、翌朝もすべすべしてる。
            </p>
            <p>
              一方の自分は、シャンプーとコンディショナーと洗顔料とボディソープ。詰め替えの在庫を切らし、棚でボトルを倒し、たまに妻のシャンプーを勝手に使って怒られていました。
            </p>
            <p>
              なんか変だな、と。<strong class="font-medium">本当に、分ける必要あるんだっけ。</strong>
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
    <section class="bg-night-deep px-5 py-28 md:px-10 md:py-44">
      <div class="mx-auto max-w-6xl">
        <FadeIn>
          <span class="eyebrow">beliefs</span>
          <p class="mt-6 text-sm tracking-[0.1em] text-kira-purple">考えていること</p>
          <h2 class="section-title mt-5 font-display">たいしたことは、考えていません。でも。</h2>
        </FadeIn>
        <div class="mt-16 grid gap-14 md:mt-24 md:grid-cols-3 md:gap-10">
          <FadeIn
            v-for="(belief, i) in beliefs"
            :key="belief.title"
            :delay="i * 100"
            :class="{ 'md:mt-12': i === 1, 'md:mt-24': i === 2 }"
          >
            <div class="border-t border-gold/25 pt-7">
              <span class="index-num">0{{ i + 1 }}</span>
              <h3 class="mt-5 font-display text-lg font-normal leading-relaxed tracking-[0.05em]">{{ belief.title }}</h3>
              <p class="mt-5 text-sm leading-loose text-gold/70">{{ belief.body }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Closing ===== -->
    <section class="px-5 py-28 md:px-10 md:py-44">
      <div class="mx-auto max-w-6xl md:flex md:justify-end">
        <FadeIn class="md:w-3/5">
          <p class="max-w-2xl font-display text-xl leading-[2] tracking-[0.04em] text-gold/80 md:text-2xl">
            何もしてないのに、いい感じ。<br />
            そういう時間を、売っています。
          </p>
          <div class="mt-12">
            <NuxtLink to="/products/" class="btn-holo">とりあえず、見てみる</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
