/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      tabletMd: "1050px",
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
