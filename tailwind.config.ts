import type { Config } from "tailwindcss";

export default {
    content: ["src/**/*.{ts,tsx,mdx}"],
    theme: {
        extend: {
            screens: {
                xs: "475px"
            },
            container: {
                center: true,
                padding: "1rem",
                screens: { xl: "1280px" }
            },
            colors: {
                primary: {
                    100: "#ffd300",
                    200: "#3a10e5",
                    300: "#10162f",
                    400: "#fff0e5",
                    500: "#2F4F4F", // DarkSlateGray
                    600: "#000000",
                    700: "#010117"
                }
            },
            boxShadow: {
                "primary-100-lg": "-10px 10px 0px 5px #ffd300"
            },
            backgroundImage: {
                noise: "url(/images/common/noise.png)"
            },
            animation: {
                pulse: 'pulse 2s infinite',
                
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' }, // Values as strings
                    '50%': { transform: 'scale(1.1)', opacity: '0.8' },  // Values as strings
                },
            }
        }
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
} satisfies Config;
