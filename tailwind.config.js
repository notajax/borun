/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-solid': 'var(--color-white-solid)',
        'black-solid': 'var(--color-black-solid)',
        'red-8': 'var(--color-red-8)',
        'grey-95': 'var(--color-grey-95)',
      },
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}