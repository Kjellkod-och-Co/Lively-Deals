/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "lean-green": "#093a05"
      },
    },
  },
  plugins: [require('rippleui')],
  rippleui: {},
}
