/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#141204",
        secondary: "#933f3f",
        background: "#eddccc",
        "background-secondary": "#f4e3d7",
      },
      fontFamily: {
        headline: ["Roboto", "sans-serif"],
        subline: ["Arial", "sans-serif"],
        paragraph: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
