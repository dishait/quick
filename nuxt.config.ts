import {
  createDefaultGenPrerenderRoutesSyncOptions,
  genPrerenderRoutesSync,
} from "nuxt3-intelligence";

const defaultOptions = createDefaultGenPrerenderRoutesSyncOptions();
const routes = genPrerenderRoutesSync(defaultOptions);

routes.push("/sitemap.xml", "/config");

export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  modules: ["@unocss/nuxt", "@nuxt/devtools", "@nuxtjs/fontaine"],
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-CN",
      },
    },
  },
  unocss: {
    uno: true,
    attributify: true,
  },
  experimental: {
    asyncEntry: true, // 异步入口
    reactivityTransform: true, // 开启响应性语法糖
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false, // 明确不使用 options api
    },
  },
  // sourcemap: false,
  typescript: {
    shim: false,
  },
  nitro: {
    minify: true,
    preset: "deno",
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    prerender: {
      routes,
      crawlLinks: true,
    },
  },
});
