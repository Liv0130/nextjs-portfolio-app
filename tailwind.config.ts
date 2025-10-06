import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ribbonDrop: {
          "0%": { transform: "translateY(-30%) scaleY(0.9)", opacity: "0" },
          "60%": { transform: "translateY(0) scaleY(1.02)", opacity: "1" },
          "80%": { transform: "translateY(-6px) scaleY(0.995)" },
          "100%": { transform: "translateY(0) scaleY(1)" },
        },
      },
      animation: {
        ribbonDrop: "ribbonDrop 900ms cubic-bezier(0.22,1,0.36,1) 200ms both",
      },
      screens: {
        xs: "550px",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
