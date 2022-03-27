# 状态共享

1. 使用 `useState` 可以定义简单的共享状态

例如在 `composables` 中定义 `useCounter`

```ts
// composables/useCounter.ts
// composables 下模块的同名导出将被自动按需引入
export const useCounter = useState('counter', () => 100)
```

`useState` 的第一参数为 `key`，第二参数为初始化的工厂函数

此时在 `index` 页面中可以直接使用 `useCounter`

```html
<!-- pages/index.vue -->
<script lang="ts" setup>
    const conuter = useCounter() // 这是按需自动引入的
</script>

<template>
    <div> <!-- 顶层的 div 包裹是必需的，不然跳转会丢失状态 -->
        <div @click="conuter++">{{ conuter }}</div>
        <NuxtLink to="/home">to home</NuxtLink>
    </div>
</template>
```

`home` 页面中也可以直接使用

```html
<!-- pages/home.vue -->
<script lang="ts" setup>
	const conuter = useCounter()
</script>

<template>
	<div @click="conuter++">{{ conuter }}</div>
</template>
```

你会发现两个页面的状态是共享的 👍