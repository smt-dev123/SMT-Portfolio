// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "SMT-DEV || Portfolio",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos"],
});
