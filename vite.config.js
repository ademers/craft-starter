import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import critical from 'rollup-plugin-critical';
// Favicon & device icons
import ViteFaviconsPlugin from 'vite-plugin-favicon';
// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        // app: './src/js/app.js',
        app: './src/app.js',
      }
    },
  },

  plugins: [
    legacy({
      targets: ['defaults', 'IE 11']
    }),
    ViteRestart({
      reload: [
        './templates/**/*',
      ],
    }),
    // ViteFaviconsPlugin('./src/example-logo.svg'),
    // critical({
    //     // criticalUrl: 'http://craft-starter.nitro/',
    //     // criticalUrl: 'http://craft-starter.nitro:3000/',
    //     // criticalUrl: 'http://localhost:3000/',
    //     // criticalUrl: '/templates/',
    //     // criticalUrl: '/app/templates/',
    //     // criticalUrl: 'http://0.0.0.0:3000/',
    //     // criticalUrl: 'http://127.0.0.1:80/',
    //     criticalBase: './',
    //     criticalPages: [
    //         { uri: '', template: 'index' },
    //         { uri: 'contact', template: 'contact' },
    //     ],
    //     criticalConfig: {
    //     },
    // }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    https: false,
    hmr: {
      host: 'craft-starter.nitro',
      port: '3000',
      path: '/'
    }
  },
});
