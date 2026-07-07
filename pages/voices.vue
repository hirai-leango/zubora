<script setup lang="ts">
import { brand } from '~/brand.config'

interface Voice {
  id: number
  name: string
  avatar: string
  title: string
  body: string
}

// お客さまの声（イメージ）
const voices: Voice[] = [
  {
    id: 1,
    name: '30代・会社員',
    avatar: '☕',
    title: '日曜の朝がちょっといい',
    body: 'シャワーを浴びて、コーヒーを淹れて、それだけの朝なんですけど。なんか、いい感じなんですよね。何もしてないのに。',
  },
  {
    id: 2,
    name: '30代・在宅ワーク',
    avatar: '🫧',
    title: 'ボトルが減って棚がすっきり',
    body: '4本あったボトルが1本になりました。棚が空くと、風呂場が広く見える。掃除も、まあ、楽です。',
  },
  {
    id: 3,
    name: '40代・子育て中',
    avatar: '👨‍👧',
    title: '子供と同じ泡で洗ってる',
    body: '子供を洗って、そのまま自分も同じ泡で。押しつけたわけじゃなくて、なんか自然にそうなってました。',
  },
  {
    id: 4,
    name: '20代・ひとり暮らし',
    avatar: '🧳',
    title: '旅支度が一瞬で終わる',
    body: 'ポーチにこれ1本入れて、おしまい。小分けボトルを並べる作業、あれ何だったんだろうと思ってます。',
  },
  {
    id: 5,
    name: '50代・夫婦ふたり',
    avatar: '🧺',
    title: '夫婦で同じ、が楽',
    body: '「どれが誰の」がなくなりました。詰め替えのストックも1種類だけ。頭が、静かです。',
  },
  {
    id: 6,
    name: '20代・ジム通い',
    avatar: '🏃',
    title: '朝、考えることがひとつ減った',
    body: '朝がとにかく無いので、ポンポンポンで終わるのが助かります。それ以上でも以下でもないんですが、毎朝のことなので。',
  },
]

useSeo({
  title: `お客さまの声 | ${brand.name}`,
  description:
    'zuboraをお使いの方から届いた声をご紹介します。日曜の朝がちょっといい、ボトルが減って棚がすっきり、など。※掲載の声はイメージです。',
  path: '/voices/',
})
</script>

<template>
  <div class="bg-night">
    <!-- ===== Page Header ===== -->
    <section class="px-5 pb-16 pt-20 md:px-8 md:pt-28">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <h1 class="section-title font-display">お客さまの声</h1>
          <p class="mt-6 max-w-2xl leading-loose text-gold/70">
            派手な感想は、あまり届きません。「なんか楽になった」という静かな声が、いちばん多いです。私たちは、それでいいと思っています。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Voice Cards ===== -->
    <section class="bg-night-deep px-5 py-24 md:px-8">
      <div class="mx-auto max-w-5xl">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn v-for="(voice, i) in voices" :key="voice.id" :delay="(i % 3) * 100">
            <div class="glass-card flex h-full flex-col p-7">
              <div class="flex items-center gap-3">
                <span
                  class="flex h-11 w-11 items-center justify-center rounded-full border border-gold/10 bg-night text-xl"
                  aria-hidden="true"
                >
                  {{ voice.avatar }}
                </span>
                <p class="text-sm text-gold/60">{{ voice.name }}</p>
              </div>
              <h3 class="mt-4 text-base font-semibold leading-relaxed tracking-wide">
                {{ voice.title }}
              </h3>
              <p class="mt-3 flex-1 text-sm leading-loose text-gold/70">{{ voice.body }}</p>
            </div>
          </FadeIn>
        </div>

        <p class="mt-12 text-xs text-gold/50">※掲載の声はイメージです。</p>
      </div>
    </section>

    <!-- ===== Quiet CTA ===== -->
    <section class="px-5 py-20 md:px-8">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="font-display text-xl leading-relaxed text-gold/80">
            あなたの日曜の朝も、ちょっとよくなるかもしれません。
          </p>
          <div class="mt-8">
            <NuxtLink to="/products/" class="btn-holo">とりあえず、見てみる</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
