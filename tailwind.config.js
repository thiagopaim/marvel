module.exports = {
  purge: {
    content: ['./src/**/*.vue'],
    safelist: ['bg-red-700', 'bg-green-700'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: [],
}
