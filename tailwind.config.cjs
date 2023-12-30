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
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeInLeft: "fadeInLeft 0.5s ease-in forwards",
        fadeInRight: "fadeInRight 0.5s ease-in forwards",
        zoomIn: "zoomIn 1.0s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(25%)" },
          "100%": { opacity: 1, transform: "translateY(0rem)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-5%)" },
          "100%": { opacity: 1, transform: "translateX(0rem)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(5%)" },
          "100%": { opacity: 1, transform: "translateX(0rem)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0) " },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
