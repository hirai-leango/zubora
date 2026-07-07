<script setup lang="ts">
import { brand } from '~/brand.config'

useSeo({
  title: `特定商取引法に基づく表記 | ${brand.name}`,
  description: `${brand.name}の特定商取引法に基づく表記。販売業者、運営責任者、お問い合わせ先、販売価格、送料、返品・交換などについて記載しています。`,
  path: '/legal/',
})

const contactEmail = brand.contactEmail || 'info@example.com'

// ここを実際の事業者情報に差し替える
const items = [
  { label: '販売業者', value: 'ここに事業者名を入れる' },
  { label: '運営責任者', value: 'ここに責任者名を入れる' },
  { label: '所在地', value: 'ここに所在地を入れる（請求があった場合、遅滞なく開示いたします）' },
  { label: '電話番号', value: '請求があった場合、遅滞なく開示いたします' },
  { label: 'メールアドレス', value: contactEmail, mail: true },
  { label: '販売価格', value: 'Zubora Foam 500ml ¥2,800（税込）。各商品ページに表示しています' },
  { label: '商品代金以外の必要料金', value: '送料（全国一律、金額はご注文画面に表示）・銀行振込の場合の振込手数料' },
  { label: '支払方法', value: 'クレジットカード決済・銀行振込（詳細はご注文画面でご案内します）' },
  { label: '支払時期', value: 'クレジットカード：ご注文確定時／銀行振込：ご注文後7日以内' },
  { label: '商品の引き渡し時期', value: 'ご入金確認後、5営業日以内に発送いたします' },
  { label: '返品・交換', value: '商品の不良・誤配送の場合は、商品到着後7日以内にご連絡ください。当社負担で交換いたします。お客様都合による未開封品の返品は、商品到着後7日以内・送料お客様負担にて承ります。開封済みの商品の返品はご容赦ください' },
]
</script>

<template>
  <div class="min-h-screen bg-night px-5 py-24 md:px-8">
    <div class="mx-auto max-w-3xl">
      <FadeIn>
        <p class="text-sm tracking-wide text-kira-pink">legal notice</p>
        <h1 class="section-title mt-4 font-display">特定商取引法に基づく表記</h1>
      </FadeIn>

      <FadeIn :delay="120">
        <div class="glass-card mt-12 overflow-hidden">
          <dl>
            <div
              v-for="(item, i) in items"
              :key="item.label"
              class="flex flex-col gap-1 px-6 py-5 md:flex-row md:gap-6 md:px-10"
              :class="{ 'border-t border-gold/10': i > 0 }"
            >
              <dt class="shrink-0 text-sm font-semibold text-gold/60 md:w-48 md:pt-0.5">
                {{ item.label }}
              </dt>
              <dd class="leading-relaxed text-gold/80">
                <a
                  v-if="item.mail"
                  :href="`mailto:${item.value}`"
                  class="font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  {{ item.value }}
                </a>
                <template v-else>{{ item.value }}</template>
              </dd>
            </div>
          </dl>
        </div>
      </FadeIn>

      <FadeIn :delay="200">
        <p class="mt-8 text-sm leading-relaxed text-gold/50">
          肌に合わない場合は使用を中止し、必要に応じて専門医にご相談ください。
        </p>
        <div class="mt-8">
          <NuxtLink to="/contact/" class="btn-outline-holo">お問い合わせはこちら</NuxtLink>
        </div>
      </FadeIn>
    </div>
  </div>
</template>
