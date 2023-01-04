---
sidebarDepth: 1
---

# 布局系统


## 基础

1. 在 `layouts` 下创建的布局都可以应用到页面上

例如，创建 `layouts/custom.vue` 布局

```html
<!-- layouts/custom.vue -->
<template>
    <!-- 根元素是必需的 -->
    <div>
        custom
        <slot /> <!-- 页面出口 -->
    </div>
</template>
```

紧接着就可以在页面中使用

例如，在 `/home` 页面中使用

```html
<!-- pages/home.vue -->
<template>
	<NuxtLayout name="custom"> home </NuxtLayout>
</template>
```

<br />
<br />


## 全局

有时我们需要全局的去应用布局，这时对 `app.vue` 进行修改

```html
<!-- app.vue -->
<template>
	header <!-- 这将应用到全局 -->
	<NuxtPage />
</template>
```

但是这是一个无法关闭的全局布局，这时可以删除 `app.vue`，同时创建 `layouts/default.vue` 布局

```html
<!-- layouts/default.vue -->
<template>
    <div>
        header
        <slot /> <!-- 页面出口 -->
    </div>
</template>
```

该布局也是全局应用的，但是可以手动关闭

例如 `/about` 页面不需要该布局

```html
<!-- pages/about.vue -->
<script setup lang="ts">
    definePageMeta({
        layout: false // 通过元信息的方式关闭 default 布局
    })
</script>

<template> about </template>
```

<br />

### 注意事项

如果你是使用组件的形式去应用其他布局，`default` 布局将与其他布局重合，那么需要手动关闭。

例如，在 `/home` 页面中

```html
<script setup lang="ts">
	definePageMeta({
		layout: false // 手动关闭 default 布局
	})
</script>

<template>
    <!-- 使用组件的方式应用 custom 布局 -->
	<NuxtLayout name="custom"> home </NuxtLayout>
</template>
```