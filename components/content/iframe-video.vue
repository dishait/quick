<script setup lang="ts">
const { page = 1 } = defineProps<{
    aid: string,
    cid: string,
    bvid: string,
    page?: number,
}>()
</script>

<template>
    <iframe
        :src="`//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&page=${page}&high_quality=1&danmaku=1`"
        allowfullscreen="true" width="100%" height="450" scrolling="no" frameborder="0"
        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts allow-popups"></iframe>
</template>