<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `zuboraについて | ${brand.name}`,
  description:
    'zuboraが生まれた話。子どもは1本の泡で全身を洗っているのに、大人は3本使っている。その疑問から始まった、知的な引き算のブランドです。',
  path: '/about/',
})

const beliefs = [
  {
    title: '引き算は、知的な作業だと思う',
    body: '増やすのは簡単です。減らすには、何が本当に必要かを考えないといけない。zuboraの「ズボラ」は、怠慢ではなくて、考えた結果の引き算のつもりです。',
  },
  {
    title: 'がんばりに頼る仕組みは、続かない',
    body: '「毎日ちゃんとやるぞ」という決意は、だいたい3日で切れます。決意がいらないくらい簡単なら、続く。私たちは意志の力を信用していません。自分たちのことなので。',
  },
  {
    title: '正直に売る',
    body: '向かない人には向かない、と書きます。1本にまとめたことで得るものと、割り切ったものがあります。そこを曖昧にして売っても、長い付き合いにはならないので。',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="px-5 pb-16 pt-20 md:px-8 md:pt-28">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">about</p>
          <h1 class="section-title mt-4 font-display">
            子どもは1本で洗っていた。<br />大人は、3本使っていた。
          </h1>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Origin Story ===== -->
    <section class="px-5 pb-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn :delay="100">
          <div class="max-w-2xl space-y-6 leading-loose text-gold/80">
            <p>
              ある晩、子どもをお風呂に入れていて、気づいてしまいました。この子は、ベビー用の泡ソープ1本で頭からつま先まで洗っている。そして機嫌よく寝て、翌朝もすべすべしている。
            </p>
            <p>
              一方の私は、シャンプーとコンディショナーと洗顔料とボディソープを使い分けて、詰め替えの在庫を切らし、風呂場の棚でボトルを倒し、たまに妻のシャンプーを勝手に使って怒られていました。
            </p>
            <p>
              あれ、と思いました。<strong class="font-semibold">本当に、分ける必要あるんだっけ。</strong>
            </p>
            <p>
              調べてみると、「大人だから3本必要」という決まりは、どこにもありませんでした。あるのは習慣と、売り場の棚割りだけ。それなら、大人がちゃんと使える品質で1本にまとめたら、毎日が少し軽くなるんじゃないか。
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
          <p class="text-sm tracking-wide text-kira-purple">beliefs</p>
          <h2 class="section-title mt-4 font-display">私たちが考えていること。</h2>
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
            ズボラで、普通よりいい状態。<br />
            それが、zuboraの目指すところです。
          </p>
          <div class="mt-10">
            <NuxtLink to="/products/" class="btn-holo">商品を見る</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
