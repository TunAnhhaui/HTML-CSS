/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "serif"],
      },
      colors: {
        primary: "#000",
        secondary: "#bebeb9",
        gray: "#EBEBE9",
      },
      maxWidth: {
        1480: "1480px",
      },

      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
