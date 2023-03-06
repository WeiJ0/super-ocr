/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    color: {
      black: '#000',
      white: '#fff',
      sky: '#7DD3FC'
    },
    extend: {}
  },
  plugins: []
}
