module.exports = {
  title: 'VuePress 시작!',
  description: 'Hello World',
  base: '/vuepress-blog/',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }],
  //   ['link', { rel: 'manifest', href: '/manifest.json' }]
  // ],
  theme: '@org/default', // @vuepress/theme-default
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'About',
        items: [
          { text: 'About Me', link: '/about/me' },
          { text: 'About Blog', link: '/about/blog' }
        ]
      }
    ],
    footer: {
      copyright: [
        {
          text: 'Copyright © 2020',
          link: '',
        }
      ],
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress'
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress'
        }
      ]
    }
  },
  plugins: ['@vuepress/back-to-top']
}