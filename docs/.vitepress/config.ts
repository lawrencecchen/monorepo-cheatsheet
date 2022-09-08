import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TypeScript Monorepo Cheatsheet",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lawrencecchen/monorepo-cheatsheet",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Lawrence Chen",
    },
  },
});
