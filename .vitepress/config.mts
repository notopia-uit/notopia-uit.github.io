import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notopia",
  description: "Utopia of Notes",
  lang: "en-GB",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Notopia", link: "/notopia" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/notopia-uit/notopia-uit.github.io",
      },
    ],

    search: {
      provider: "local",
    },
  },
});
