export default defineNuxtConfig({
	extends: '@nuxt-themes/docus',
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
