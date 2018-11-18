//入口文件
console.log("JS入口文件")

//导入vue相关
import Vue from 'vue'
import VueResource from 'vue-resource'    //导入vue-resource
Vue.use(VueResource)                      //安装vue-resource   然后就可以在每个组件中使用
                                        //全局配置 默认请求接口URL根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

import VueRouter from 'vue-router'        //1.1导入路由的包
Vue.use(VueRouter)                        //1.2安装路由模块
import router from './router.js'          //1.3导入自己的router.js路由模块


                                          //按需导入MintUI的组件
                                          // import {Header} from 'mint-ui';
                                          // Vue.component(Header.name, Header);//注册到vue中
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
                                          //导入MUI的样式
import './lib/MUI/css/mui.css'
import './lib/MUI/css/icons-extra.css'

                                          //导入组件
import app from './App.vue'               //导入根组件


import moment from 'moment'               //导入时间插件 用于格式化时间   
Vue.filter('dateFormat',
   function(dataStr,
      pattern="YYYY-MM-DD HH:mm:ss"){     //定义全局过滤器
   return moment(dataStr).format(pattern);
})



var vm = new Vue({
   el:'#app',                             //控制html页面 id为app的容器
   render: c=>c(app),                     //通过render函数渲染 名为app的组件
   router,                                //1.4挂载路由对象到vm实例
})