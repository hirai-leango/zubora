<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `プライバシーポリシー | ${brand.name}`,
  description: `${brand.name}のプライバシーポリシー。お問い合わせ・ご注文でお預かりする個人情報の取り扱い、利用目的、管理方法についてご案内します。`,
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
      '当社は、本サイトでのご注文およびお問い合わせを通じて、以下の個人情報を取得します。',
    ],
    list: ['氏名', 'メールアドレス', '配送先住所・電話番号（ご注文の場合）', 'お問い合わせ内容に含まれる情報'],
  },
  {
    title: '3. 利用目的',
    body: [
      '当社は、取得した個人情報を、ご注文いただいた商品の発送、お問い合わせへの回答およびご連絡のためにのみ利用します。上記の目的以外で個人情報を利用することはありません。',
    ],
  },
  {
    title: '4. 第三者への提供',
    body: [
      '当社は、法令に基づく場合および商品の配送に必要な範囲で配送業者に提供する場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
    ],
  },
  {
    title: '5. 個人情報の管理と保存期間',
    body: [
      '当社は、個人情報への不正アクセス、紛失、破壊、改ざんおよび漏えいを防止するため、必要かつ適切な安全管理措置を講じます。',
      'お預かりした個人情報は、利用目的の達成後、合理的な期間が経過した時点で速やかに削除いたします。',
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
  <div class="min-h-screen bg-night px-5 py-24 md:px-8">
    <div class="mx-auto max-w-3xl">
      <FadeIn>
        <p class="text-sm tracking-wide text-kira-pink">privacy policy</p>
        <h1 class="section-title mt-4 font-display">プライバシーポリシー</h1>
      </FadeIn>

      <FadeIn :delay="120">
        <div class="glass-card mt-12 p-8 md:p-12">
          <section v-for="(section, i) in sections" :key="section.title" :class="{ 'mt-10': i > 0 }">
            <h2 class="border-l-2 border-kira-pink pl-4 text-lg font-semibold tracking-wide md:text-xl">
              {{ section.title }}
            </h2>
            <p v-for="paragraph in section.body" :key="paragraph" class="mt-4 leading-loose text-gold/80">
              {{ paragraph }}
            </p>
            <ul v-if="section.list" class="mt-4 list-disc space-y-2 pl-6 leading-loose text-gold/80 marker:text-kira-pink">
              <li v-for="item in section.list" :key="item">{{ item }}</li>
            </ul>
            <div v-if="section.contact" class="mt-6 rounded-soft border border-gold/15 bg-night-deep p-6">
              <p class="text-sm text-gold/60">お問い合わせ窓口</p>
              <a
                :href="`mailto:${contactEmail}`"
                class="mt-2 inline-block text-lg font-semibold transition-colors hover:text-gold-light md:text-xl"
              >
                {{ contactEmail }}
              </a>
            </div>
          </section>

          <p class="mt-12 text-right text-sm text-gold/50">制定日：ここに制定日を入れる<br />ここに事業者名を入れる</p>
        </div>
      </FadeIn>

      <FadeIn :delay="200">
        <div class="mt-12">
          <NuxtLink to="/contact/" class="btn-outline-holo">お問い合わせはこちら</NuxtLink>
        </div>
      </FadeIn>
    </div>
  </div>
</template>
