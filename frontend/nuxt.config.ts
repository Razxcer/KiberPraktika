// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  srcDir: 'app',

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api' // Базовый URL для бэкенда
    }
  },

  modules: ['@nuxt/eslint'],
  css: ['~/assets/styles/main.scss'],
  
  components: {
    dirs: [
      { 
        path: '~/widgets',
        pattern: '**/*.vue',
        pathPrefix: false 
      },
      { 
        path: '~/features',
        pattern: '**/*.vue',
        pathPrefix: false 
      },
      { 
        path: '~/entities',
        pattern: '**/*.vue',
        pathPrefix: false 
      },
      { 
        path: '~/common',
        pattern: '**/*.vue',
        pathPrefix: false 
      },
    ]
  },

  imports: {
    dirs: [
      '~/utils' 
    ]
  },

   vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  }
})