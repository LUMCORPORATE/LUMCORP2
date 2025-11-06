import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        'sans': ['Instrument Sans', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'mono': ['Geist Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        magenta: "hsl(var(--magenta))",
        purple: "hsl(var(--purple))",
        highlight: "hsl(var(--highlight))",
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at top, hsl(var(--hero-gradient-start)), hsl(var(--hero-gradient-end)))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'text-gradient': 'linear-gradient(135deg, #f0f0f2 0%, rgba(240, 240, 242, 0.3) 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "shake": {
          "0%": { transform: "translateX(0)" },
          "2%, 6%, 10%, 14%, 18%": { transform: "translateX(-1px)" },
          "4%, 8%, 12%, 16%, 20%": { transform: "translateX(1px)" },
          "22%, 100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { 
            transform: "translateX(100px) rotate(0deg)",
            opacity: "0"
          },
          "60%": { 
            transform: "translateX(-10px) rotate(40deg)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateX(0) rotate(35deg)",
            opacity: "1"
          },
        },
        "wipe-reveal": {
          "0%": { 
            left: "0",
            width: "0"
          },
          "50%": { 
            left: "0",
            width: "100%"
          },
          "100%": { 
            left: "0",
            width: "0"
          },
        },
        "text-reveal": {
          "0%, 49%": { 
            opacity: "0"
          },
          "50%, 100%": { 
            opacity: "1"
          },
        },
        "scroll-left": {
          "0%": { 
            transform: "translateX(0)"
          },
          "100%": { 
            transform: "translateX(-50%)"
          },
        },
        "glow-move": {
          "0%, 100%": { 
            backgroundPosition: "0% 50%",
            transform: "scale(1)"
          },
          "50%": { 
            backgroundPosition: "100% 50%",
            transform: "scale(1.05)"
          },
        },
        "shine": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shake": "shake 7s ease-in-out infinite",
        "slide-in-from-right": "slide-in-from-right 0.8s ease-out forwards",
        "wipe-reveal": "wipe-reveal 1.5s ease-in-out forwards",
        "text-reveal": "text-reveal 1.5s ease-in-out forwards",
        "scroll-left": "scroll-left 20s linear infinite",
        "glow-move": "glow-move 20s ease-in-out infinite",
        "shine": "shine 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
