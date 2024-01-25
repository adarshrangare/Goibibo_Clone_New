/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "460px",
      },
      boxShadow: {
        even: "0 0 7px rgba(0, 0, 0, 0.1)",
        all: "0 0 10px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
