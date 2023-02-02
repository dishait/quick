---
sidebarDepth: 1
---

# 自动引入

## API

在 `composables` 目录下模块的同名导出会被自动引入

例如，`composables` 下有个 `useFoo` 模块

```ts
// composables/useFoo.ts
export const useFoo = 100
```

```html
<script setup lang="ts">
// useFoo 将被按需自动引入
console.log(useFoo) 
</script>
```

<br />

### 嵌套

如果 `API` 嵌套在目录内，可以通过 `index` 模块导出

例如，`composables/useDark` 下有个 `index` 模块

```ts
// composables/useDark/index.ts
export const useDark = 'yes'
```

```html
<script setup lang="ts">
// useDark 将被按需自动引入
console.log(useDark) 
</script>
```

<br />

### 内置

`vue` 和 `nuxt3` 本身的 `api` 也支持按需自动引入

```html
<script setup lang="ts">
// ref 将被按需自动引入
const counter = ref(1)
</script>
```


<br />
<br />


## 组件

在 `components` 目录下的组件将被自动引入

例如，`components` 下有个 `bar` 组件

```html
<!-- components/bar.vue -->
<template>
    Bar
</template>
```

```html
<!-- app.vue -->
<template>
    Hello, World!
    <Bar /> <!-- bar 组件将被按需自动引入并注册 -->
</template>
```

当然小写也可以

```html
<!-- app.vue -->
<template>
    Hello, World!
    <bar /> <!-- bar 组件将被按需自动引入并注册 -->
</template>
```

<br />

### 嵌套

如果组件嵌套在目录内，可以用驼峰式

例如，`components/user` 下有个 `avatar` 组件

```html
<!-- components/user/avatar.vue -->
<template>
    user avatar
</template>
```

```html
<!-- app.vue -->
<template>
    Hello, World!
    <UserAvatar /> <!-- avatar 组件将被按需自动引入并注册 -->
</template>
```