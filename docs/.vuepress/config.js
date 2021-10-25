module.exports = {
  title: 'Bottlemen',
  description: 'Hello World',
  base: '/blog-vuepress/',
  head: [
    // ['link', { rel: 'stylesheet', href: '/styles/index.styl' }],
    // ['script', { src: '/scripts/index.js' }],
    // ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  theme: '@org/default', // @vuepress/theme-default
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {text: 'HTML', link: '/html/'},
      {text: 'CSS', link: '/css/'},
      {text: 'LESS', link: '/less/'},
      {text: 'Javascript', link: '/javascript/'},
      {text: 'Issue', link: '/issue/'},
      {text: 'VS Code', link: '/vscode/'},
      {
        text: 'Plugins',
        items: [
          { text: 'ztextjs', link: '/plugins/ztextjs' },
        ]
      },
      {
        text: 'Etc',
        items: [
          { text: 'test', link: '/etc/test' },
          { text: 'shuffle', link: '/etc/shuffle' },
          { text: 'svg', link: '/etc/svg' },
        ]
      }
    ],
    sidebar: 'auto', // 사이드바 사용 여부. auto로 하면 content의 내용이 반영된다.
    smoothScroll: true, // 부드러운 스크롤 사용 여부
  },
  plugins: ['@vuepress/back-to-top']
}