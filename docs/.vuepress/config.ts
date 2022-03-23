import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineUserConfig } from 'vuepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
	NaiveUiResolver,
	VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Shared',
	head: [
		['link', { rel: 'icon', href: '/images/logo.svg' }]
	],
	description: '基于 vuepress 的文档模板',
	themeConfig: {
		logo: '/images/logo.svg',
		navbar: [
			{
				text: 'Nuxt3',
				link: '/nuxt3/'
			},
			{
				text: 'About',
				link: '/about/'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/dishait/shared-docs'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/dishait/shared-docs'
			}
		]
	},
	theme: resolve(__dirname, './theme/index.ts'),
	alias: {
		'~': resolve(__dirname, '../'),
		'~u': resolve(__dirname, './composables')
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, './components')
			}
		],
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search'
					}
				}
			}
		]
	],
	bundlerConfig: {
		viteOptions: {
			plugins: [
				Inspect(),
				Unocss({
					mode: 'per-module'
				}),
				Components({
					dirs: '',
					dts: resolve(
						__dirname,
						'./types/components.d.ts'
					),
					extensions: ['vue', 'md'],
					include: [/\.md$/, /\.vue$/],
					resolvers: [
						NaiveUiResolver(),
						VueUseComponentsResolver()
					]
				}),
				AutoImport({
					dts: resolve(
						__dirname,
						'./types/auto-imports.d.ts'
					),
					imports: ['vue', 'vue-router', '@vueuse/core']
				})
			]
		}
	}
})
