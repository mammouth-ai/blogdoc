import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mammouth AI",
  description: "Documentation & Guides - Mammouth AI",
  themeConfig: {
    siteTitle: "MAMMOUTH",
    logo: "/img/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "App", link: "https://mammouth.ai" },
      {
        text: "Jobs",
        link: "/jobs",
      },
    ],

    sidebar: [
      {
        text: "Articles",
        items: [
          { text: "Release Notes", link: "/docs/release-notes" },
          { text: "6 useful tips", link: "/docs/six-useful-tips-about-mammouth" },
          { text: "Image parameters", link: "/docs/aspect-ratio-and-midjourney-parameters" },
          { text: "Image-to-image tips", link: "/docs/how-to-use-image-to-image" },
          { text: "Install the app", link: "/docs/how-to-download-the-mammouth-app" },
          { text: "Custom mammouths", link: "/docs/mammouth-assistant-tutorial" },
          { text: "Get the best from your prompt", link: "/docs/get-the-best-result-from-your-prompt" },
          { text: "LLM Popularity Index", link: "/docs/the-most-popular-llm" },
          { text: "Model Versions", link: "/docs/model-versions" },
          { text: "Quota Details", link: "/docs/quota-policy" },
          { text: "About Privacy", link: "/docs/about-privacy" },
        ],
      },
    ],

    socialLinks: [
      { icon: "linkedin", link: "https://linkedin.com/company/mammouth-ai/" },
    ],
  },
  vue: {},
  vite: {},
  markdown: {},
});
