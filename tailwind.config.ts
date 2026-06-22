import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: { paper: "#f5efe4", ink: "#1f1b16", muted: "#6d6258", line: "#d8cdbf", accent: "#7c2d12" },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["Georgia", "Cambria", "serif"] },
    },
  },
  plugins: [],
};
export default config;
