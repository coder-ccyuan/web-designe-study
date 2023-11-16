import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import Message from "@/pages/Message.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";

const router = new VueRouter({
    mode:"history",//工作模式，hash模式 url中有 /#/,history 模式没有
    routes: [
        {
            path: '/about',
            component: About,
            meta:{isAuth:true,title:'about'},//路由源信息，在路由守卫中可以使用
            children: [//path 参数不要有/
                {
                    path: 'message', component: Message,
                    beforeEnter:(to,from,next)=>{//独享路由守卫
                        console.log(to,from)
                        next()
                    },
                    children: [
                        {
                            path: 'detail',
                            component: Detail,
                            //props第一种写法 可以以k-v的方式传给detail组件，但数据时写死的
                            // props:{a:1,b:2}

                            //props第二种写法，props为true时 可以把detail组件搜到的params参数，以props传给detail
                            // props:true

                            //props第三种写法，值为函数
                            props($route){
                                return {id: $route.query.id,value:$route.query.value}
                            },

                        }
                    ]
                },
                {path: 'news', component: News}
                // {name: xiaoxi,path:'news/:title',component:News}//  /:是占位符
            ]
        },
        {path: '/home', component: Home}
    ]
})
//全局前置路由守卫，路由切换前调用
//作用：鉴权
router.beforeEach((to,from,next)=>{
    // console.log(to,from)
    // if(to.meta.isAuth){//是否鉴权
    //     next()//调用next()路由切换
    // }
next()
})
//全局后置路由守卫，路由切换后调用
router.afterEach((to,from)=>{
    // console.log(to,from)
    // document.title=to.meta.title
})
export default router