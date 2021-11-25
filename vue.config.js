const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.symlinks(true)
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('static', resolve('src/static'))
      .set('store', resolve('src/store'))
  },
  lintOnSave: process.env.NODE_ENV === 'development', // 本地开发时开启eslint规范
  devServer: {
    port: 8080, //端口号
    proxy: {
      '/admin': {
        // target: 'http://192.168.24.62:8084', // tom
        // target: 'http://192.168.24.58:8084',
        target: 'http://192.168.133.183:8084',
        // target: 'http://192.168.24.51:8080', //目标地址
        // target: 'http://192.168.24.70:8084', //edwin
        // target: 'http://192.168.26.75:8084', //lili
        // target: 'http://192.168.24.78:8084', // mogo
        // target: 'http://192.168.24.59:8084', // aiden
        // target: 'http://192.168.24.56:8084', // 郭锐
        // target: 'http://192.168.24.70:8084', //目标地址
        // target: 'http://192.168.24.61:8084', // 郑junpeng
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/admin': '' //这里重写路径
        }
      }
    }
  }
}