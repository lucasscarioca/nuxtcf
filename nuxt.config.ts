// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'nitro-cloudflare-dev',
    '@nuxtjs/seo',
  ],
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/login': { prerender: true },
    '/register': { prerender: true },
    '/forgot-password': { prerender: true },
    // '/settings/**': { ssr: false },
    // '/dashboard/**': { ssr: false },
  },
  site: {
    url: 'nuxtcf.oaklabs.workers.dev',
    name: 'NuxtCf',
    description: 'Nuxt + Cloudflare Starter SaaS',
    defaultLocale: 'en',
  },
})
