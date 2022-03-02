// Tailwind CSS Config
module.exports = {
    content: ['./templates/**/*.html', './templates/**/*.twig'],
    theme: {
        container: {
            center: true,
        },

        fontFamily: {
            sans: ['Inter var', 'sans-serif'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
