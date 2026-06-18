// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app',

  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },

  routeRules: {
    '/api/**': {
      proxy: 'http://localhost:8000/api/**',
    },
  },

  modules: ['@nuxt/eslint', 'nuxt-swiper', 'vue-yandex-maps/nuxt', '@nuxt/image'],

  yandexMaps: {
    apikey: 'da6c6537-7d20-485e-9cd3-12e4bf24e6ce',
  },

  css: ['~/assets/styles/main.scss'],

  components: {
    dirs: [
      {
        path: '~/widgets',
        pattern: '**/*.vue',
        pathPrefix: false,
      },
      {
        path: '~/features',
        pattern: '**/*.vue',
        pathPrefix: false,
      },
      {
        path: '~/entities',
        pattern: '**/*.vue',
        pathPrefix: false,
      },
      {
        path: '~/common',
        pattern: '**/*.vue',
        pathPrefix: false,
      },
      {
        path: '~/common/icons',
        pattern: '**/*.vue',
        pathPrefix: false,
        prefix: 'Icon',
      },
    ],
  },

  imports: {
    dirs: ['~/common/lib/api'],
  },

  vite: {
    optimizeDeps: {
      include: ['swiper/modules', 'swiper/vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
});
