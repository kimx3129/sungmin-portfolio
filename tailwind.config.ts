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
        background:      "#0a0a0a",
        surface:         "#111111",
        "surface-alt":   "#1a1a2e",
        accent:          "#6366f1",
        "accent-hover":  "#4f46e5",
        "text-primary":  "#ffffff",
        "text-secondary":"#a1a1aa",
        border:          "#27272a",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body:    ["Inter",         "sans-serif"],
      },
      animation: {
        "fade-in":    "fadeIn 0.6s ease-out forwards",
        "slide-up":   "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.6" },
          "50%":     { opacity: "1"   },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
