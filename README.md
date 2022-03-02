# Craft CMS 3.7.x Starter Project

A [Craft CMS](https://craftcms.com/) starter project by [Andrea DeMers](https://andreademers.com).

## Content Management System (CMS)

-   [Craft CMS 3.7.x Solo Edition](https://craftcms.com/)
-   [Craft CMS 3.7.x documentation](https://docs.craftcms.com/v3/)

## Craft CMS Plugins

-   [Contact Form](https://plugins.craftcms.com/contact-form)
-   [Minify](https://plugins.craftcms.com/minify)
-   [Redactor](https://plugins.craftcms.com/redactor)
-   [Retcon](https://plugins.craftcms.com/retcon)
-   [SEOmatic](https://plugins.craftcms.com/seomatic)
-   [Sprig](https://plugins.craftcms.com/sprig)
-   [Vite](https://plugins.craftcms.com/vite)

## PHP Packages

-   [Craft Scripts](https://packagist.org/packages/nystudio107/craft-scripts)

## Front-end

### Build Tools

-   [Vite](https://vitejs.dev)

### CSS

-   [Tailwind CSS](https://tailwindcss.com/)
-   [Tailwind CSS Aspec Ratio plugin](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
-   [Tailwind CSS Forms Plugin](https://github.com/tailwindlabs/tailwindcss-forms)
-   [Tailwind CSS Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
-   [Tailwind UI](https://tailwindui.com/) (_commercial license required_)

### JavaScript

-   [Alpine JS](https://github.com/alpinejs/alpine)
-   [lazySizes](https://afarkas.github.io/lazysizes/index.html)

## Requirements

-   Craft [server requirements](https://docs.craftcms.com/v3/requirements.html)
-   Craft [control panel browser requirements](https://docs.craftcms.com/v3/requirements.html#control-panel-browser-requirements)
-   [Composer](https://getcomposer.org/) PHP dependency manager 1.3.0 or later

## Local Dev

This Craft Starter project is configured to use Craft Nitro 2.x as the local development environment.

-   [Craft Nitro 2.x](https://craftcms.com/docs/nitro/2.x/)
-   [Craft Nitro 2.x Mailhog](https://craftcms.com/docs/nitro/2.x/services/mailhog.html) for email.
-   [Craft Nitro 2.x Redis](https://craftcms.com/docs/nitro/2.x/services/redis.html) for caching.

## Installation

1. To create a new project, run `composer create-project ademers/craft-starter <Path>`, substituting `<Path>` with the path where Composer should create the project.
2. Create a database as per the instructions in the [Craft documentation](https://docs.craftcms.com/v3/installation.html#step-4-create-a-database).
3. Set up your web server as per the instructions in the [Craft documentation](https://docs.craftcms.com/v3/installation.html#step-5-set-up-the-web-server).
4. Duplicate the `.env.example` file in the project root and rename it to `.env`.
5. Run the Craft setup wizard `./craft setup` and answer the questions when prompted.
6. Access your new Craft website from your web browser.
7. Do a little dance. :dancer:

## Todo

-   [ ] Get [Vite critical CSS](https://github.com/nystudio107/rollup-plugin-critical) working with Craft Nitro.
-   [ ] Get [Vite Favicon generation](https://github.com/khalwat/vite-plugin-favicon) working with Craft Nitro.
-   [ ] Add a Craft custom site module.
-   [ ] Update installation instructions to include Nitro & Packagist versions.
-   [x] Replace Vue.js with Alpine.js as default JavaScript framework.
-   [x] Add installation instructions.

## License

The MIT License (MIT). Please see [License file](https://github.com/ademers/craft-starter/blob/develop/LICENSE.md) for more information.
