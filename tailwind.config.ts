import type { Config } from "tailwindcss";

const config = {
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
      padding: "12px",
      screens: {
        lg: "1300px",
        xl: "1300px",
        "2xl": "1300px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "custom-gray": "#03484D",
        "custom-gray2": "#0E3B3E",
        "custom-gray3": "#393939",
        "custom-gray4": "#B6B6B6",
        "custom-blue": "#14B1F0",
        "custom-cyan": "#00CAD7",
        "custom-cyan2": "#15ADB7",
        "custom-cyan3": "#0AAEB9",
        "custom-teal": "#034E53",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
