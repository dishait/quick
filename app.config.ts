export default defineAppConfig({
	docus: {
		title: 'Quick',
		description:
			'一个编程快速入门视频栏目，帮助你快速学会编程知识',
		url: 'https://dishait.github.io/quick/',
		socials: {
			github: 'dishait/quick',
			bilibili: {
				icon: 'fa-brands:youtube',
				label: 'bilibili',
				href: 'https://space.bilibili.com/590784571'
			}
		},
		header: {
			title: 'Quick',
			showLinkIcon: true,
			exclude: ['/config']
		},
		aside: {
			level: 1
		},
		github: {
			edit: true,
			repo: 'quick',
			branch: 'main',
			dir: 'content',
			owner: 'dishait',
			contributors: true
		},
		footer: {
			credits: {
				text: 'dishait.cn',
				icon: 'fa-brands:youtube',
				href: 'http://dishaxy.dishait.cn/'
			}
		}
	}
})
