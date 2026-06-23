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
        brand: {
          // ── Core logo colors ──────────────────────────────────────
          navy:       "#1A2B6B",   // "EXALT" dark navy wordmark
          "navy-dark":"#111D4A",   // deeper navy for hover / footer
          gold:       "#C8A020",   // swoosh, star, "IMPACT NETWORK"
          "gold-dark":"#A07A10",   // gold hover state
          "gold-light":"#F5E199",  // light gold tint
          green:      "#3A9E3F",   // left figure (creation / environment)
          blue:       "#2B6CB0",   // right figure (people / systems)
          // ── UI surface colors ─────────────────────────────────────
          sky:        "#EEF3FB",   // very light blue-tinted surface
          cream:      "#FAF8F2",   // warm off-white section bg
          mist:       "#F0F4F0",   // light green-tinted surface
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body:    ["system-ui", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up":  "fadeUp 0.7s ease-out both",
        "slide-in": "slideIn 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
