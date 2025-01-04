# 后台管理系统

本系统使用 vue3 框架框架, 使用 element-plus 作为组件库, 目的是为了简化后台开发，后续不断增加模块功能

## 框架

使用[vue3](https://v3.cn.vuejs.org/)作为框架, 版本为 `3.5.10`

## 组件库

使用[element-plus](https://element-plus.gitee.io/#/zh-CN)作为组件库, 版本为 `2.8.4`

## 样式

使用[tailwindcss](https://tailwindcss.com/)作为样式管理, 在 `tailwind.config.js` 中定义了样式

## 请求

使用[axios](https://axios-http.com/zh/docs/intro)作为请求库, 在 `src/apis/index.js` 中定义了请求方法

## 路由

使用[vue-router](https://router.vuejs.org/)作为路由管理,在 `router` 文件夹下已定义一个 `index.js` 例子路由，并在 `index.vue` 中引入使用

## 状态管理

使用[pinia](https://pinia.vuejs.org/)作为项目仓库,使用 Option 语法, 在 `store` 文件夹下已定义一个 `useCounterStore` 例子仓库，并在 `index.vue` 中引入使用

## 图标

图标库使用[IconPark](https://iconpark.oceanengine.com/official),[npm 链接](https://www.npmjs.com/package/@icon-park/vue-next),[使用指南](https://bytedance.larkoffice.com/wiki/wikcnrOVHCJQ4V3a7mDvmLjrePf)，并在 `index.vue` 中使用

## 多语言

多语言使用 [vue-i18n](https://kazupon.github.io/vue-i18n/)，在 `login.vue` 中使用，在 `assets/languages` 有语言包,并且 `element-plus` 已经使用
