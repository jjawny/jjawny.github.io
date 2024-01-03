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
        yagiza: ["YAGIZA", ...defaultTheme.fontFamily.sans],
        dxslight: ["DxSlight", ...defaultTheme.fontFamily.sans],
        graffity: ["Graffity", ...defaultTheme.fontFamily.sans],
        graffityalt: ["GraffityAlt", ...defaultTheme.fontFamily.sans],
        nighty: ["Nighty", ...defaultTheme.fontFamily.sans],
        remboy: ["Remboy", ...defaultTheme.fontFamily.serif],
        thunder: ["Thunder", ...defaultTheme.fontFamily.sans],
        disketmono: ["DisketMono", ...defaultTheme.fontFamily.mono],
        humane: ["Humane", ...defaultTheme.fontFamily.sans],
        dirtyline: ["Dirtyline", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fadeInSlide: "fadeInSlide 0.4s ease-in forwards",
        fadeIn: "fadeIn 0.4s ease-in forwards",
        fadeOut: "fadeOut 0.2s ease-in forwards",
        zoomIn: "zoomIn 0.4s ease-in forwards",
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
          "70%": { transform: "scale(1.1)" },
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
            fontFamily: "Graffity",
            src: `url('/fonts/Graffity.otf') format('opentype')`,
          },
          {
            fontFamily: "GraffityAlt",
            src: `url('/fonts/GraffityAlt.otf') format('opentype')`,
          },
          {
            fontFamily: "DxSlight",
            src: `url('/fonts/DxSlight.otf') format('opentype')`,
          },
          {
            fontFamily: "YAGIZA",
            src: `url('/fonts/YAGIZA.woff') format('woff')`,
          },
          {
            fontFamily: "Geist",
            src: `url('/fonts/Geist.woff2') format('woff2')`,
          },
          {
            fontFamily: "GeistMono",
            src: `url('/fonts/GeistMono.woff2') format('woff2')`,
          },
          {
            fontFamily: "Remboy",
            src: `url('/fonts/Remboy.ttf') format('truetype')`,
          },
          {
            fontFamily: "Nighty",
            src: `url('/fonts/Nighty.otf') format('opentype')`,
          },
          {
            fontFamily: "Thunder",
            src: `url('/fonts/Thunder.woff2') format('woff2')`,
          },
          {
            fontFamily: "DisketMono",
            src: `url('/fonts/DisketMono.ttf') format('truetype')`,
          },
          {
            fontFamily: "Humane",
            src: `url('/fonts/Humane.woff2') format('woff2')`,
          },
          {
            fontFamily: "Dirtyline",
            src: `url('/fonts/Dirtyline.woff2') format('woff2')`,
          },
        ],
      });
    },
  ],
};

module.exports = config;
