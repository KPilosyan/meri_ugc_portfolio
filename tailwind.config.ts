import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // If you don't use 'src/', include these:
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ugc: {
          pink: "#EBA8B1",
          cream: "#F4EDE4",
          burgundy: "#943248",
          burgundyDark: "#6E2232",
          sand: "#EBDCCB",
          dark: "#2A1E20",
          gray: "#7D696C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.2em",
        wideCustom: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;