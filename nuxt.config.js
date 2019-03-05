const pkg = require('./package')

module.exports = {
  mode: 'universal',
  
  /*
  ** Headers of the page
  */

  head: {
    title: "柏林日记的博客",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     
     

      
      
    ],
    script:[
      // { src:"/echarts.js" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'github-markdown-css/github-markdown.css',
    'highlight.js/styles/github-gist.css'
  ],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/ant-ui',
    {
      src:"@/plugins/vcharts",
      ssr: false 
    }
    ,
  ],


  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    vendor: ['axios']
  },
  // router: {
  //   middleware: 'stats'
  // }

}
