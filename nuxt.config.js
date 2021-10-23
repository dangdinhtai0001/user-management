import components from './settings/components.js';
import loading from './settings/loading.js';
import tailwind from './settings/tailwind.js';
import axios from './settings/axios.js';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'user-management',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    '~/assets/scss/index.scss',
    '~/assets/css/tailwind.css',
    '~/assets/css/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/router',
    // custom plugins
    '@/plugins/plugins.server.js',
    '@/plugins/plugins.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: components,

  // Custom page loading: https://nuxtjs.org/examples/loading/customize-nuxt-loading
  loading: loading,

  layoutTransition: {
    name: 'fade-transform',
  },
  pageTransition: {
    name: 'fade-transform',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //https://tailwindcss.nuxtjs.org/
    ['@nuxtjs/tailwindcss', { tailwind }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite'
  ],

  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
  },

  svgSprite: {
    input: '~/assets/icons/svg',
    elementClass: 'svg-icon',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: axios,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
