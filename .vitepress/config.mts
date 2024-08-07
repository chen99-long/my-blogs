import { defineConfig } from 'vitepress'
import { set_sidebar } from '../node-utils/auto-set-nav-item.mjs'

const logo = "/img/logo.png"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "陈龙的个人博客",
  description: "一名有趣的前端工程师，喜欢研究，喜欢分享，欢迎交朋友！",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: logo }]
  ],
  themeConfig: {
    logo,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '每日博客', items: set_sidebar("blogs/everyday-blogs")
      },
      {
        text: '技术积累', items: [
          {
            text: "本地命令行工具libreoffice 完成docx转pdf", link: "/blogs/technology/libreoffice.md"
          },
          {
            text:"docker镜像源最新解决方案",link:"/blogs/technology/dockerpull.md"
          }
        ]
      },
      {
        text: '前端', items: [
          { text: '闭包和内存泄漏', link: '/blogs/front-end/memory-leak' },
          { text: '三分钟教你速成Nuxt3', link: '/blogs/front-end/simple-nuxt' },
        ]
      },
      {
        text: 'chrome插件', items: [

        ]
      },
      {
        text: '数据结构与算法', items: [
          { text: '二分查找', link: '/blogs/data-structures/binary-search' }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Examples2',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chen99-long/my-blogs' }
    ]
  }
})
