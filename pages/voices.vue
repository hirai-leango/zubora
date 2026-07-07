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
    avatar: '🛁',
    title: '風呂場の棚が、静かになった',
    body: 'ボトルが4本から1本になって、掃除のときに持ち上げるものが減りました。地味だけど、毎週のことなので効きます。',
  },
  {
    id: 2,
    name: '20代・ひとり暮らし',
    avatar: '🧳',
    title: '旅行の荷造りが一瞬で終わる',
    body: '詰め替え用の小さいボトルを並べる作業がなくなりました。これ1本をポーチに入れて、おしまい。',
  },
  {
    id: 3,
    name: '40代・子育て中',
    avatar: '👨‍👧',
    title: '子どもと同じ、が楽',
    body: '子どもを洗って、そのまま自分も同じ泡で洗えるのがいい。お風呂の段取りがひとつ減りました。',
  },
  {
    id: 4,
    name: '30代・在宅ワーク',
    avatar: '🌿',
    title: '「ちゃんとしてる感」が出る',
    body: '何もがんばっていないのに、肌の調子を褒められました。ズボラのままでいいなら、それが一番だと思います。',
  },
  {
    id: 5,
    name: '20代・ジム通い',
    avatar: '🏃',
    title: 'ジムバッグが軽い',
    body: 'シャワー用の小分けボトルを全部やめて、これだけ持っていくようになりました。忘れ物も減った気がします。',
  },
  {
    id: 6,
    name: '50代・夫婦ふたり',
    avatar: '🫧',
    title: '詰め替えの在庫管理から解放',
    body: '「どれが切れてたっけ」と売り場で悩むことがなくなりました。ストックは1種類だけ。頭が楽です。',
  },
]

useSeo({
  title: `お客さまの声 | ${brand.name}`,
  description:
    'zuboraをお使いの方から届いた声をご紹介します。ボトルが減った、旅支度が楽になった、など。※掲載の声はイメージです。',
  path: '/voices/',
})
</script>

<template>
  <div class="bg-night">
    <!-- ===== Page Header ===== -->
    <section class="px-5 pb-16 pt-20 md:px-8 md:pt-28">
      <div class="mx-auto max-w-5xl">
        <FadeIn>
          <p class="text-sm tracking-wide text-kira-pink">voices</p>
          <h1 class="section-title mt-4 font-display">お客さまの声</h1>
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
            あなたのお風呂も、少し軽くなるかもしれません。
          </p>
          <div class="mt-8">
            <NuxtLink to="/products/" class="btn-holo">商品を見る</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
