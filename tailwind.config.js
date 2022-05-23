module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            zero: "0px",
            xsm: "500px",
            // => @media (min-width: 640px) { ... }
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "700px",
            // => @media (min-width: 768px) { ... }

            "md-t": "800px",
            // => @media (min-width: 800px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            width: {
                fit: "fit-content",
                "30p": "30%",
                "40p": "40%",
                "45p": "45%",
                "49p": "49%",
                "60p": "60%",
                "80p": "80%",
                "90p": "90%",
                "95p": "95%",
                "300px": "300px",
                "600px": "600px",
                "800px": "800px",
            },
            margin: {
                18: "4.5rem",
            },
            minHeight: {
                "1/2": "50vh",
                "2/3": "70vh",
                full: "100%",
            },
            fontSize: {
                xxs: ".6rem",
                xs: ".75rem",
                sm: ".875rem",
                tiny: ".875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem",
                "7xl": "5rem",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide"),
    ],
};
