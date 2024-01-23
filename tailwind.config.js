/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'light-gray': "#646464",
                'dark-theme-light-gray': "#919191",
                'dark-gray': "#2B2B2B",
                'primary': '#F53838',
            },
            fontFamily: {
                serif: [
                    'Rubik',
                ]
            },
        },
    },
    plugins: [],
}

