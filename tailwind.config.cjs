/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: " hsl(0, 0%, 41%)",
      },
      fontFamily: {
        Alata: " Alata, sans-serif",
        Josefin: " Josefin Sans, sans-serif",
        Cairo: "Cairo, sans-serif",
      },
    },
  },

  plugins: [],
};
