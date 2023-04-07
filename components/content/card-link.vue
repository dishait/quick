<script setup lang="ts">
defineProps<{
	doc?: string
	video?: string
}>()
</script>

<template>
	<div class="mt-5 font-semibold text-md text-gray-400 flex justify-end space-x-6">
		<NuxtLink v-if="doc" :to="doc" class="flex items-center space-x-1 cursor-pointer hover:text-cyan-600" prefetch>
			<Icon name="teenyicons:documents-outline" size="16px"></Icon>
			<span> 文档 </span>
		</NuxtLink>
		<NuxtLink v-if="video" :to="video"
			class="flex items-center space-x-1 cursor-pointer hover:text-cyan-600">
			<Icon name="ic:outline-video-library" size="20px"></Icon>

			<span> 视频 </span>
		</NuxtLink>
	</div>
</template>
