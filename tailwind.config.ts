import type { Config } from "tailwindcss";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height: {
        100: "25rem",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      backgroundColor: {
        primary: "#ef4444",
      },

      backgroundImage: {
        "hero-pattern": "url('/static/characters_art.jpg')",
        "angle-pattern": "url('/static/angle-corner.svg')",
      },
      aspectRatio: {
        unset: "unset",
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
        "5/4": "5 / 4",
      },
      colors: {
        primary: {
          DEFAULT: "#ef4444",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
