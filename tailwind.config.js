/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5CA9A",
        primaryDark: "#272727",
        lightGrey: "#9d9d9d",
        lightBlack: "#2b3040",
      },
    },
  },
  plugins: [],
};
