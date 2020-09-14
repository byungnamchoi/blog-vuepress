module.exports = {
  title: 'BottleMen',
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
        text: 'JS',
        items: [
          { text: 'ztextjs', link: '/javascript/ztextjs' },
          { text: 'animejs', link: '/javascript/animejs' }
        ]
      },
      {text: 'CSS', link: '/css/'},
      {text: 'VS Code', link: '/vscode/'}
    ]
  },
  plugins: ['@vuepress/back-to-top']
}