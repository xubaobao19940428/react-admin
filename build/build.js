'use strict'

const ora = require('ora');
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf');
const spinner = ora('编译中...\n').start();
webpack(webpackConfig, function (err, stats) {
  if (err) {
    spinner.fail("编译失败");
    console.log(err);
    return;
  }
  spinner.succeed('编译已结束. \n');

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
  console.log(chalk.cyan('  编译成功！\n'))
  console.log(chalk.yellow(
    '  提示: 编译后的文件可以上传并且部署到服务器\n' +
    '  通过file:// 打开index.html不会起作用.\n'
  ))
})