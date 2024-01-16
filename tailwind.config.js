/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    theme: {
        extend: {
            colors: {
                light: "#646464",
                dark: "#2B2B2B",
                color: '#F53838',
            },
            fontFamily: {
                serif: [
                    'Rubik',
                ]
            },
            // backgroundImage: {
            //     'ready-icon': "url('./images/icons/ready.svg')",
            // }
        },
    },
    plugins: [],
}

