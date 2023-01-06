import { createResolver } from '@nuxt/kit'

const { resolve: resolveThemeDir } = createResolver(
	import.meta.url
)

export default defineNuxtConfig({
	extends: '@nuxt-themes/docus',
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	css: [resolveThemeDir('./assets/global.css')],
	experimental: {
		asyncEntry: true // 异步入口
	},
	vite: {
		define: {
			__VUE_OPTIONS_API__: false // 明确不使用 options api
		}
	},
	typescript: {
		shim: false
	},
	nitro: {
		preset: 'deno',
		prerender: {
			crawlLinks: true,
			routes: ['/', '/start', '/about']
		}
	}
})
