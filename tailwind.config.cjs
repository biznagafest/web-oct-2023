/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    colors: {
      ...colors,
      "dark-background": "#202020",
      "light-background": "#FFFFFF",
      blue: {
        50: "#E9F2FF",
        100: "#CCE0FF",
        200: "#85B8FF",
        300: "#579DFF",
        400: "#388BFF",
        500: "#1D7AFC",
        600: "#0C66E4",
        700: "#0055CC",
        800: "#09326C",
        900: "#09326C",
      },
      green: {
        50: "#DCFBE5",
        100: "#B7EEC6",
        200: "#88D29C",
        300: "#52C871",
        400: "#34A853",
        500: "#229F43",
        600: "#108C31",
        700: "#0A7928",
        800: "#04621D",
        900: "#024915",
      },
      yellow: {
        50: "#FFFCF4",
        100: "#FFF9E7",
        200: "#FFF2CE",
        300: "#FFEBAF",
        400: "#FFDC77",
        500: "#FFCD3B",
        600: "#FBBC05",
        700: "#E4AA00",
        800: "#8B6700",
        900: "#3D2E00",
      },
      red: {
        50: "#FFF5F5",
        100: "#FFDAD9",
        200: "#FDA7A0",
        300: "#FDA7A0",
        400: "#FA644D",
        500: "#F53B16",
        600: "#DF2F00",
        700: "#DF2F00",
        800: "#721A00",
        900: "#721A00",
      },
      grey: {
        50: "#6C6C6C"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
