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

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],

  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
      },
      screens: {
        sm: '576px',
        lg: '997px',
      },
      colors: {},
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 35s linear infinite',
      },
    },
  },
  plugins: [],
};
