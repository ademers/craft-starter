// Tailwind CSS Config
module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: {
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
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Inter var'],
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
