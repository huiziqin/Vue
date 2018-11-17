console.log('项目的js入口文件！');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './app.vue'
import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
console.log('导包完成！');



var router = new VueRouter({
    routes:[
        {path:'/account', component: account},
        {path:'/goodlist', component: goodlist},
    ]
})

var vm = new Vue({
    el: '#app',
   render:c=>c(app),
   router,
})