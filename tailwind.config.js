/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        base: 'var(--color-bg-base)',
        surface: 'var(--color-bg-surface)',
        'surface-alt': 'var(--color-bg-surface-alt)',
        main: 'var(--color-text-main)',
        muted: 'var(--color-text-muted)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['monospace'],
      }
    },
  },
  plugins: [],
}

