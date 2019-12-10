import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import Welcome from '@/components/welcome.vue'
import Repo from '@/components/Repo'
import Recycle from '@/components/Recycle'

Vue.use(VueRouter)

const routes = [
  {

    path: '/',
    name: 'home',
    component: Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component:Welcome
      },
      {
        path:'/Repo',
        component:Repo

      },
      {
        path:'/Recycle',
        component:Recycle

      }
      
      

    ]
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]

const router = new VueRouter({
  routes
})

export default router
