// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge:  {
        content: [
            './templates/**/*.html',
            './templates/**/*.twig'
        ]
    },
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
