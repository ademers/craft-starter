// Tailwind CSS Config
module.exports = {
  content: ["./templates/**/*.html", "./templates/**/*.twig"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
