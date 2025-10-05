import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
