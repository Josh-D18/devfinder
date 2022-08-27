/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        "primary-600": "#0079FF",
        "primary-500": "#697C9A",
        "primary-400": "#4B6A9B",
        "primary-300": "#2B3442",
        "primary-200": "#F6F8FF",
        "primary-100": "#FEFEFE",
        "secondary-500": "#0079FF",
        "secondary-400": "#FFFFFF",
        "secondary-300": "#141D2F",
        "secondary-200": "#1E2A47",
        success: "#004D44",
        error: "#AC1A2F",
        caution: "#CF7600",
      },
      backgroundImage: (theme) => ({
        searchIcon: "url('./assets/icon-search.svg')",
      }),
      fontFamily: {
        primary: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
