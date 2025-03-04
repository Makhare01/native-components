/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // text
        text_primary: 'var(--text-primary)',
        text_secondary: 'var(--text-secondary)',
        text_placeholder: 'var(--text-placeholder)',
        text_disabled: 'var(--text-disabled)',

        // foreground
        foreground_default: 'var(--foreground-default)',
        foreground_hover: 'var(--foreground-hover)',
        foreground_press: 'var(--foreground-press)',
        foreground_selected: 'var(--foreground-selected)',
        foreground_disabled: 'var(--foreground-disabled)',
      },
    },
  },
  plugins: [],
};
