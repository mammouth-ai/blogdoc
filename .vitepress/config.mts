import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mammouth AI",
  description: "Documentation & Guides - Mammouth AI",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    fr: {
      label: "French",
      lang: "fr", // optional, will be added  as `lang` attribute on `html` tag
      link: "/fr/", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
  },
  head: [
    [
      "script",
      {},
      `
      (function () {
        if (typeof window === 'undefined') return;

        const alreadyFr   = location.pathname.startsWith('/fr/');
        // const remembered  = localStorage.getItem('preferred-lang');
        if (alreadyFr) return;

        const userLang = navigator.language || navigator.userLanguage || '';
        if (userLang.toLowerCase().startsWith('fr')) {
          // localStorage.setItem('preferred-lang', 'fr');   // remember the choice
          location.replace('/fr' + location.pathname);
        }
      })();
      `,
    ],
  ],

  themeConfig: {
    siteTitle: "MAMMOUTH",
    logo: "/img/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "App", link: "https://mammouth.ai" },
      { text: "API", link: "/docs/api-quick-start" },
      {
        text: "Jobs",
        link: "/jobs",
      },
    ],

    sidebar: {
      // Sidebar pour la version anglaise (root)
      "/": [
        {
          text: "Documentation",
          items: [
            { text: "Release notes", link: "/docs/release-notes" },
            {
              text: "6 useful tips",
              link: "/docs/six-useful-tips-about-mammouth",
            },
            {
              text: "Image parameters",
              link: "/docs/aspect-ratio-and-midjourney-parameters",
            },
            {
              text: "Upload file formats",
              link: "/docs/supported-file-extensions",
            },
            {
              text: "Install the app",
              link: "/docs/how-to-download-the-mammouth-app",
            },
            { text: "Quota details", link: "/docs/quota-policy" },
            { text: "About privacy", link: "/docs/about-privacy" },
          ],
        },
        {
          text: "Articles",
          items: [
            {
              text: "Custom mammouths",
              link: "/docs/mammouth-assistant-tutorial",
            },
            {
              text: "Get the best from your prompt",
              link: "/docs/get-the-best-result-from-your-prompt",
            },
            {
              text: "LLM popularity index",
              link: "/docs/the-most-popular-llm",
            },
            { text: "Why models lie", link: "/docs/model-versions" },
          ],
        },
      ],

      // Sidebar pour la version française
      "/fr/": [
        {
          text: "Documentation",
          items: [
            { text: "Notes de version", link: "fr/docs/release-notes" },
            {
              text: "6 conseils utiles",
              link: "/fr/docs/six-useful-tips-about-mammouth",
            },
            {
              text: "Paramètres d'image",
              link: "/fr/docs/aspect-ratio-and-midjourney-parameters",
            },
            {
              text: "Formats de fichiers",
              link: "/fr/docs/supported-file-extensions",
            },
            {
              text: "Installer l'app",
              link: "/fr/docs/how-to-download-the-mammouth-app",
            },
            { text: "Détails des quotas", link: "/fr/docs/quota-policy" },
            {
              text: "À propos de la confidentialité",
              link: "/fr/docs/about-privacy",
            },
          ],
        },
        {
          text: "Articles",
          items: [
            {
              text: "Mammouths personnalisés",
              link: "/fr/docs/mammouth-assistant-tutorial",
            },
            {
              text: "Optimiser vos prompts",
              link: "/fr/docs/get-the-best-result-from-your-prompt",
            },
            {
              text: "Index de popularité LLM",
              link: "/fr/docs/the-most-popular-llm",
            },
            {
              text: "Pourquoi les modèles mentent",
              link: "/fr/docs/model-versions",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "linkedin", link: "https://linkedin.com/company/mammouth-ai/" },
    ],
  },
  vue: {},
  vite: {},
  markdown: {},
});
