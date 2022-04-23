# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.4.2 2022-04-23
### Fixed
- Fix changelog.
## 1.4.1 2022-04-23
### Changed
- Update Craft CMS to 3.7.38.
- Update Craft plugins to latest versions.
- Update Tailwind CSS to 3.0.24.
- Update Alpine JS to 3.10.2.
- Update NPM packages.
- Change Favicon to match site logo.
## 1.4.0 2022-03-02
### Added

-   Add Prettier for code formatting.

### Changed

-   Update Craft CMS to 3.7.34.
-   Update Tailwind CSS to 3.0.23.
-   Update Tailwind CSS plugins to their TW CSS 3.x compatible versions.
-   Replace Laravel Mix with Vite.
-   Update contact form.

## 1.3.0 2021-04-26

### Added

-   Add support for Nitro 2.x. Mailhog.
-   Install Yii2 Redis Composer package.
-   Add support for Nitro 2.x. Redis.

### Changed

-   Configure local dev environment to use Nitro 2.x instead of Laravel Homestead.
-   Configure Craft email to use Nitro 2.x. Mailhog.
-   Configure Craft cache to use Nitro 2.x. Redis.
-   Update Craft CMS to 3.6.12.
-   Update other Craft plugins.
-   Update Tailwind CSS to 2.x and configure to use JIT.
-   Update other NPM packages.

## 1.2.2 2021-02-02

### Added

-   Add Craft auto-complete for PhpStorm.

### Changed

-   Update Twigpack plugin to 1.2.9.
-   Update Sprig plugin to 1.3.2.
-   Update SEOmatic plugin to 3.3.30.
-   Update Redactor to 2.8.5.
-   Update Craft to 3.5.19.1.
-   Update Tailwind CSS to 2.0.2 postCSS 7.x compatible version.
-   Update Tailwind CSS typography plugin to 0.4.0.
-   Update Laravel Mix to 5.0.9.
-   Update Alpine JS to 2.8.0.
-   Update Lazysizes to 5.3.0.

### Fixed

-   Fix FOUC caused by Twigpack CSS async loading.

## 1.2.1 2020-10-29

### Added

-   Add _Sprigified_ Craft contact form.
-   Add Tailwind CSS typography plugin classes.
-   Add support for upcoming Tailwind CSS 2.x.

### Changed

-   Rename navbar template.
-   Update Twigpack plugin to 1.2.6.
-   Update Sprig plugint to 1.0.3.
-   Update SEOmatic plugin to 3.3.22.
-   Update Redactor plugin to 2.8.3.
-   Update Craft to 3.5.14.
-   Update Alpine JS to 2.7.3.
-   Update laravel-mix to 5.0.7.
-   Update browser-sync to 2.26.13.
-   Update vue-template-compiler to 2.6.12.
-   Update tailwindcss to 1.9.6.

### Fixed

-   Fix SVG FOUC.

## 1.2.0 2020-07-24

### Added

-   Install Sprig plugin 1.0.0-beta.9.
-   Install & configure Tailwind CSS typography plugin.
-   Add Tailwind CSS typography classes to templates.
-   Set up Tailwind’s built-in PurgeCSS.

### Changed

-   Update Craft CMS to 3.5.0-RC3.
-   Update SEOmatic plugin to 3.3.8.
-   Update Twigpack plugin to 1.2.3.
-   Update Retcon plugin to 2.2.1.
-   Update Minify plugin to 1.2.10.
-   Update Contact Form plugin to 2.2.7.
-   Update Tailwind CSS to 1.5.2.
-   Update Tailwind UI to 0.1.4.
-   Update Lazysizes to 5.2.2.
-   Update Alpine JS to 2.5.0.
-   Update Browsersync to 2.26.10.

### Removed

-   Uninstall & remove Vue JS in favour of Alpine JS.
-   Uninstall & remove Laravel Mix PurgeCSS in favour of Tailwind’s built-in PurgeCSS.

## 1.1.3 2020-03-31

### Changed

-   Reinstall & uninstall Imager plugin to fix `project.yaml`.

## 1.1.2 - 2020-03-30

### Added

-   Add _images_ Assets Volume.
-   Add SeoMatic plugin config file.
-   Add Minify plugin config file.
-   Add Contact Form plugin config file.
-   Add DSN to DB config file.
-   Add DB_DSN & custom vars to `.env.example.com`.

### Changed

-   Downgrade Craft CMS to Solo edition.
-   Hardcode Craft & plugin versions in `composer.json`.
-   Update readme file.

### Removed

-   Remove DB configs replaced by DSN.

## 1.1.1 - 2020-03-20

### Changed

-   Update Craft and Craft plugins to latest versions.
-   Update README.

### Removed

-   Uninstall and remove Craft Mailgun plugin.
-   Remove Composer platform config.

## 1.1.0 - 2020-03-06

### Added

-   Install Tailwind UI npm package.
-   Install Alpine.js npm package.

### Changed

-   Update Craft & plugins to latest versions.
-   Update Tailwind CSS to 1.2.0.
-   Update todos in readme.
-   Replace Vue.js with Alpine.js as default JavaScript framework.

### Removed

-   Uninstall Craft Imager plugin since no longer maintained.
-   Uninstall laravel-mix-critical npm package.
-   Uninstall @fullhuman/postcss-purgecss.

## 1.0.5 - 2019-11-29

### Changed

-   Update Craft & plugins.
-   Add requirements & installation instructions to readme.
-   Add keywords & type to composer.json.
-   Remove .env.example from .gitignore.
-   Add settings to .env.example.

## 1.0.4 - 2019-11-28

### Changed

-   Added license info to composer.json.
-   Updated package version in composer.json.

## 1.0.3 - 2019-11-28

### Changed

-   Updated package version.

## 1.0.2 - 2019-11-28

### Added

-   Add MIT License.

### Changed

-   Updated readme.

## 1.0.1 - 2019-11-28

### Added

-   Add project info to make Packagist happy.

## 1.0.0 - 2019-11-28

### Added

-   Initial release.
