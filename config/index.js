'use strict'

const path = require('path')

module.exports = {
  dev: { // 开发环境配置
    index: path.resolve(__dirname, '../public/index.html'), // index.html模板位置
    assetsSubDirectory: 'static', // 资源文件编译后存放的文件夹名称
    assetsPublicPath: '/', // 公共路径
    host: 'localhost', // 域名
    port: 8080, // 端口号
    autoOpenBrowser: true, // 自动打开浏览器
    proxyTable: {}, // 代理相关
  },
  build: { // 生产环境配置
    index: path.resolve(__dirname, '../public/index.html'), // index.html模板位置
    assetsRoot: path.resolve(__dirname, '../dist'), // 编译后的文件存放根路径
    assetsSubDirectory: 'static', // 资源文件编译后存放的文件夹名称
    assetsPublicPath: '/', // 公共路径
    productionGzip:true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,
  }
}