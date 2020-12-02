module.exports = {
  title: 'BottleMen',
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
      {
        text: 'Plugins',
        items: [
          { text: 'ztextjs', link: '/plugins/ztextjs' },
          { text: 'animejs', link: '/plugins/animejs' }
        ]
      },
      {text: 'Javascript', link: '/javascript/'},
      {text: 'Issue', link: '/issue/'},
      {text: 'CSS', link: '/css/'},
      {text: 'VS Code', link: '/vscode/'},
      {text: 'Equipment', link: '/equipment/'}
    ]
  },
  plugins: ['@vuepress/back-to-top']
}