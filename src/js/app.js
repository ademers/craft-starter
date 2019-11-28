// Vue.js
import Vue from 'vue'

Vue.config.productionTip = false

// Test component {
Vue.component('test-component', {
    data() {
        return {
            greeting: "Hello World!"
        }
    },
});

// Horizontal nav
Vue.component('mobile-toggle', {
    data() {
        return {
            isOpen: false,
            msg: "Vue.js Hello Andrea!",
            greeting: "Vue.js greeting!"
        }
    },
});

// Tailwind UI navbar
Vue.component('tw-ui-navbar', {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        open() {
          this.isOpen = true
          this.$nextTick(() => {
            this.$refs.closeButton.focus()
          })
        },
        close() {
          this.isOpen = false
          this.$nextTick(() => {
            this.$refs.openButton.focus()
          })
        }
      },
      watch: {
        isOpen: {
          immediate: true,
          handler(isOpen) {
            if (isOpen) {
              document.body.style.setProperty('overflow', 'hidden')
            } else {
              document.body.style.removeProperty('overflow')
            }
          }
        }
      }
});

new Vue({
    el: '#app',
    delimiters: ['${', '}'],
});
