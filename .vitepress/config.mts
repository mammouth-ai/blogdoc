import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mammouth AI",
  description: "Blog & Documentation - Mammouth AI",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Release Notes', link: '/blog/release-notes' },
          { text: 'Aspect Ratio & Image parameters', link: '/blog/aspect-ratio-and-midjourney-parameters' },
          { text: 'Image to Image', link: '/blog/how-to-use-the-new-image-features' },
          { text: 'Install the app', link: '/blog/how-to-download-the-mammouth-app' },
          { text: 'Mammouth assistants', link: '/blog/mammouth-assistant-tutorial' },
          { text: 'Get the best result from your prompt', link: '/blog/get-the-best-result-from-your-prompt' },
          { text: 'LLM Popularity Index', link: '/blog/introducing-llm-popularity-index' },
          { text: 'Launch Mammouth app', link: 'https://chat.mammouth.ai' }
        ]
      }
    ],

    socialLinks: [
      { icon: "linkedin", link: "https://linkedin.com/company/mammouth-ai/" },
    ],
  },
  vue: {},
  vite: {},
  markdown: {},
});
