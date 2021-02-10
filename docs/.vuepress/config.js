module.exports = {
  title: 'Bottlemen',
  description: 'Hello World',
  base: '/blog-vuepress/',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }],
  //   ['link', { rel: 'manifest', href: '/manifest.json' }]
  // ],
  theme: '@org/default', // @vuepress/theme-default
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {text: 'HTML', link: '/html/'},
      {text: 'CSS', link: '/css/'},
      {text: 'Javascript', link: '/javascript/'},
      {
        text: 'Plugins',
        items: [
          { text: 'ztextjs', link: '/plugins/ztextjs' },
          { text: 'animejs', link: '/plugins/animejs' }
        ]
      },
      {text: 'Issue', link: '/issue/'},
      {text: 'VS Code', link: '/vscode/'}
    ]
  },
  plugins: ['@vuepress/back-to-top']
}