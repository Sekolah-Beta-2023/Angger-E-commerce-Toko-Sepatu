/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.js',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#112852',
        secondary: '#efefef',
        btnColor: 'rgb(238, 178, 12)',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
