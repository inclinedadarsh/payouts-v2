import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "var(--background)",
                    2: "var(--background-2)",
                    3: "var(--background-3)",
                },

                primary: "var(--primary)",

                border: "var(--border)",

                sidebar: {
                    DEFAULT: "var(--sidebar-dark)",
                    2: "var(--sidebar-dark-2)",
                },

                text: {
                    DEFAULT: "var(--text)",
                    2: "var(--text-2)",
                    3: "var(--text-3)",
                    4: "var(--text-4)",
                },

                white: "#ffffff",

                transparent: "#ffffff00",
            },

            gridTemplateColumns: {
                layout: "224px minmax(0, 1fr)",
            },
            gridTemplateRows: {
                layout: "auto 1fr",
            },
        },
    },
    plugins: [],
};
export default config;
