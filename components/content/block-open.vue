<script lang="ts" setup>
interface Opener {
	open: Array<{
		title: string
		desc: string
		href: string
		icons?: string[]
	}>
}

const { data } = useAsyncData(`/config/open`, () => {
	return queryContent<Opener>('/config')
		.only('open')
		.findOne()
})

const _icons = {
	vue: 'vscode-icons:file-type-vue',
	ts: 'vscode-icons:file-type-typescript-official',
	typescript: 'vscode-icons:file-type-typescript-official',
	vite: 'logos:vitejs',
	deno: 'vscode-icons:file-type-light-deno',
	go: 'skill-icons:golang',
	golang: 'skill-icons:golang',
	node: 'logos:nodejs-icon',
	nodejs: 'logos:nodejs-icon',
	naive: 'logos:naiveui',
	naiveui: 'logos:naiveui',
	electron: 'logos:electron'
}

function filterIcons(icons?: string[]) {
	if (!icons) {
		return []
	}
	return icons
		.map(icon => _icons[icon as keyof typeof _icons])
		.filter(Boolean)
}
</script>

<template>
	<div
		class="grid gap-5 grid-cols-1"
		lg="grid-cols-3"
		md="grid-cols-2">
		<NuxtLink
			v-for="v of data?.open"
			:key="v.href"
			:to="v.href"
			>
			<div
				hover="shadow-md"
				dark="shadow-gray-900"
				dark:hover="shadow-gray-500/50"
				class="cursor-pointer shadow transition-shadow p-5 pb-6 rounded-lg space-y-3 relative">
				<div class="absolute top-2 right-2 space-x-1">
					<span
						v-for="name in filterIcons(v.icons)"
						:key="name">
						<Icon :name="name"></Icon>
					</span>
				</div>

				<h3
					class="text-lg text-gray-900"
					dark="text-gray-100">
					{{ v.title }}
				</h3>
				<p class="text-sm text-gray-500">{{ v.desc }}</p>
			</div>
		</NuxtLink>
	</div>
</template>
