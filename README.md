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

$ npm install --save popper.js  //這裡是有用到BS的插件才裝

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

}

最後到src/main.js中把BootStrap載入

// 新增這兩行BootStrap的東西

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

插入後JQuery才會有動作


## Vue組件化

用vue框架主要是管理和重用性，所以在組件上的設計很多。

在components資料夾新增零件(ex:footer.vue)，做好後直接在主框架App.vue導入

<script>要import 進來你自己創的零件
	
Components自己要加零件

<template>
	
<footers></footers> or <footers/>

</template>

<script>
	
import footers from "./components/footers";


export default {


  name: "App",
  
  
  data() {
  
    return {};
    
  },
  
  
  components: { 
  
    footers,
    
    carousel
    
  }
  
};


</script>

<style lang="scss">
	
@import "~bootstrap/scss/bootstrap";

</style>

如果有導入SASS的話，相關方法看前面

在最外層APP.vue導入，內層的template不用在導一次

導入之後只有樣式，要使用裡面的jQuery要再vue裡混用。

在vue的入口js文件: src/main.js

// 使用Bootstrap

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

到這裡 有使用BS的CSS 元件就可以動作。


# vue-router (和做組件很像)

首先先在組件(components資料夾新增零件)，再導入零件

Import 文件名稱 from “@components/文件名稱”

記得要寫 Vue.use(Router)

import Vue from 'vue'

import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({

routes: [

{

path: '/',  //路徑名稱

name: 'HelloWorld',  //檔案名稱

component: HelloWorld  //零件名稱

},

{

path: '/hello2',

name: 'Hello2',

component: Hello2

},

{

path: '*',     //所有其他跟上面不一樣的路徑

redirect: '/'  //都回到 '/' 這個主路徑

}

]

})

