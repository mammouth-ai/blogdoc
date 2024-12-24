import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mammouth AI",
  description: "Documentation & Guides - Mammouth AI",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "App", link: "https://mammouth.ai" }],

    sidebar: [
      {
        text: "Articles",
        items: [
          { text: "Release Notes", link: "/docs/release-notes" },
          {
            text: "Aspect Ratio & Image parameters",
            link: "/docs/aspect-ratio-and-midjourney-parameters",
          },
          {
            text: "Image to Image",
            link: "/docs/how-to-use-the-new-image-features",
          },
          {
            text: "Install the app",
            link: "/docs/how-to-download-the-mammouth-app",
          },
          {
            text: "Mammouth assistants",
            link: "/docs/mammouth-assistant-tutorial",
          },
          {
            text: "Get the best result from your prompt",
            link: "/docs/get-the-best-result-from-your-prompt",
          },
          {
            text: "LLM Popularity Index",
            link: "/docs/introducing-llm-popularity-index",
          },
          { text: "Launch Mammouth app", link: "https://chat.mammouth.ai" },
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
