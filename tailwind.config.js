/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.title-l': {
          fontSize: '34px',
          fontWeight: '700',
        },
        '.title-m': {
          fontSize: '28px',
          fontWeight: '600',
        },
        '.title-s': {
          fontSize: '22px',
          fontWeight: '600',
        },
        '.headline': {
          fontSize: '17px',
          fontWeight: '600',
        },
        '.btn-bold': {
          fontSize: '16px',
          fontWeight: '700',
        },
        '.btn-semi': {
          fontSize: '13px',
          fontWeight: '600',
        },
        '.label-semi': {
          fontSize: '15px',
          fontWeight: '600',
        },
        '.label-m': {
          fontSize: '13px',
          fontWeight: '500',
        },
        '.label-nomal': {
          fontSize: '12px',
          fontWeight: '400',
        },
        '.paragraph': {
          fontSize: '11px',
          fontWeight: '400',
        },
      })
    }),
  ],
}
