const path = require("path")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.conf")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const config = require('../config')
module.exports = merge(baseWebpackConfig, {
    mode: "development", // 两个参数: production 和 development
    plugins: [
        new HtmlWebpackPlugin({
            template: config.build.index,
            inject: "body", // script 标签位于 body 底部
            minify: {
                html5: true
            },
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        contentBase: path.resolve(__dirname, "../public"),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        open: config.dev.autoOpenBrowser,
        proxy: config.dev.proxyTable
    }
})