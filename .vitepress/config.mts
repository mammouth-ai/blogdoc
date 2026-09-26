import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config

const getNav = (locale = "") => [
  { text: "App", link: "https://mammouth.ai" },
  { text: "Code", link: `${locale}/docs/mammouth-code` },
  { text: "API", link: `${locale}/docs/api-quick-start` },
  ...(locale === "/fr" ? [{ text: "Jobs", link: "/jobs" }] : []),
];

export default defineConfig({
  title: "Mammouth AI",
  description: "Documentation & Guides - Mammouth AI",
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: getNav(""),
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      themeConfig: {
        nav: getNav("/fr"),
      },
    },
    de: {
      label: "Deutsch",
      lang: "de",
      link: "/de/",
      title: "Mammouth AI – Dokumentation und Anleitungen",
      description: "Dokumentation und Anleitungen für Mammouth AI",
      themeConfig: {
        nav: getNav("/de"),
      },
    },
  },

  head: [
    [
      "script",
      {},
      `
      (function () {
        if (typeof window === 'undefined') return;

        // Legacy: /fr/jobs moved to /jobs
        if (location.pathname === '/fr/jobs' || location.pathname === '/fr/jobs.html' || location.pathname === '/fr/jobs/') {
          location.replace('/jobs');
          return;
        }

        // Legacy: /fr/docs/sso/ moved to /docs/sso/ (single EN version)
        if (location.pathname.startsWith('/fr/docs/sso')) {
          location.replace('/docs/sso/');
          return;
        }

        const alreadyLocalized = location.pathname.startsWith('/fr/') || location.pathname.startsWith('/de/');
        if (alreadyLocalized) return;

        if (location.pathname === '/jobs' || location.pathname === '/jobs/') return;

        const userLang = navigator.language || navigator.userLanguage || '';
        if (userLang.toLowerCase().startsWith('fr')) {
          location.replace('/fr' + location.pathname);
          return;
        }

        if (userLang.toLowerCase().startsWith('de')) {
          location.replace('/de' + location.pathname);
        }
      })();
      `,
    ],
  ],

  themeConfig: {
    siteTitle: "MAMMOUTH",
    logo: {
      light: "/img/mammouth/logo.svg",
      dark: "/img/mammouth/logo_dm.svg",
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      // Sidebar pour la version anglaise (root)
      "/": [
        {
          text: "Introduction to Mammouth",
          items: [
            { text: "Get Started", link: "/docs/introduction-to-mammouth/" },
            {
              text: "Custom mammouths",
              link: "/docs/mammouth-assistant-tutorial/",
            },
            {
              text: "Install the app",
              link: "/docs/how-to-download-the-mammouth-app/",
            },
            { text: "About privacy", link: "/docs/about-privacy/" },
            { text: "Connectors (MCPs)", link: "/docs/connectors/" },
          ],
        },
        {
          text: "Best practices",
          items: [
            {
              text: "Write effective prompts",
              link: "/docs/how-to-write-an-effective-prompt/",
            },
            {
              text: "Generate good images",
              link: "/docs/how-to-generate-stunning-images/",
            },
            {
              text: "Choose the right model",
              link: "/docs/choosing-the-right-ai-model/",
            },
            {
              text: "Tips & tricks",
              link: "/docs/six-useful-tips-about-mammouth/",
            },
          ],
        },
        {
          text: "For coders",
          items: [
            { text: "API Mammouth", link: "/docs/api-quick-start/" },
            { text: "Mammouth Code", link: "/docs/mammouth-code/" },
          ],
        },
        {
          text: "Documentation",
          items: [
            { text: "Terms of Service", link: "/docs/terms-of-service/" },
            { text: "Privacy Policy", link: "/docs/privacy-policy/" },
            { text: "Teams & Business", link: "/docs/teams/" },
            { text: "Quota details", link: "/docs/quota-policy/" },
            { text: "Branding Kit", link: "/docs/branding-kit" },
            { text: "FAQ", link: "/docs/FAQ/" },
          ],
        },
        {
          text: "🚀 Release notes",
          link: "/docs/release-notes/",
        },
      ],

      // Sidebar pour la version française
      "/de/": [
        {
          text: "Einführung in Mammouth",
          items: [
            { text: "Erste Schritte", link: "/de/docs/introduction-to-mammouth/" },
            { text: "Individuelle Mammouths", link: "/de/docs/mammouth-assistant-tutorial/" },
            { text: "App installieren", link: "/de/docs/how-to-download-the-mammouth-app/" },
            { text: "Datenschutz", link: "/de/docs/about-privacy/" },
            { text: "Konnektoren (MCPs)", link: "/de/docs/connectors/" },
          ],
        },
        {
          text: "Bewährte Vorgehensweisen",
          items: [
            { text: "Effektive Prompts schreiben", link: "/de/docs/how-to-write-an-effective-prompt/" },
            { text: "Bilder generieren", link: "/de/docs/how-to-generate-stunning-images/" },
            { text: "Das richtige Modell wählen", link: "/de/docs/choosing-the-right-ai-model/" },
            { text: "Tipps & Tricks", link: "/de/docs/six-useful-tips-about-mammouth/" },
          ],
        },
        {
          text: "Für Entwickler",
          items: [
            { text: "Mammouth API", link: "/de/docs/api-quick-start/" },
            { text: "Mammouth Code", link: "/de/docs/mammouth-code/" },
          ],
        },
        {
          text: "Dokumentation",
          items: [
            { text: "Nutzungsbedingungen", link: "/de/docs/terms-of-service/" },
            { text: "Datenschutzerklärung", link: "/de/docs/privacy-policy/" },
            { text: "Teams & Unternehmen", link: "/de/docs/teams/" },
            { text: "Kontingentdetails", link: "/de/docs/quota-policy/" },
            { text: "Branding-Kit", link: "/de/docs/branding-kit/" },
            { text: "FAQ", link: "/de/docs/FAQ/" },
          ],
        },
        {
          text: "🚀 Versionshinweise",
          link: "/de/docs/release-notes/",
        },
      ],
      "/fr/": [
        {
          text: "Introduction à Mammouth",
          items: [
            {
              text: "Premiers pas",
              link: "/fr/docs/introduction-to-mammouth/",
            },
            {
              text: "Mammouths personnalisés",
              link: "/fr/docs/mammouth-assistant-tutorial/",
            },
            {
              text: "A propos de vos données",
              link: "/fr/docs/about-privacy/",
            },
            {
              text: "Installer l'application",
              link: "/fr/docs/how-to-download-the-mammouth-app/",
            },
            { text: "Connecteurs (MCP)", link: "/fr/docs/connectors/" },
          ],
        },
        {
          text: "Bonnes pratiques",
          items: [
            {
              text: "Rédiger ses prompts",
              link: "/fr/docs/how-to-write-an-effective-prompt/",
            },
            {
              text: "Générer des images",
              link: "/fr/docs/how-to-generate-stunning-images/",
            },
            {
              text: "Choisir le bon modèle",
              link: "/fr/docs/choosing-the-right-ai-model/",
            },
            {
              text: "Trucs et astuces",
              link: "/fr/docs/six-useful-tips-about-mammouth/",
            },
          ],
        },
        {
          text: "Pour les codeurs",
          items: [
            { text: "API Mammouth", link: "/fr/docs/api-quick-start/" },
            { text: "Mammouth Code", link: "/fr/docs/mammouth-code/" },
          ],
        },
        {
          text: "Documentation",
          items: [
            {
              text: "Conditions d'utilisation",
              link: "/fr/docs/terms-of-service/",
            },
            {
              text: "Politique de Confidentialité",
              link: "/fr/docs/privacy-policy/",
            },
            { text: "Equipes & Entreprises", link: "/fr/docs/teams/" },
            { text: "Détails des quotas", link: "/fr/docs/quota-policy/" },
            { text: "Branding Kit", link: "/fr/docs/branding-kit/" },
            { text: "FAQ", link: "/fr/docs/FAQ/" },
          ],
        },
        {
          text: "🚀 Notes de version",
          link: "/fr/docs/release-notes/",
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
