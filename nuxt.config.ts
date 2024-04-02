export default defineNuxtConfig({

  // experimental: {
  //   payloadExtraction: true
  // },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt"
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    // baseURL: '/sunilregmi233.com.np/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          src: 'https://climateclock.world/widget-v2.js',
          async: true,
        }
      ],
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
