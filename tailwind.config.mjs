/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": { 900: "#1e0629" },
        "neon-pink": { 600: "#f9e0e3", 900: "#ff05a2" },
        "neon-blue": { 900: "#04D9FF" },
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
