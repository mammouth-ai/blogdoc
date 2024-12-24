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
          { text: 'Release Notes', link: '/markdown-examples' },
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
