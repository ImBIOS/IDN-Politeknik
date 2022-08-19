module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'oxygen': ['Oxygen', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
  },

  daisyui: {
    themes: ["light", "dark"]
  },
  plugins: [require("daisyui"),],
}