console.log('项目的js入口文件！');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import app from './app.vue'
import router from './router.js'

console.log('导包完成！');




var vm = new Vue({
    el: '#app',
   render:c=>c(app),
   router,
})