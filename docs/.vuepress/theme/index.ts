import { resolve } from 'path'
import { watch } from 'chokidar'
import { ThemeObject } from 'vuepress'

const theme: ThemeObject = {
	name: 'docs',
	extends: '@vuepress/theme-default',
	layouts: {
		'404': resolve(__dirname, './layouts/404.vue')
	},
	onWatched(app, watchers, restart) {
		const themeWatcher = watch(
			resolve(__dirname, './index.ts'),
			{ ignoreInitial: true }
		)

		themeWatcher.once('change', restart)

		watchers.push(themeWatcher)
	}
}

export default theme
