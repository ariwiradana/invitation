/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f0ec",
        primary: "#988567",
        dark: "#333333",
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        cormorant: ["Cormorant", "serif"],
        roboto: ["Roboto", "sans-serif"],
        "public-sans": ["Public Sans", "sans-serif"],
        "nothing-you-could-do": ["Nothing You Could Do", "cursive"],
      },
    },
  },
  plugins: [],
};
