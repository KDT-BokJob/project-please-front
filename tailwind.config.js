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
      colors: {
        'brand-primary-normal': '#3CB371',
        'brand-primary-light': '#44CD81',
        'brand-primary-dark': '#2C8F58',
        'brand-secondary-normal': '#86C56C',
        'brand-secondary-light': '#C2D471',
        'brand-secondary-dark': '#3A4A3F',
        'brand-point-normal': '#E18A1F',
        'brand-point-normal': '#FAA339',
        'brand-point-normal': '#D27C12',
        'base-primary-normal': '#333232',
        'base-primary-light': '#555555',
        'base-primary-dark': '#000000',
        'base-secondary-normal': '#7C7C7C',
        'base-secondary-light': '#ABABAB',
        'base-secondary-dark': '#505050',
        'base-bright-normal': '#F9F9F9',
        'base-bright-light': '#FFFFFF',
        'base-bright-dark': '#DDDDDD',
      },
      styles: {},
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'handshake-right': {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(8rem)' },
          '100%': { transform: 'translateX(3.5rem)' },
        },
        'handshake-left': {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-8rem)' },
          '100%': { transform: 'translateX(-12.4rem)' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
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
          fontWeight: '700',
        },
        '.title-s': {
          fontSize: '20px',
          fontWeight: '700',
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
          fontSize: '16px',
          fontWeight: '600',
        },
        '.label-m': {
          fontSize: '14px',
          fontWeight: '500',
        },
        '.label-normal': {
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
