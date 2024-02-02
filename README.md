# Rollup打包vue2组件
### 拉取依赖
npm i
### 添加组件
在/scr/components创建添加组件
### 打包
npm run build
### 全局引用
```js
import component from "dist/esm/index.js"
vue.use(component)
```
```html
<template>
    <div>
<exciseYourComponentName></exciseYourComponentName>
    </div>
</template>
```
### 局部引用
```js
<template>
    <div>
<yourComponentName></yourComponentName>
    </div>
</template>
import {yourComponentName} from "dist/esm/index.js"
export default{
    components:{
        yourComponentName
    }
}
```
