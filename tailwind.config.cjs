/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
