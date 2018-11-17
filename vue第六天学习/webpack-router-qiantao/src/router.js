
import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
import login from './main/subcom/login.vue'
import register from "./main/subcom/regster.vue"


// 创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/account', component: account,
            children:[
                {path:'login',component: login},
                {path:'register',component: register},
            ]
        },
        {path:'/goodlist', component: goodlist},
    ]
})


// 把路由对象暴露出去
export default router