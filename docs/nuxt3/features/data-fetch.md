---
sidebarDepth: 1
---

# 数据获取


## 基础

`nuxt3` 中内置了以下四种请求的方法

- useFetch
- useLazyFetch
- useAsyncData
- useLazyAsyncData 

```html
<script setup lang="ts">
// 参数一是 key
// 参数二是请求 handler，返回请求的 promise
// 解构出来的 data 为数据，error 为错误信息
const { data, error } = await useAsyncData('count', () => {
    return new Promise(resolve => resolve('mock'))
})
</script>

<template>
    <div>
        <div>data: {{ data }}</div>
        <div>error: {{ error }}</div>
    </div>
</template>
```

内置的  `$fetch` 可以直接进行请求

```html
<script setup lang="ts">
const { data, error } = await useAsyncData('count', () => {
    return $fetch('http://...') // 请求地址
})
</script>
```

当然你可以用更简洁的 `useFetch`，它会在内部自动生成 `key`。

```html
<script setup lang="ts">
const { data, error } = await useFetch('http://...') // 你的请求地址
</script>
```

`useFetch` 会在内部自动使用 `$fetch` 作为请求方法，所以没有 `useAsyncData` 灵活。

<br />

### lazy

`useFetch` 和 `useAsyncData` 会阻塞导航的跳转。


例如，`index` 页面跳转到 `home` 页面

```html
<template>
	<NuxtLink to="/home"> to home</NuxtLink>
</template>
```

而 `home` 页面有 `useFetch` 请求

```html
<!-- pages/home.vue -->
<script lang="ts" setup>
// 以下请求将会阻塞导航的跳转
const { data } = await useFetch('http://localhost:4000')
</script>

<template>
	<div>{{ data }}</div>
</template>
```

而使用对应的 `lazy` 模式，`useLazyFetch` 或 `useLazyAsyncData` 可以让导航跳转不被阻塞

```html
<!-- pages/home.vue -->
<script lang="ts" setup>
// 使用 useFetch 的 lazy 模式，不会阻塞导航跳转
const { data } = await useLazyFetch('http://localhost:4000')
</script>

<template>
	<div>{{ data }}</div>
</template>
```

<br />
<br />
<br />

## 注意

由于 `nuxt3` 默认是全 `SSR` 的渲染模式，所以相同的业务代码会在 `node` 和浏览器都跑一遍。  

这意味着大多数 **仅支持浏览器的请求库** 可能需要被迫在特定生命周期节点中运行。

具体可见 👉 [SSR/访问平台特有 API](https://staging-cn.vuejs.org/guide/scaling-up/ssr.html#access-to-platform-specific-apis)。


因为 `axios` 兼容 `node` 和浏览器双端的，所以你能够使用它进行请求。

```html
<script lang="ts" setup>
const { data } = await axios.get('http://...') // 你的请求地址
</script>
```

不过还是推荐你使用内置请求方法。