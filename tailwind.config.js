/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  mode: "jit",
  purge: ['./public/**/*.{html,js}'],
  content: [],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}