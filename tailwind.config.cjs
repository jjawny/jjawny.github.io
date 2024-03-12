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
        centrion: ["CentrionHigh", "GeistMono", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in forwards",
        fadeOut: "fadeOut 0.2s ease-in forwards",
        zoomIn: "zoomIn 0.25s ease-in forwards",
      },
      keyframes: {
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
  plugins: [
    // @ts-ignore
    function ({ addBase, theme }) {
      addBase({
        "@font-face": [
          {
            fontFamily: "Geist",
            src: `url('/fonts/Geist.woff2') format('woff2')`,
          },
          {
            fontFamily: "GeistMono",
            src: `url('/fonts/GeistMono.woff2') format('woff2')`,
          },
          {
            fontFamily: "CentrionHigh",
            src: `url('/fonts/CentrionHigh.woff2') format('woff2')`,
          },
        ],
      });
    },
  ],
};

module.exports = config;
