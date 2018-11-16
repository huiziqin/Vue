console.log('项目的js入口文件！');
//如何在webpack构建的项目中，使用Vue进行开发

//注意：在webpack中，使用mport Vue from 'vue' 导入的vue构造函数 功能不完整，
//只提供了runtime-only的方式  并没有提供 像网页中那样使用方式
import Vue from 'vue'    //得到一个Vue 的构造函数

//import Vue from '../node_modules/vue/dist/vue.js' 

//回顾 包的查找规则：
// 1.找 项目根目录下node_module的文件件
// 2.在node_module 中 根据包名  找对应vue文件夹
// 3.在vue文件夹 找package.json的包配置文件
// 4.在package.json文件中，查找一个 main属性[main属性 指定了这个包在被加载时 的入口文件]

//创建一个vue实例
var vm = new Vue({
    el:'#app',
    data:{
        msg:'112',
        time: new Date(),
    },
})