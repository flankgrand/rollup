# Rollup打包vue2组件
### 拉去依赖
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
<yourComponentName></yourComponentName>
import {yourComponentName} from "dist/esm/index.js"
export default{
    components:{
        yourComponentName
    }
}
```