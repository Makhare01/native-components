/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './views/**/*.{js.ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // text
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          placeholder: 'var(--text-placeholder)',
          disabled: 'var(--text-disabled)',
        },

        // foreground
        foreground: {
          default: 'var(--foreground-default)',
          hover: 'var(--foreground-hover)',
          press: 'var(--foreground-press)',
          selected: 'var(--foreground-selected)',
          disabled: 'var(--foreground-disabled)',
        },

        // background
        background: {
          canvas: 'var(--background-canvas)',
          container: 'var(--background-container)',
          surface1: 'var(--background-surface-1)',
          surface2: 'var(--background-surface-2)',
          focus: 'var(--background-focus)',
        },

        // primary
        primary: {
          dark: 'var(--primary-dark)',
          base: 'var(--primary-base)',
          light: 'var(--primary-light)',
          'op-24': 'var(--primary-op-24)',
          'op-16': 'var(--primary-op-16)',
          'op-8': 'var(--primary-op-8)',
        },

        // secondary
        secondary: {
          dark: 'var(--secondary-dark)',
          base: 'var(--secondary-base)',
          light: 'var(--secondary-light)',
          'op-24': 'var(--secondary-op-24)',
          'op-16': 'var(--secondary-op-16)',
          'op-8': 'var(--secondary-op-8)',
        },

        // success
        success: {
          dark: 'var(--success-dark)',
          base: 'var(--success-base)',
          light: 'var(--success-light)',
          'op-24': 'var(--success-op-24)',
          'op-16': 'var(--success-op-16)',
          'op-8': 'var(--success-op-8)',
        },

        // warning
        warning: {
          dark: 'var(--warning-dark)',
          base: 'var(--warning-base)',
          light: 'var(--warning-light)',
          'op-24': 'var(--warning-op-24)',
          'op-16': 'var(--warning-op-16)',
          'op-8': 'var(--warning-op-8)',
        },

        // error
        error: {
          dark: 'var(--error-dark)',
          base: 'var(--error-base)',
          light: 'var(--error-light)',
          'op-24': 'var(--error-op-24)',
          'op-16': 'var(--error-op-16)',
          'op-8': 'var(--error-op-8)',
        },

        // informative
        info: {
          dark: 'var(--info-dark)',
          base: 'var(--info-base)',
          light: 'var(--info-light)',
          'op-24': 'var(--info-op-24)',
          'op-16': 'var(--info-op-16)',
          'op-8': 'var(--info-op-8)',
        },

        // grayscale
        gray: {
          dark: 'var(--gray-dark)',
          base: 'var(--gray-base)',
          light: 'var(--gray-light)',
          'op-24': 'var(--gray-op-24)',
          'op-16': 'var(--gray-op-16)',
          'op-8': 'var(--gray-op-8)',
        },
      },
    },
  },
  plugins: [],
};
