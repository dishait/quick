import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineUserConfig } from 'vuepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { useGenerateRoutes } from './theme/shared/generate'
import {
	NaiveUiResolver,
	VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

const generateNuxt3Routes = useGenerateRoutes('nuxt3')

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Shared',
	head: [
		['link', { rel: 'icon', href: '/images/logo.svg' }]
	],
	markdown: {
		code: {
			lineNumbers: false
		}
	},
	description: '基于 vuepress 的文档模板',
	themeConfig: {
		logo: '/images/logo.svg',
		sidebar: {
			'/nuxt3/': [
				{
					text: '起步',
					children: generateNuxt3Routes('start')
				},
				{
					text: '特性',
					children: generateNuxt3Routes('features')
				}
			],
			'/about/': [
				{
					children: ['/about/index.md']
				}
			]
		},
		navbar: [
			{
				text: 'Nuxt3',
				link: '/nuxt3/start/install'
			},
			{
				text: 'About',
				link: '/about/'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/dishait/shared'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/dishait/shared'
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
