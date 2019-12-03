let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
// Laravel Mix plugins
require('laravel-mix-criticalcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
    .options({
        hmrOptions: {
            host: 'craft-starter.test',
            port: 8080
        }
    })
    .js('src/js/app.js', 'web/js')
    .extract(['vue'])
    .postCss('src/css/app.css', 'web/css', [
        tailwindcss('tailwind.config.js'),
    ])
    .setPublicPath('web')

    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.twig'],
        },
        // Add any webpack dev server config here
        devServer: {
            contentBase: [
                path.resolve(__dirname, 'templates'),
                path.normalize("web")
            ],
            disableHostCheck: true,
            watchContentBase: true,
            proxy: {
                host: '0.0.0.0',  // host machine ip 
                port: 8080,
            },
            watchOptions:{
                poll: true,
                ignored: ["storage", "node_modules", "vendor"],
            },
            
        },
    });
    
    // Keep commented out just in case HMR breaks
    // .browserSync({
    //     proxy: 'http://craft-starter.test/',
    //     port: 3000,
    //     open: false,
    //     files: [
    //         'templates/**/*.html',
    //         'templates/**/*.twig',
    //         'templates/**/*.svg'
    //     ],

    //     watchOptions: {
    //         usePolling: true,
    //         interval: 500,
    //     },
    // });

    // Enable Critical CSS, CSS purging, versioning in Production only
    if (mix.inProduction()) {
        mix
            .criticalCss({
                paths: {
                    base: 'http://craft-starter.test/',
                    templates: './web/criticalcss/'
                },
                urls: [
                    { url: '/', template: 'index' },
                    { url: '404', template: '404' }
                ],
                options: {
                    width: 1400,
                    height: 1400,
                    minify: true,
                    penthouse: {
                        // blockJSRequests: false,
                        forceInclude: [
                            '.block',
                            '.hidden',
                        ]
                    },
                },
            })
            .purgeCss({
                enabled: true,
                globs: [
                    path.join(__dirname, 'templates/*.twig'),
                    path.join(__dirname, 'templates/**/*.twig'),
                    path.join(__dirname, 'templates/**/**/*.twig'),
                    path.join(__dirname, 'src/**/*.js'),
                    path.join(__dirname, 'src/**/*.vue'),
                ],
                extensions: ['html', 'js', 'twig', 'vue'],
                whitelist: [
                
                ],
                folders: ['src', 'templates'],     
            })
            .version();
    }

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
