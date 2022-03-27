import home from './../views/home/index.vue'
import mine from './../views/mine/mine.vue'
import {createRouter,createWebHashHistory,createWebHistory,createMemoryHistory} from 'vue-router'

const routes=[
    {
    path:'/home',
    name:'home',
    component:home,
    mate:{
        title:'',
        keepAlive:false
    }
},
{
    path:'/mine',
    name:'mine',
    component:mine,
    mate:{
        title:'',
        keepAlive:false
    }
}
]

const router= createRouter({
    history:createWebHistory(),
    routes
})
export default router