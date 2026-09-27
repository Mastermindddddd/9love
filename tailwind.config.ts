import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        char: "#141414",
        line: "#262422",
        bone: "#ededea",
        fog: "#918f8c",
        blood: "#7a2323",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
