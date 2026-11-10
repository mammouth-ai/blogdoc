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
    it: {
      label: "Italiano",
      lang: "it",
      link: "/it/",
      title: "Mammouth AI – Documentazione e guide",
      description: "Documentazione e guide per Mammouth AI",
      themeConfig: {
        nav: getNav("/it"),
      },
    },
    es: {
      label: "Español",
      lang: "es",
      link: "/es/",
      title: "Mammouth AI – Documentación y guías",
      description: "Documentación y guías de Mammouth AI",
      themeConfig: {
        nav: getNav("/es"),
      },
    },
  },

  head: [
    [
      "script",
      { id: "theme-url-param" },
      `
      (function () {
        // ?theme=dark|light|auto — stored under VitePress's appearance key, which the
        // built-in check-dark-mode script (injected after this one) reads before paint.
        // Runs before the redirects below, which drop the query string.
        const theme = new URLSearchParams(location.search).get('theme');
        if (theme !== 'dark' && theme !== 'light') return;
        try {
          localStorage.setItem('vitepress-theme-appearance', theme);
        } catch (e) {}
      })();
      `,
    ],
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

        const privacyRedirects = {
          '/docs/about-privacy': '/docs/privacy-with-model-providers/',
          '/docs/about-privacy/': '/docs/privacy-with-model-providers/',
          '/fr/docs/about-privacy': '/fr/docs/privacy-with-model-providers/',
          '/fr/docs/about-privacy/': '/fr/docs/privacy-with-model-providers/',
          '/de/docs/about-privacy': '/de/docs/privacy-with-model-providers/',
          '/de/docs/about-privacy/': '/de/docs/privacy-with-model-providers/',
        };
        const privacyRedirect = privacyRedirects[location.pathname];
        if (privacyRedirect) {
          location.replace(privacyRedirect);
          return;
        }

        // Legacy: /fr/docs/sso/ moved to /docs/sso/ (single EN version)
        if (location.pathname.startsWith('/fr/docs/sso')) {
          location.replace('/docs/sso/');
          return;
        }

        const alreadyLocalized = location.pathname.startsWith('/fr/') || location.pathname.startsWith('/de/') || location.pathname.startsWith('/it/') || location.pathname.startsWith('/es/');
        if (alreadyLocalized) return;

        if (location.pathname === '/jobs' || location.pathname === '/jobs/' || location.pathname === '/jobs.html') return;
        if (/^\\/docs\\/sso(?:\\/|\\.html)?$/.test(location.pathname)) return;

        const userLang = navigator.language || navigator.userLanguage || '';
        if (userLang.toLowerCase().startsWith('fr')) {
          location.replace('/fr' + location.pathname);
          return;
        }

        if (userLang.toLowerCase().startsWith('de')) {
          location.replace('/de' + location.pathname);
          return;
        }

        if (userLang.toLowerCase().startsWith('it')) {
          location.replace('/it' + location.pathname);
          return;
        }

        if (userLang.toLowerCase().startsWith('es')) {
          location.replace('/es' + location.pathname);
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
            { text: "Privacy with model providers", link: "/docs/privacy-with-model-providers/" },
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
            {
              text: "Use mammouth ai as search engine",
              link: "/docs/browser-search-shortcut/",
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
            { text: "Datenschutz bei Modellanbietern", link: "/de/docs/privacy-with-model-providers/" },
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
            { text: "Als Suchmaschine nutzen", link: "/de/docs/browser-search-shortcut/" },
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
              text: "Confidentialité avec les fournisseurs de modèles",
              link: "/fr/docs/privacy-with-model-providers/",
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
            {
              text: "Moteur de recherche",
              link: "/fr/docs/browser-search-shortcut/",
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
      "/it/": [
        {
          text: "Introduzione a Mammouth",
          items: [
            { text: "Per iniziare", link: "/it/docs/introduction-to-mammouth/" },
            { text: "Mammouth personalizzati", link: "/it/docs/mammouth-assistant-tutorial/" },
            { text: "Installare l'app", link: "/it/docs/how-to-download-the-mammouth-app/" },
            { text: "Privacy e fornitori dei modelli", link: "/it/docs/privacy-with-model-providers/" },
            { text: "Connettori (MCP)", link: "/it/docs/connectors/" },
          ],
        },
        {
          text: "Buone pratiche",
          items: [
            { text: "Scrivere prompt efficaci", link: "/it/docs/how-to-write-an-effective-prompt/" },
            { text: "Generare immagini", link: "/it/docs/how-to-generate-stunning-images/" },
            { text: "Scegliere il modello giusto", link: "/it/docs/choosing-the-right-ai-model/" },
            { text: "Consigli e suggerimenti", link: "/it/docs/six-useful-tips-about-mammouth/" },
            { text: "Usare Mammouth come motore di ricerca", link: "/it/docs/browser-search-shortcut/" },
          ],
        },
        {
          text: "Per sviluppatori",
          items: [
            { text: "API Mammouth", link: "/it/docs/api-quick-start/" },
            { text: "Mammouth Code", link: "/it/docs/mammouth-code/" },
          ],
        },
        {
          text: "Documentazione",
          items: [
            { text: "Termini di servizio", link: "/it/docs/terms-of-service/" },
            { text: "Informativa sulla privacy", link: "/it/docs/privacy-policy/" },
            { text: "Team e aziende", link: "/it/docs/teams/" },
            { text: "Dettagli sulle quote", link: "/it/docs/quota-policy/" },
            { text: "Kit del brand", link: "/it/docs/branding-kit/" },
            { text: "FAQ", link: "/it/docs/FAQ/" },
          ],
        },
        { text: "🚀 Note di rilascio", link: "/it/docs/release-notes/" },
      ],
      "/es/": [
        {
          text: "Introducción a Mammouth",
          items: [
            { text: "Primeros pasos", link: "/es/docs/introduction-to-mammouth/" },
            { text: "Mammouths personalizados", link: "/es/docs/mammouth-assistant-tutorial/" },
            { text: "Instalar la aplicación", link: "/es/docs/how-to-download-the-mammouth-app/" },
            { text: "Privacidad con proveedores de modelos", link: "/es/docs/privacy-with-model-providers/" },
            { text: "Conectores (MCP)", link: "/es/docs/connectors/" },
          ],
        },
        {
          text: "Buenas prácticas",
          items: [
            { text: "Redactar prompts eficaces", link: "/es/docs/how-to-write-an-effective-prompt/" },
            { text: "Generar imágenes", link: "/es/docs/how-to-generate-stunning-images/" },
            { text: "Elegir el modelo adecuado", link: "/es/docs/choosing-the-right-ai-model/" },
            { text: "Consejos y trucos", link: "/es/docs/six-useful-tips-about-mammouth/" },
            { text: "Usar Mammouth como motor de búsqueda", link: "/es/docs/browser-search-shortcut/" },
          ],
        },
        {
          text: "Para desarrolladores",
          items: [
            { text: "API Mammouth", link: "/es/docs/api-quick-start/" },
            { text: "Mammouth Code", link: "/es/docs/mammouth-code/" },
          ],
        },
        {
          text: "Documentación",
          items: [
            { text: "Condiciones del servicio", link: "/es/docs/terms-of-service/" },
            { text: "Política de privacidad", link: "/es/docs/privacy-policy/" },
            { text: "Equipos y empresas", link: "/es/docs/teams/" },
            { text: "Detalles de las cuotas", link: "/es/docs/quota-policy/" },
            { text: "Kit de marca", link: "/es/docs/branding-kit/" },
            { text: "Preguntas frecuentes", link: "/es/docs/FAQ/" },
          ],
        },
        { text: "🚀 Notas de versión", link: "/es/docs/release-notes/" },
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
