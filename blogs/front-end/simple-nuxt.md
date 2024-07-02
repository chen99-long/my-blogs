# 三分钟教你速成Nuxt3

## 什么是 Nuxt?
Nuxt.js 是一个开源的高级框架，基于 Vue.js 构建，旨在创建客户端和服务器端渲染的应用程序。通过简化开发流程并结合 Vue 的强大功能，Nuxt.js 提供了一个坚实的基础，使得开发复杂、高性能的 web 应用变得更加容易。
官方网站：[Nuxt3官网](https://nuxt.com/)
**(一定要进入英文官方网站，因为中文网只更新到nuxt2)**
## 什么是SSR？
SSR（服务器端渲染）是一种网页渲染方法，其中网页的初始HTML内容是由服务器生成并发送到客户端（浏览器），而不是在客户端通过JavaScript完全生成。这种方法在现代Web开发中非常流行，特别是在使用JavaScript框架（如React、Vue或Angular）构建单页应用（SPA）时。


## Nuxt/SSR带来的优势：
**1. 改善首次加载性能：**
* 由于HTML是预先生成的，用户可以更快地看到第一屏的内容，不需要等待所有的JavaScript都下载并执行完毕。这对于提升用户体验和保持用户的注意力非常有帮助。

**2. 搜索引擎优化（SEO）：**
* 搜索引擎爬虫在索引网站内容时，能够立即读取服务器渲染的完整HTML。这使得服务器端渲染的页面比纯客户端渲染的页面更易于被搜索引擎优化，有利于提高页面的搜索排名。

**3. 社交媒体共享优化：**
* 当分享网页链接到社交媒体时，如Facebook或Twitter，这些平台通常会抓取网页的元数据生成链接预览。服务器端渲染的页面直接提供了这些元数据，使链接预览更加丰富和吸引人。

## Nuxt使用教程
* Nuxt框架遵循约定大于配置的设计原则，减少了决策疲劳和配置的复杂性，因此，Nuxt的学习成本很低，掌握Vue全家桶和 Nuxt的约定相当于掌握了 Nuxt
* Nuxt2即将停止维护，因此直接入手 Nuxt3就行
![nuxt官网顶部](/img/nuxt.png)
* 根据官方步骤，运行
``` bash
npx nuxi@latest init <project-name>
```
* Vue路由：在nuxt的约定中，pages目录下的 vue组件会自动生成路由，NuxtLink表示 RouterLink,NuxtPage表示 RouterView,中间件可用于路由守卫
* 全局中间件：在 nuxt的约定中，在middleware目录下创建一个xxx.global.ts文件，导出一个defineNuxtRouteMiddleware函数，里面有to和from两个参数，则自动设置为全局中间件。router.push在 Nuxt中是navigateTo('/xx')pages
* seo优化：可以使用 Title，Description等标签，但是建议使用useSeoMeta钩子
* auto-import:Nuxt自带自动导入功能，在 Nuxt的约定中，只需要在nuxt.config.ts中把组件库的包名写到modules中就行，nuxt带有约定的文件夹里的内容都能自动导入
* layouts布局：layouts目录下可以放布局组件，通过 NuxtLayout组件嵌套页面内容，并把 name设置为创建的组件,布局组件中需要放一个slot插槽
* 注意服务端渲染的特性，没有Bom API，不能使用 localstorage,存储token令牌尽量用cookie
* server文件夹：可以创建api,routes以及middleware目录，可以连接数据库写一些接口
* 如果通过axios请求，那么会在前端请求，会出现seo问题，并且接口会调用两次，因为在服务端也会请求一次，应该用useFetch方法
* NuxtPage组件可以放一个keepalive属性来缓存请求，防止每次切换路由的时候都重新请求参数，可以配置缓存时间/次数
* proxy文件夹：可通过nitro配置前端代理，规则与写法和平时写的前端代理一样
* content文件夹：可以放置md文件，在页面中通过 ContentDoc组件，并把path属性设为md文件的路由，就可以回显这些md文件
* 部署：直接打包生成的是一个node服务，也可以通过generate命令打包出静态站点