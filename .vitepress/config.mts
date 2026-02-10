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
          text: "Get Started",
          items: [
            { text: "Introduction to Mammouth", link: "/docs/introduction-to-mammouth" },
            { text: "Tips & tricks", link: "/docs/six-useful-tips-about-mammouth" },
            { text: "Install the app", link: "/docs/how-to-download-the-mammouth-app" },
            { text: "Custom mammouths", link: "/docs/mammouth-assistant-tutorial" },
          ],
        },
        {
          text: "Best practices",
          items: [
            { text: "Write effective prompts", link: "/docs/how-to-write-an-effective-prompt" },
            { text: "Choose the right model", link: "/docs/choosing-the-right-ai-model" },
            { text: "Generate good images", link: "/docs/how-to-generate-stunning-images" },
          ],
        },
        {
          text: "Documentation",
          items: [
            { text: "Terms of Service", link: "/docs/terms-of-service" },
            { text: "Privacy Policy", link: "/docs/privacy-policy" },
            { text: "About privacy", link: "/docs/about-privacy" },
            { text: "Quota details", link: "/docs/quota-policy" },
            { text: "Models self-awareness", link: "/docs/model-self-awareness" },
          ],
        },
        {
          text: "👨‍💻 Mammouth Code", link: "/docs/mammouth-code"
        },
        {
          text: "🚀 Release notes", link: "/docs/release-notes"
        },
      ],

      // Sidebar pour la version française
      "/fr/": [
        {
          text: "Premiers pas",
          items: [
            { text: "Introduction à Mammouth", link: "/fr/docs/introduction-to-mammouth" },
            { text: "Trucs et astuces", link: "/fr/docs/six-useful-tips-about-mammouth" },
            { text: "Installer l'application", link: "/fr/docs/how-to-download-the-mammouth-app" },
            { text: "Mammouths personnalisés", link: "/fr/docs/mammouth-assistant-tutorial" },
          ],
        },
        {
          text: "Bonnes pratiques",
          items: [
            { text: "Rédiger ses prompts", link: "/fr/docs/how-to-write-an-effective-prompt" },
            { text: "Choisir le bon modèle", link: "/fr/docs/choosing-the-right-ai-model" },
            { text: "Générer des images", link: "/fr/docs/how-to-generate-stunning-images" },
          ],
        },
        {
          text: "Documentation",
          items: [
            { text: "Conditions d'utilisation", link: "/fr/docs/terms-of-service" },
            { text: "Politique de Confidentialité", link: "/fr/docs/privacy-policy" },
            { text: "À propos de la confidentialité", link: "/fr/docs/about-privacy" },
            { text: "Détails des quotas", link: "/fr/docs/quota-policy" },
            { text: "Identité des IAs", link: "/fr/docs/model-self-awareness" },
          ],
        },
        {
          text: "Mammouth Code", link: "/fr/docs/mammouth-code"
        },
        {
          text: "🚀 Notes de version", link: "/fr/docs/release-notes"
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
