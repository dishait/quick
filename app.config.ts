// TODO fav 图标

export default defineAppConfig({
	docus: {
		title: 'Quick',
		description:
			'一个编程快速入门视频栏目，帮助你快速学会编程知识',
		url: 'https://dishait.github.io/quick/',
		socials: {
			bilibili: {
				icon: 'fa-brands:youtube',
				label: 'bilibili',
				href: 'https://space.bilibili.com/590784571'
			},
			github: 'dishait/quick'
		},
		header: {
			title: 'Quick',
			showLinkIcon: true
		},
		aside: {
			level: 1
		},
		github: {
			edit: true,
			root: 'content',
			contributors: true
		},
		footer: {
			credits: {
				text: 'dishait.cn',
				href: 'http://dishaxy.dishait.cn/'
			}
		}
	}
})
