module.exports = {
  title: 'VuePress',
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
        text: 'Study',
        items: [
          { text: 'Study Me', link: '/study/me' },
          { text: 'Study Blog', link: '/study/blog' },
          { text: 'Study Ztextjs', link: '/study/ztextjs' },
          { text: 'Study Animejs', link: '/study/animejs' }
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