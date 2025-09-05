import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        spin: {
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        spin: 'spin 1s linear infinite'
      }
    }
  },
  plugins: []
} satisfies Config
