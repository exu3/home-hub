module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        ibm: "IBM Plex Mono, mono space"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
