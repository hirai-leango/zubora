import type { Config } from 'tailwindcss'
// 色は brand.config.ts の palette から読み込む。
// クラス名（night / gold / kira）は全コンポーネント共通の「意味名」なので固定し、
// HEX 値だけをサイトごとに差し替える。
import { brand, palette } from './brand.config'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // 明るいテーマでは「white系クラス＝本文インク色」に読み替える。
        // 既存記事の text-white/80 などがそのまま読める文字色になる。
        white: palette.text,
        // 背景系（night = palette.bg / bgDeep）
        night: {
          DEFAULT: palette.bg,
          deep: palette.bgDeep,
          soft: '#EFEBE1',
        },
        // 主役アクセント（gold = palette.accent1）
        gold: {
          DEFAULT: palette.accent1,
          light: '#5C574F',
          dark: '#171614',
        },
        // サブアクセント（kira = palette.accent2〜4）
        kira: {
          pink: palette.accent2,
          purple: palette.accent3,
          cyan: palette.accent4,
        },
        // カードなど「本当に白い面」用
        paper: '#FBFAF7',
      },
      fontFamily: {
        sans: [...brand.fonts.sans],
        display: [...brand.fonts.display],
      },
      borderRadius: {
        // 誌面ふうにほぼスクエア。角丸はごく控えめに
        soft: '2px',
      },
      letterSpacing: {
        editorial: '0.25em',
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        // 旧テーマの glow 系キーは「ごくやわらかい影」に読み替えて維持する
        'glow-gold': '0 8px 24px rgba(43, 41, 38, 0.05)',
        'glow-pink': '0 8px 24px rgba(138, 154, 130, 0.12)',
        'glow-cyan': '0 8px 24px rgba(184, 174, 156, 0.14)',
        'glow-purple': '0 8px 24px rgba(154, 170, 180, 0.14)',
        soft: '0 4px 18px rgba(43, 41, 38, 0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config
