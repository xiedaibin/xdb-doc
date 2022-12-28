import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'XDB Blog',
  description: '这是xdb的blog',
  base: '/',
  dest: "./dist",
  public: "./wwwroot",
  port: 8088,
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/favicon.ico' }],
  ],

  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
  }),

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'XDB的博客',
      description: '这是xdb的blog',
    },
    '/en/': {
      lang: 'en-US',
      title: 'XDB\'S Blog',
      description: 'This is xdb\'s blog',
    },
    
  },
})