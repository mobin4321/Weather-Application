/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryLightGray: "rgba(151, 150, 150, 0.3)",
      },
    },
  },
  plugins: [],
};
