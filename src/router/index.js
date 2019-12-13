import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'
import Welcome from '@/components/welcome.vue'
import Repo from '@/components/Repo'
import Recycle from '@/components/Recycle'
import Homepage from '@/components/Homepage'

Vue.use(VueRouter)

const routes = [
  {

    path: '/wellcome',
    name: 'home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/Repo',
        component: Repo

      },
      {
        path: '/Recycle',
        component: Recycle

      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '*',
    name: 'homepage',
    component: Homepage
  }
]

const router = new VueRouter({
  routes
})

export default router
