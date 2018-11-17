//是项目js的入口文件
//1、导入jquery
//import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'

//使用import语法 导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
//webpack默认只能打包js类型文件  无法处理非js文件
//需要安装第三方加载器 来处理css
// npm i style-loader css-loader -D
//在webpack.config.js 新增一个配置节点 module 它是一个对象
// rules属性数组中 存放了第三方文件的 匹配和处理规则

// 注意：webpack 处理第三方文件类型的过程
// 1.发现这个文件不是js  -> 配置文件 找对应第三方loader 规则
// 2.如果找到对应规则  就会调用对应loader 处理这种文件类型
// 3.在调用loader时，从后往前调用
// 4.当最后一个loader调用完毕  会把处理结果 直接交给webpack 进行打包合并  最终输出到bundle.js


$(function(){
    $('li:odd').css('backgroundColor','#00ffff')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})
