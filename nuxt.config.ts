// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/html-validator',
  ],
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  i18n: {
    // baseUrl: "https://ledgity.com",
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      cookieCrossOrigin: true,
      fallbackLocale: "fr",
    },
  },
  typescript: {
    strict: true,
  },
});
