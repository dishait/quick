export default defineNuxtConfig({
	extends: '@nuxt-themes/docus',
	app: {
		head: {
			htmlAttrs: {
				lang: 'zh-CN'
			}
		}
	},
	experimental: {
		asyncEntry: true, // 异步入口
		reactivityTransform: true // 开启响应性语法糖
	},
	vite: {
		define: {
			__VUE_OPTIONS_API__: false // 明确不使用 options api
		}
		// optimizeDeps: {
		// 	include: ['pinceau']
		// },
		// build: {
		// 	commonjsOptions: {
		// 		include: ['pinceau']
		// 	}
		// }
	},
	typescript: {
		shim: false
	},
	nitro: {
		minify: true,
		preset: 'deno',
		compressPublicAssets: {
			gzip: true,
			brotli: true
		},
		prerender: {
			crawlLinks: true,
			routes: ['/', '/start', '/about', '/sitemap.xml']
		}
	}
})
