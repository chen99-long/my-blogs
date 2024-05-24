import { defineConfig } from 'vitepress'

const logo = "/img/logo.png"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "陈龙的个人博客",
  description: "一名有趣的前端工程师，喜欢研究，喜欢分享，欢迎交朋友！",
  head: [
    ['link', { rel: 'icon', href: logo }]
  ],
  themeConfig: {
    logo,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '测试1', link: '/' },
      { text: '测试2', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chen99-long' }
    ]
  }
})
