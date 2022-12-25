/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  // daisyUI config
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=retro]"],
        primary: "#307049",
        secondary: "#0d488c",
      },
      black: {
        ...require("daisyui/src/colors/themes")["[data-theme=black]"],
        primary: "#4fee99",
        secondary: "#8a10cc",
      },
    }, "business", "forest", "night", "coffee", "dracula"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },

}
