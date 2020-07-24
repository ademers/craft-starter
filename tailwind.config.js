// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge:  {
        mode: 'all',
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
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography'),
    ]
};
