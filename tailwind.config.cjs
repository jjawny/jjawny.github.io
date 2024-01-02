/** @type {import('tailwindcss').Config} */

// @ts-ignore
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", ...defaultTheme.fontFamily.sans],
        geistmono: ["GeistMono", ...defaultTheme.fontFamily.mono],
        anton: ["Anton", ...defaultTheme.fontFamily.sans],
        rubik: ["Rubik Mono One", ...defaultTheme.fontFamily.mono],
        yagiza: ["YAGIZA", "Anton", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fadeInSlide: "fadeInSlide 0.2s ease-in forwards",
        fadeIn: "fadeIn 0.2s ease-in forwards",
        fadeOut: "fadeOut 0.2s ease-in forwards",
        zoomIn: "zoomIn 1.0s ease-in forwards",
      },
      keyframes: {
        fadeInSlide: {
          "0%": { opacity: 0, transform: "translateX(-5%)" },
          "60%": { opacity: 1 },
          "100%": { transform: "translateX(0rem)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
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
