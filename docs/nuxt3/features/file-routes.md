# 文件路由

## 基础

1. 在 `app.vue` 中加入 `NuxtPage`

```html
<template>
    <NuxtPage />
</template>
```

2. 在 `pages` 下的页面都将被自动路由

例如，`/` 页面只需创建 `pages/index.vue`

```html
<!-- pages/index.vue -->
<!-- 路由 / 将渲染 -->
<template> default </template>
```

又例如，`/home` 页面只需创建 `pages/home.vue`

```html
<!-- pages/home.vue -->
<!-- 路由 /home 将渲染 -->
<template> home </template>
```

再例如，`/about` 页面只需创建 `pages/about.vue`

```html
<!-- pages/about.vue -->
<!-- 路由 /about 将渲染 -->
<template> about </template>
```


<br />
<br />

## 嵌套

如果需要子路由，可以才用目录嵌套的方式

例如，`/user/details` 页面只需创建 `pages/user/details.vue`

```html
<!-- pages/user/details.vue -->
<!-- 路由 /user/details 将渲染 -->
<template> user/details </template>
```

当然你还可以创建 `pages/user.vue` 来做成嵌套路由

```html
<!-- pages/user.vue -->
<template>
    user
    <NuxtChild /> <!-- 子路由出口 -->
</template>
```

<br />
<br />

## 动态

如果需要动态路由，可以使用 `[param]` 的方式

例如，`/user/:id` 页面只需创建 `/pages/user/[id].vue`

同时可以通过 `$route.params.id` 获取到具体的参数

```html
<!-- pages/user/[id].vue -->
<!-- 路由 /user/:id 将渲染 -->
<template>
    user / {{ $route.params.id }}
</template>
```

当然父路由也可以是动态的

例如，`/user-:group/:id` 页面只需创建 `/pages/user-[group]/[id].vue`

同时可以通过 `$route.params.group` 获取到具体的参数

```html
<!-- /pages/user-[group]/[id].vue -->
<!-- 路由 /user-:group/:id 将渲染 -->
<template>
    user-{{ $route.params.group }} / {{ $route.params.id }}
</template>
```

<br />
<br />

## 导航

`NuxtLink` 可以用来导航

```html
<!-- app.vue -->
<template>
    <!-- 点击将跳转到 /about 页面 -->
    <NuxtLink to="/about"> to about </NuxtLink>
</template>
```

当然还可以跳转外链

```html
<!-- app.vue -->
<template>
    <!-- 点击将跳转到 百度 页面 -->
    <NuxtLink to="https://www.baidu.com/"> to baidu </NuxtLink>
</template>
```