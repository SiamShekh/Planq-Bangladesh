/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Alkatra": "Alkatra, system-ui",
        "Alinur1": "Alinur1, system-ui",
        "Teko": "Teko, sans-serif",

      }
    },
  },
  plugins: [require("daisyui")],

}