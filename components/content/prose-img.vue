<script setup lang="ts">
import { withBase } from 'ufo'
import { Image as AImage } from "@arco-design/web-vue";
import "@arco-design/web-vue/es/image/style/css.js"

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    }
})
const refinedSrc = computed(() => {
    if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
        return withBase(props.src, useRuntimeConfig().app.baseURL)
    }
    return props.src
})
</script>

<template>
    <AImage class="cursor-pointer" v-bind="$attrs" :src="refinedSrc" :alt="alt" :width="width" :height="height">
    </AImage>
</template>
