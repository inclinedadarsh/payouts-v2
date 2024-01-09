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
                    DEFAULT: "#fafafa",
                    2: "#f2f2f2",
                    3: "#e6e6e6",
                },

                primary: "#146eb4",

                border: "#d9d9d9",

                sidebar: {
                    DEFAULT: "#1e2640",
                    2: "#353c53",
                },

                text: {
                    DEFAULT: "#1a181e",
                    2: "#4d4d4d",
                    3: "#808080",
                    4: "#999999",
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
