# 模块自动加载

## 仓库

模块自动加载插件 `npm` 包已实现，具体可见该仓库 👉 [vite-plugin-use-modules](https://github.com/dishait/vite-plugin-use-modules)。

<br />
<br />

## 原理

### [Glob 导入](https://cn.vitejs.dev/guide/features.html#glob-import)

在 `vite` 中有个非常好用的功能叫做 [Glob 导入](https://cn.vitejs.dev/guide/features.html#glob-import)。

例如你可以通过下边的方式自动引入 `src/modules` 下的所有 `js` 模块

```js
const modules = import.meta.globEager(
	'/src/modules/**/*.js'
)

console.log(modules) // 将以对象的方式输出到前端控制台
```

![Glob 导入](/vite/globEager.gif)

<br />
<br />

### 自动注册

根据上边的原理，我们就可以自动注册 `vue` 模块

例如注册 `pinia`

<CodeGroup>
  <CodeGroupItem title="npm" active>

```shell
npm i pinia -D
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```shell
yarn add pinia -D
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

```shell
pnpm add pinia -D
```

  </CodeGroupItem>

</CodeGroup>

然后创建模块 `src/modules/pinia.js`

```js
// src/modules/pinia.js
import { createPinia } from 'pinia'

export default app => app.use(createPinia())
```

然后在 `src/main.js` 下书写以下代码

```js
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

// 引入所有模块
const modules = import.meta.globEager(
	'/src/modules/**/*.js'
)
// 安装插件
Object.values(modules).forEach(module => {
	if (typeof module.default === 'function') {
		module.default(app)
	}
})

app.mount('#app')
```

以上就算自动注册 `pinia` 成功了，可以创建 `src/stores/counter.js` 验证一下

```js
// src/stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
	state() {
		return {
			counter: 0
		}
	},
	actions: {
		inc() {
			this.counter++
		}
	}
})
```

最后就可以在 `src/App.vue` 中使用了

```html
<script setup>
	import { useCounterStore } from './stores/counter'

	const store = useCounterStore()
</script>

<template>
	<div @click="store.inc()">{{ store.counter }}</div>
</template>
```

![自动注册](/vite/autoUse.gif)

<br />
<br />

### [虚拟模块](https://cn.vitejs.dev/guide/api-plugin.html#importing-a-virtual-file)

我们都知道 `vite` 插件里有个非常好用的虚拟文件或者虚拟模块功能

例如我们可以创建一个 `plugins/foo.js` 插件

```js
// plugins/foo.js
// 虚拟模块 id
const virtualModuleId = 'msg'
// 处理之后的虚拟模块 id
const resolvedVirtualModuleId = '\0' + virtualModuleId
// 虚拟模块代码
const code = `export default 100`

export default {
	name: 'foo',
	resolveId(id) {
		if (id === virtualModuleId) {
			return resolvedVirtualModuleId
		}
	},
	load(id) {
		if (id === resolvedVirtualModuleId) {
			return code
		}
	}
}
```

然后我们需要注册该插件

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import foo from './plugins/foo'

export default defineConfig({
	plugins: [vue(), foo]
})
```

最后就可以在前端里引入该虚拟模块了，例如 `src/main.js` 中

```js
// ...
import msg from 'msg'

console.log(msg) // 将在前端控制台输出 100
// ...
```

![虚拟模块](/vite/virtualModule.gif)

<br />
<br />
<br />

## 实现

同理，我们也可以创建携带 [Glob 导入](https://cn.vitejs.dev/guide/features.html#glob-import) 实现自动注册 `vue` 模块的代码

首先创建 `plugins/use-modules.js` 插件

```js
export default () => {
	const virtualModuleId = 'virtual:modules'
	const resolvedVirtualModuleId = '\0' + virtualModuleId

	const code = `
export const modules = import.meta.globEager(
    '/src/modules/**/*.js'
)

export const useModules = app => {
    Object.values(modules).forEach(module => {
        if (typeof module.default === 'function') {
            module.default(app)
        }
    })
}`

	return {
		name: 'vite-plugin-use-modules',
		resolveId(id) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId
			}
		},
		load(id) {
			if (id === resolvedVirtualModuleId) {
				return code
			}
		}
	}
}
```

然后注册一下插件

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Modules from './plugins/use-modules'

export default defineConfig({
	plugins: [vue(), Modules()]
})
```

最后就可以在 `main.js` 中愉快的使用模块自动加载了

```js
import App from './App.vue'
import { createApp } from 'vue'
import { useModules } from 'virtual:modules'

const app = createApp(App)

useModules(app)

app.mount('#app')
```

![实现](/vite/useModules.gif)
