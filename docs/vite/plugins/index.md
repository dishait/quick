# 起步

## 创建项目

首先需要创建一个 `vite` 项目

<CodeGroup>
  <CodeGroupItem title="npm" active>

```shell
npm create vite
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```shell
yarn create vite
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

```shell
pnpm create vite
```

  </CodeGroupItem>

</CodeGroup>

<br />
<br />

## 进入项目

创建项目之后是在项目之外，我们需要进入到项目中。

:::tip
请将以下的 **project** 替换为你的项目名称。
:::

```shell
cd project
```

或者用 `vscode` 打开

```shell
code project
```

<br />
<br />

## 安装依赖

创建完的 `vite` 项目是未安装 `node_modules` 依赖的，所以需要安装依赖

<CodeGroup>
  <CodeGroupItem title="npm" active>

```shell
npm i
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```shell
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

```shell
pnpm i
```

  </CodeGroupItem>

</CodeGroup>

<br />
<br />

## 运行项目

最后可以运行下项目看看有没有问题

<CodeGroup>
  <CodeGroupItem title="npm" active>

```shell
npm run dev
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```shell
yarn dev
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

```shell
pnpm dev
```

  </CodeGroupItem>

</CodeGroup>

<br />
<br />

![起步演示](/vite/start.gif)
