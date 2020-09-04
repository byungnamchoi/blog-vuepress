module.exports = {
  title: 'VuePress 시작!',
  description: 'Hello World',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
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
    ]
  },
  plugins: ['@vuepress/back-to-top']
}