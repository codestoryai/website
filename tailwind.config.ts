import type { Config } from "tailwindcss";

const config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
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
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                noise: "url('/noise-min.png')",
            },
            borderRadius: {
                none: "0",
                sm: "var(--radius-sm)",
                DEFAULT: "var(--radius)",
                lg: "var(--radius-lg)",
                full: "var(--radius-full)",
            },
            colors: {
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                background: "hsl(var(--background))",
                border: "hsl(var(--border))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                foreground: "hsl(var(--foreground))",
                input: "hsl(var(--input))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                ring: "hsl(var(--ring))",
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
            },
            fontSize: {
                xs: "var(--text-xs)",
                sm: "var(--text-sm)",
                base: "var(--text-base)",
                lg: "var(--text-lg)",
                xl: "var(--text-xl)",
                "2xl": "var(--text-2xl)",
                "3xl": "var(--text-3xl)",
                "4xl": "var(--text-4xl)",
                "5xl": "var(--text-5xl)",
                "6xl": "var(--text-6xl)",
            },
            lineHeight: {
                none: "var(--leading-none)",
                tight: "var(--leading-tight)",
                snug: "var(--leading-snug)",
                normal: "var(--leading-normal)",
                relaxed: "var(--leading-relaxed)",
                loose: "var(--leading-loose)",
            },
            letterSpacing: {
                tighter: "var(--tracking-tighter)",
                tight: "var(--tracking-tight)",
                normal: "var(--tracking-normal)",
                wide: "var(--tracking-wide)",
                wider: "var(--tracking-wider)",
            },
            spacing: {
                0: "var(--spacing-0)",
                1: "var(--spacing-1)",
                2: "var(--spacing-2)",
                3: "var(--spacing-3)",
                4: "var(--spacing-4)",
                6: "var(--spacing-6)",
                8: "var(--spacing-8)",
                12: "var(--spacing-12)",
                16: "var(--spacing-16)",
                24: "var(--spacing-24)",
                32: "var(--spacing-32)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
        },
    },
} satisfies Config;

export default config;
