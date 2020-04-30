const path = require('path');
const config=require('../config')
const utils = require('./utils')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
  }
module.exports = {
    entry: {
    // 入口文件
    app: "./src/index.js",
      framework: ["react", "react-dom"] // 抽出框架代码
    },
    output: {
      // 输出文件到 dist 文件夹
      filename: "[name].js",
      path: config.build.assetsRoot,
      publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          loader: "babel-loader",
          include: path.resolve(__dirname, "../src"),
          exclude: /node_modules/
        },
        
        {
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            include: [resolve('../src/assets/svg')],
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            exclude: [resolve('../src/img')],
            options: {
              limit: 1200,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          },
      ]
    },
      resolve: {
      extensions: [".js", ".jsx", ".json"], // 表示这几个文件的后缀名可以省略不写
      alias: {
        // 表示别名
        "@": path.resolve(__dirname, "../src") // @ 就表示项目的 src 这层路径
      }
    }
  }