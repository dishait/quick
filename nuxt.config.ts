import {
	genPrerenderRoutesSync,
	createDefaultGenPrerenderRoutesSyncOptions as defaultOptions
} from 'nuxt3-intelligence'

const routes = genPrerenderRoutesSync(defaultOptions())

const hour = 60 * 60

routes.push('/sitemap.xml', '/config')

export default defineNuxtConfig({
	extends: '@nuxt-themes/docus',
	modules: [
		'nuxt-size',
		'@unocss/nuxt',
		'@nuxt/devtools',
		'@nuxtjs/robots',
		'@nuxtjs/fontaine',
		'@nuxt/image-edge',
		'./modules/beastcss'
	],
	app: {
		head: {
			meta: [
				{ charset: 'utf-8' },
				{ name: 'keywords', content: '编程快速入门视频' },
				{ name: 'keywords', content: '帮助你快速开始编程的教程' },
				{ name: 'description', content: `一个编程快速入门的视频栏目，帮助你快速开始编程` },
			],
			htmlAttrs: {
				lang: 'zh-CN'
			}
		}
	},
	unocss: {
		uno: true,
		attributify: true
	},
	experimental: {
		asyncEntry: true, // 异步入口
		payloadExtraction: false, // 禁止 payload 提取
		crossOriginPrefetch: true, // 跨域预取，加快外链的速度
	},
	vite: {
		define: {
			__VUE_OPTIONS_API__: false // 明确不使用 options api
		}
	},
	sourcemap: false,
	typescript: {
		shim: false
	},
	routeRules: {
		'/**': { swr: 6 * hour, prerender: true}
	},
	nitro: {
		minify: true,
		prerender: {
			routes,
			crawlLinks: true
		}
	}
})
