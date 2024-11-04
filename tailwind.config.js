/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#2fb8ac',
        'primary-200': '#ff8826',
        'primary-250': '#b31237',
        'secondary-300': '#f03813'

      }
    },
  },
  plugins: [],
}

