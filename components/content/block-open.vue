<script lang="ts" setup>
interface Opener {
	open: Array<{
		title: string
		desc: string
		href: string
	}>
}

const { data } = useAsyncData(`/config/open`, () => {
	return queryContent<Opener>('/config')
		.only('open')
		.findOne()
})
</script>

<template>
	<CardGrid>
		<template #title> 开源仓库 </template>
		<template #root>
			<Ellipsis />
		</template>

		<NuxtLink
			v-for="v of data?.open"
			:key="v.href"
			:to="v.href"
			target="__blank">
			<Card
				hover="shadow"
				class="cursor-pointer transition-shadow"
				dark:hover="shadow-blue-500/50">
				<template #title> {{ v.title }} </template>
				<template #description> {{ v.desc }} </template>
			</Card>
		</NuxtLink>
	</CardGrid>
</template>
