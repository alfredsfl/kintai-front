// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  vite: {
    optimizeDeps: {
      include: ['localforage'],
    },
    server: {
      proxy: {
        '/api/': {
          target: 'http://127.0.0.1:3000/',
          secure: false
        }
      }
    }
  },

  css: [
    '@grapecity/wijmo.styles/wijmo.scss',
    'splitpanes/dist/splitpanes.css',
    '~/assets/css/variants.css',
    // '~/assets/css/app.wijmo.css',
    // '~/assets/css/app.css',
    // '~/assets/css/layouts.css',
    // '~/assets/css/common.css',
    // '~/assets/css/auth.css',
    // '~/assets/css/trans.css',
  ],

  modules: ['@nuxtjs/tailwindcss', 'nuxt3-localforage'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: '勤怠管理システム',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: 'description', content: 'kintai management web Application' }
      ],
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
  },

  compatibilityDate: '2025-03-16'
})