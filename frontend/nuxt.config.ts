// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  srcDir: 'app',

  alias: {
    '#types': '../app/common/lib/types'
  },

  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },

  routeRules: {
    '/api/**': { 
      proxy: 'http://localhost:8000/api/**' 
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
      '~/common/lib/api' 
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