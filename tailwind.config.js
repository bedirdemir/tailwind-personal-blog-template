/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{html,js}'],
  content: [],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}