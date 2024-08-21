/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bannerColor: "rgb(19, 19, 19, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};
