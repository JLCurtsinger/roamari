import type { Config } from "tailwindcss";

export default {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF",
          dark: "#0284C7",
        },
        secondary: {
          DEFAULT: "#F97316",
          foreground: "#FFFFFF",
          dark: "#EA580C",
        },
        accent: {
          DEFAULT: "#22C55E",
          foreground: "#FFFFFF",
          dark: "#16A34A",
        },
        muted: {
          DEFAULT: "#D3E4FD",
          foreground: "#1E293B",
          dark: "#1E293B",
        },
      },
      backgroundImage: {
        'gradient-travel': 'linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',
        'gradient-sunset': 'linear-gradient(90deg, hsla(24, 100%, 65%, 1) 0%, hsla(341, 91%, 58%, 1) 100%)',
        'gradient-ocean': 'linear-gradient(90deg, hsla(199, 69%, 84%, 1) 0%, hsla(187, 72%, 59%, 1) 100%)',
        'gradient-sky': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
        'gradient-hero': 'linear-gradient(to right, #0A0A0A 0%, #221F26 100%)',
        'dark-gradient-travel': 'linear-gradient(90deg, hsla(186, 33%, 20%, 1) 0%, hsla(216, 41%, 25%, 1) 100%)',
        'dark-gradient-sunset': 'linear-gradient(90deg, hsla(24, 70%, 45%, 1) 0%, hsla(341, 71%, 38%, 1) 100%)',
        'dark-gradient-ocean': 'linear-gradient(90deg, hsla(199, 69%, 24%, 1) 0%, hsla(187, 72%, 29%, 1) 100%)',
        'dark-gradient-sky': 'linear-gradient(90deg, hsla(221, 45%, 23%, 1) 0%, hsla(220, 78%, 19%, 1) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
