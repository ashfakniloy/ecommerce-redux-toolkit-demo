import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      colors: {
        "custom-gray": "#03484D",
        "custom-gray2": "#0E3B3E",
        "custom-gray3": "#393939",
        "custom-gray4": "#B6B6B6",
        "custom-blue": "#14B1F0",
        "custom-cyan": "#00CAD7",
        "custom-cyan2": "#15ADB7",
        "custom-cyan3": "#0AAEB9",
      },
    },
  },
  plugins: [],
};

export default config;
