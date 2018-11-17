console.log('项目的js入口文件！');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//完全引入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)


//按需引入
import {Button, Toast,Search} from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Toast)
Vue.component(Search.name, Search);

import './lib/MUI/css/mui.css'


import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

import app from './app.vue'
import router from './router.js'

console.log('导包完成！');




var vm = new Vue({
    el: '#app',
   render:c=>c(app),
   router,
})