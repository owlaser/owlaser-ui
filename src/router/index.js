import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由管理页面
// import Index from '../views/Index.vue'

const Home = () =>
  import ('../components/Home.vue')

const Index = () =>
  import ('../components/Index.vue')

const Scan = () =>
  import ('../components/scan/scan.vue')

const Repo = () =>
  import ('../components/repo/repo.vue')

const Result = () =>
  import ('../components/result/result.vue')

const Secur = () =>
  import ('../components/result/secur.vue')

const Detail = () =>
  import ('../components/result/detail.vue')

const Recycle = () =>
  import ('../components/repo/recycle.vue')

Vue.use(VueRouter)

// 路由管理
const routes = [
  { path: '/', component: Home },
  {
    path: '/index',
    component: Index,
    redirect: '/scan',
    children: [
      { path: '/scan', component: Scan },
      { path: '/repo', component: Repo },
      { path: '/secur', component: Secur },
      { path: '/result', component: Result },
      { path: '/detail', component: Detail },
      { path: '/recycle', component: Recycle }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router