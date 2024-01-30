// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   purge: [ './src/**/*.{js,jsx,ts,tsx}' ],
//   prefix: "tw-",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {},
    },
  },
  plugins: [],
};