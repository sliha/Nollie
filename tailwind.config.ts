import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nollie: {
          black: "#0d0d0d",
          dark: "#1a1a1a",
          gold: "#c4a862",
          "gold-light": "#d4a84b",
          cream: "#f5f0e1",
          beige: "#e8dcc8",
          wine: "#8b2635",
          white: "#ffffff",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sans: ["DM Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
