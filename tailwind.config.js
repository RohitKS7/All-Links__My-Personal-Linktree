/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      kanit: ["Kanit", "sans-serif"],
    },
    extend: {
      fontSize: {
        16: "16px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
      },
      boxShadow: {
        "5xl": "20px 20px 50px rgba(0, 0, 0, 0.5)",
        normal: "15px 15px 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
