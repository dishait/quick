export default defineNuxtConfig({
	extends: '@nuxt-themes/docus',
	app: {
		baseURL: '/quick'
	},
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
	}
})
