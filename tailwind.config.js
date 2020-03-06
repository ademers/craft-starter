// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
    ]
};
