// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Add or modify the modules array like this:
  modules: [
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/main.css', // Path to your Tailwind CSS file
  ],

  app: {
    head: {
      title: 'CodeSnippets Pro - Organize & Reuse Your Code', // Your Page Title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Boost your development workflow! CodeSnippets Pro helps you manage, find, and reuse your trusted code snippets instantly.' },
        // Add more meta tags here if needed
      ],
      link: [
        // Example for a single favicon.ico in public/
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-cs.svg' }
        // Add other favicon links here if needed
      ]
      // htmlAttrs can also be set here, e.g., { lang: 'en' }
    }
  }
})
