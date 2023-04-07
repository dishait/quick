<script setup lang="ts">
interface Opener {
	course: Array<{
		title: string
		cover: string
		href: string
		desc: string
	}>
}

const { data } = useAsyncData(`/config/course`, () => {
	return queryContent<Opener>('/config')
		.only('course')
		.findOne()
})
</script>

<template>
	<div class="grid gap-5 grid-cols-1 !px-8" lg="grid-cols-4" md="grid-cols-3" sm="grid-cols-2 px-0">
		<NuxtLink v-for="v of data?.course" :key="v.href" :to="v.href">
			<article hover="shadow-md" dark="shadow-gray-900" dark:hover="shadow-gray-500/50"
				class="overflow-hidden rounded-lg cursor-pointer shadow transition-shadow">
				<div>
					<NuxtImg :alt="v.title" :src="v.cover" format="webp" width="400" />
				</div>

				<div class="bg-white p-2 sm:p-6" dark="bg-dark!">
					<h3 class="mt-0.5 text-lg text-gray-900" dark="text-white">
						{{ v.title }}
					</h3>

					<p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-4 dark:text-gray-400">
						{{ v.desc }}
					</p>
				</div>
			</article>
		</NuxtLink>
	</div>
</template>
