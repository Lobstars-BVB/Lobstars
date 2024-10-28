/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1e0629",
        "neon-pink": { light: "#FFEBF5", dark: "#FF47A9" },
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
