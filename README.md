# vue.js  基礎用法 & 實例

# vue-cli 安裝流程

$ npm install -g vue-cli  (第一次安裝才要，全域安裝vuecli)

切換要安裝的資料夾下 

$ vue init webpack my-project (用vue指令安裝你的資料結構 封包選用webpack)

$ cd my-project (切換到安裝資料夾下)

$ npm install  (將package.json下的模塊安裝進來)

$ npm run dev  (run)

## 如果有用到bootstrap 框架的話 webpack 一開始會看不懂

   所以要安裝 npm install sass-loader node-sass webpack --save-dev

   之後要是有改就去Git 找 sass-loader來看
   
# 另外會用到BS的話應該也會用到jQuery和popper，這時就有vue和jQuery混用的狀況
   
$ npm install --save jquery

$ npm install --save popper.js

接著到build/webpack.base.conf.js加入以下設定

// 最上方加入一個webpack
const webpack = require('webpack')
module.exports = {
  ...
  // 新增plugins
  
  plugins: [
    new webpack.ProvidePlugin({
        '$': "jquery",
        'jQuery': "jquery",
        'Popper': 'popper.js'
    })
  ],
	...
}

最後到src/main.js中把BootStrap載入

// 新增這兩行BootStrap的東西
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
