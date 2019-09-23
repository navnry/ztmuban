const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://moban.zhitouweilai.com/api.php',
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  }
}
