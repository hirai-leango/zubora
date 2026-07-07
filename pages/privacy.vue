<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `プライバシーポリシー | ${brand.name}`,
  description: `${brand.name}のプライバシーポリシー。お問い合わせでお預かりする個人情報の取り扱い、利用目的、管理方法についてご案内します。`,
  path: '/privacy/',
})

const contactEmail = brand.contactEmail || 'info@example.com'

// 「当社」「本サイト」の定義部分を実際の事業者名・サイト名に差し替える
const sections = [
  {
    title: '1. 個人情報の取り扱いについて',
    body: [
      `ここに事業者名を入れる（以下「当社」といいます）は、当社が運営するウェブサイト「${brand.name}」（以下「本サイト」といいます）をご利用いただくお客様の個人情報を、個人情報保護法その他の関係法令を遵守し、適切に取り扱います。`,
    ],
  },
  {
    title: '2. 収集する個人情報の種類',
    body: [
      '当社は、本サイトのお問い合わせフォームおよびメールでのお問い合わせを通じて、以下の個人情報を取得します。',
    ],
    list: ['氏名（ご担当者名）', 'メールアドレス', 'お問い合わせ内容に含まれる情報'],
  },
  {
    title: '3. 利用目的',
    body: [
      '当社は、取得した個人情報を、お問い合わせへの回答およびご連絡のためにのみ利用します。上記の目的以外で個人情報を利用することはありません。',
    ],
  },
  {
    title: '4. 第三者への提供',
    body: [
      '当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
    ],
  },
  {
    title: '5. 個人情報の管理と保存期間',
    body: [
      '当社は、個人情報への不正アクセス、紛失、破壊、改ざんおよび漏えいを防止するため、必要かつ適切な安全管理措置を講じます。',
      'お預かりした個人情報は、お問い合わせ対応の完了後、合理的な期間が経過した時点で速やかに削除いたします。',
    ],
  },
  {
    title: '6. お問い合わせ窓口',
    body: [
      '本ポリシーおよび個人情報の取り扱いに関するお問い合わせは、下記の窓口までご連絡ください。',
    ],
    contact: true,
  },
]
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-night py-24">
    <SparkleBackground :count="18" :seed="31" />
    <div class="relative z-10 mx-auto max-w-3xl px-6">
      <FadeIn>
        <div class="text-center">
          <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">PRIVACY POLICY</p>
          <h1 class="text-holo mt-4 section-title">プライバシーポリシー</h1>
          <div class="holo-divider" />
        </div>
      </FadeIn>

      <FadeIn :delay="150">
        <div class="glass-card mt-12 p-8 md:p-12">
          <section v-for="(section, i) in sections" :key="section.title" :class="{ 'mt-10': i > 0 }">
            <h2 class="border-l-4 border-gold pl-4 text-lg font-black tracking-wider text-gold md:text-xl">
              {{ section.title }}
            </h2>
            <p v-for="paragraph in section.body" :key="paragraph" class="mt-4 leading-loose text-white/80">
              {{ paragraph }}
            </p>
            <ul v-if="section.list" class="mt-4 list-disc space-y-2 pl-6 leading-loose text-white/80 marker:text-gold">
              <li v-for="item in section.list" :key="item">{{ item }}</li>
            </ul>
            <div v-if="section.contact" class="mt-6 rounded-2xl border border-gold/30 bg-white/5 p-6 text-center">
              <p class="text-sm tracking-widest text-white/60">お問い合わせ窓口</p>
              <a
                :href="`mailto:${contactEmail}`"
                class="mt-2 inline-block text-lg font-bold text-gold transition-colors hover:text-gold-light md:text-xl"
              >
                {{ contactEmail }}
              </a>
            </div>
          </section>

          <p class="mt-12 text-right text-sm text-white/50">制定日：ここに制定日を入れる<br />ここに事業者名を入れる</p>
        </div>
      </FadeIn>

      <FadeIn :delay="250">
        <div class="mt-12 text-center">
          <NuxtLink to="/contact/" class="btn-outline-holo">お問い合わせはこちら</NuxtLink>
        </div>
      </FadeIn>
    </div>
  </div>
</template>
