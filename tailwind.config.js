/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#13AFFA',
      secondary: '#FFAF00',
      white: '#FFF',
      black: '#000',
      gray: '#C0C0C0'
    }
  },
  plugins: [],
}

