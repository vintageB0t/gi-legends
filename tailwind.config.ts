import type { Config } from "tailwindcss";

/**
 * GI Legends 2026 — tokens da marca.
 * Cores e fontes ficam aqui como fonte única de edição.
 * (Tailwind v4 carrega este arquivo via `@config` em app/globals.css.)
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petroleo: "#0F2A2A", // base institucional, fundos escuros
        teal: "#00BFA6", // cor de assinatura, CTAs, destaques
        menta: "#D9FAF4", // fundos claros
      },
      fontFamily: {
        // "GI" e títulos de peso
        sanchez: ["var(--font-sanchez)", "Georgia", "serif"],
        // "legends" e palavras de destaque (usar em itálico)
        instrument: ["var(--font-instrument)", "Georgia", "serif"],
        // corpo de texto, legendas, botões
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
};

export default config;
