/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F0F1F1',
                secondary: '#5E5322',
                accent: '#FAD648',
                light: '#737373',
                lightes: '#F0F1F1',
                dark: '#3C3C3C',
                medium: '#5E5322'
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [],
}