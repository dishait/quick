<script setup lang="ts">
defineProps<{
	doc?: string
	video?: string
}>()
</script>

<template>
	<div
		class="mt-5 font-semibold text-md text-gray-400 flex justify-end space-x-6">
		<NuxtLink
			:to="doc"
			class="flex items-center space-x-1 cursor-pointer hover:text-emerald-700">
			<Icon
				name="teenyicons:documents-outline"
				size="16px"></Icon>
			<span> 文档 </span>
		</NuxtLink>
		<NuxtLink
			:to="video"
			target="__blank"
			class="flex items-center space-x-1 cursor-pointer hover:text-emerald-700">
			<Icon
				name="ic:outline-video-library"
				size="20px"></Icon>

			<span> 视频 </span>
		</NuxtLink>
	</div>
</template>
