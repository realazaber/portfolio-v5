/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#007aff",
        secondary: "#0ea5e9",
        thir: "#e6f2ff",
        accent: "#8d959b",
        darkbg: "#131314",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
