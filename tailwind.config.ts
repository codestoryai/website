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
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                foreground: "#0f172a",
                card: "#ffffff",
                "card-foreground": "#0f172a",
                primary: "#4f46e5",
                "primary-foreground": "#ffffff",
                secondary: "#f1f5f9",
                "secondary-foreground": "#0f172a",
                muted: "#f1f5f9",
                "muted-foreground": "#64748b",
                accent: "#f1f5f9",
                "accent-foreground": "#0f172a",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#e2e8f0",
                input: "#e2e8f0",
                ring: "#4f46e5",
            },
            borderRadius: {
                lg: "0.5rem",
                md: "0.375rem",
                sm: "0.25rem",
            },
        },
    },
} satisfies Config;

export default config;