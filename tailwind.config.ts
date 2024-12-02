import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customtheme: {
          primary: "#5763EC",
          "primary-content": "#ffffff",
          secondary: "#6C757D",
          "secondary-content": "#ffffff",
          accent: "#f24004",
          "accent-content": "#ffffff",
          neutral: "#343A40",
          "neutral-content": "#ffffff",
          info: "#a501a5",
          "info-content": "#ffffff",
          success: "#2E7D32",
          "success-content": "#ffffff",
          warning: "#c4ad00",
          "warning-content": "#ffffff",
          error: "#D32F2F",
          "error-content": "#ffffff",
          "base-100": "#dcdfe8",
        },
      },
      "dark",
    ],
  },
} satisfies Config;
