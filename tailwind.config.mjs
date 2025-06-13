/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1e0629",
        "neon-pink": {
          light: "#FFEBF5",
          dark: "#FF47A9",
          50: "#FFF7FC",
          100: "#FFEBF5",  // light
          200: "#FFD1E8",
          300: "#FFB8DB",
          400: "#FF9ECE",
          500: "#FF85C1",
          600: "#FF6BB4",
          700: "#FF52A7",
          800: "#FF47A9",  // dark
          900: "#E6409A"
        },
      },
    },
    fontFamily: {
      headline: ["Roboto", "sans-serif"],
      subline: ["Arial", "sans-serif"],
      paragraph: ["Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
