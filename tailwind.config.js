/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './or/your/own/prefers-dark.js'
  ],
  theme: {
    extend: {},
    darkSelector: '.mode-dark'
  },
  plugins: [
    require('tailwind-scrollbar-hide')],
}
