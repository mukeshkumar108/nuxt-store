// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      STRAPI_BASE_URL: process.env.STRAPI_BASE_URL
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: [
    '~/src/style.css'
  ],
  experimental: {
    viewTransition: true,
  },
})
