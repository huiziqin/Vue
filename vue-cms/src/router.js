import VueRouter from 'vue-router' //导入路由的包

//导入对应的路由组件
import HomeContainer    from './components/tabbar/HomeContainer.vue'
import MemberContainer  from './components/tabbar/MemberContainer.vue'
import SearchContainer  from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList         from './components/news/NewsList.vue'
import NewsInfo         from './components/news/NewsInfo.vue'

//路由对象
var router = new VueRouter({
    routes: [//配置路由规则 path:路径,component:对应组件
        {path:'/',         redirect:'/home'           },
        {path:'/home',     component: HomeContainer   },
        {path:'/memver',   component: MemberContainer },
        {path:'/search',   component: SearchContainer },
        {path:'/shopcar',  component: ShopcarContainer},
        {path:'/home/newslist',  component: NewsList  },
        {path:'/home/newsinfo/:id',component: NewsInfo},
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类   默认的是router-link-active
})

//将路由对象暴露出去
export default router