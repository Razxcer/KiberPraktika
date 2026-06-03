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

  modules: ['@nuxt/eslint', 'nuxt-swiper', 'vue-yandex-maps/nuxt'],

  yandexMaps: {
    apikey: 'd40d88ee-9f3a-4027-9631-7074e4fc08da', // Получите бесплатный JavaScript API ключ Яндекса
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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
});
