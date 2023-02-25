import { defineNuxtModule } from "@nuxt/kit";
import Beastcss, { Options } from "beastcss";

function createSlient<T extends unknown>(origin: T) {
  return function () {
    return origin;
  };
}

export interface ModuleOptions {
  // Options passed directly to `beastcss`
  config?: Options;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "beastcss",
    configKey: "beastcss",
  },
  defaults: {
    // @ts-ignore Config needs to be merged
    config: {
      pruneSource: true,
      minifyCss: true,
      preloadExternalStylesheets: true,
    },
  },
  setup(options, nuxt) {
    if (nuxt.options.dev) return;

    nuxt.hook("nitro:init", (nitro) => {
      const beast = new Beastcss({
        path: nitro.options.output.publicDir,
        publicPath: nitro.options.baseURL,
        ...options.config,
      });
      nitro.hooks.hook("prerender:generate", async (route) => {
        if (!route.fileName?.endsWith(".html") || !route.contents) return;
        route.contents = await beast.process(route.contents).catch(
          createSlient(route.contents),
        );
      });
    });
  },
});
