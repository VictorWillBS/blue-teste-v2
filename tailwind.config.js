/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "text-normal": "Inter",
            },
            backgroundImage: {
                "white-blue":
                    "linear-gradient(180deg, #2500FF 35%, #f1f1f1 35%)",
            },
            minWidth: {
                11: "2.75rem",
                "1/3": "33%",
            },
            minHeight: {
                11: "2.75rem",
            },
            maxWidth: {
                "2xs": "14rem",
            },
            maxHeight: {
                "1/2": "50%",
            },
            colors: {
                blue: "#2500FF",
            },
            screens: {
                xs: "400px",
            },
            backgroundColor: {
                default: "#fff",
            },
            fontSize: {
                "2xs": "0.5rem",
            },
        },
    },
    plugins: [],
}
