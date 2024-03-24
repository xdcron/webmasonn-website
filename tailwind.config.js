/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: "#6CDE7B",
      },
      screens: {
        sm: "790px",
        md: "1200px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
