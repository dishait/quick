# 安装

## 基础

1. 创建 `package.json`，并补充以下信息 👇

```json
{
    "scripts": {
        "dev": "nuxi dev",
        "build": "nuxi build",
        "start": "nuxi build && node .output/server/index.mjs"
    },
    "devDependencies": {
        "nuxt3": "latest"
    }
}
```

2. 在根目录下创建 `app.vue`

```html
<!-- app.vue -->
<template>
    <div>Hello, World!!</div>
</template>
```

3. 安装依赖

<CodeGroup>
  <CodeGroupItem title="yarn" active>

```shell
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```shell
npm i
```

  </CodeGroupItem>

</CodeGroup>

4. 启动项目 (开发环境)

<CodeGroup>
  <CodeGroupItem title="yarn" active>

```shell
yarn dev
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```shell
npm run dev
```

  </CodeGroupItem>

</CodeGroup>

5. 打包项目

<CodeGroup>
  <CodeGroupItem title="yarn" active>

```shell
yarn build
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```shell
npm run build
```

  </CodeGroupItem>

</CodeGroup>

6. 启动项目 (生产环境)

<CodeGroup>
  <CodeGroupItem title="yarn" active>

```shell
yarn start
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```shell
npm run start
```

  </CodeGroupItem>

</CodeGroup>


<br />
<br />

## 类型声明

如果你想要开一个 `ts` 项目

请在根目录下创建 `tsconfig.json`，并补充 👇

```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

为了更好的类型提示，还需要在根目录下创建 `nuxt.config.ts`，并补充 👇

```ts
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
	typescript: {
		shim: false
	}
})
```

<br />
<br />

## 插件推荐

安装以下插件可以让你在 `vscode` 中有更友好的开发体验

- [Vue Language Features(Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

- [TypeScript Vue Plugin(Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) 