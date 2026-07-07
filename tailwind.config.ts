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
        // 背景系（night = palette.bg / bgDeep）
        night: {
          DEFAULT: palette.bg,
          deep: palette.bgDeep,
          soft: '#1a0b38',
        },
        // 主役アクセント（gold = palette.accent1）
        gold: {
          DEFAULT: palette.accent1,
          light: '#FFE55C',
          dark: '#C9A800',
        },
        // サブアクセント（kira = palette.accent2〜4）
        kira: {
          pink: palette.accent2,
          purple: palette.accent3,
          cyan: palette.accent4,
        },
      },
      fontFamily: {
        sans: [...brand.fonts.sans],
        display: [...brand.fonts.display],
      },
      backgroundImage: {
        'holo-gradient': `linear-gradient(135deg, ${palette.accent2}, ${palette.accent3}, ${palette.accent4}, ${palette.accent1})`,
        'holo-gradient-soft':
          'linear-gradient(135deg, rgba(255,105,180,0.15), rgba(191,95,255,0.15), rgba(0,255,255,0.15), rgba(255,215,0,0.15))',
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
        'float-up': 'float-up 8s linear infinite',
        'fall-down': 'fall-down 9s linear infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'holo-shift': 'holo-shift 6s ease infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        'fall-down': {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(105vh) rotate(360deg)', opacity: '0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'holo-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.6)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.45)',
        'glow-pink': '0 0 30px rgba(255, 105, 180, 0.45)',
        'glow-cyan': '0 0 30px rgba(0, 255, 255, 0.35)',
        'glow-purple': '0 0 30px rgba(191, 95, 255, 0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config
