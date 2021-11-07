module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], //purge unused
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
