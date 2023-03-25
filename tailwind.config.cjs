/** @type {import('tailwindcss').Config} */

// @ts-ignore
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = config;
