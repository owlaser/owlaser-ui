import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 引入elementUI
import './plugins/element.js'

// 引入全局样式表
import './assets/css/global.css'

// 引入Vuex
import Vuex from 'vuex'
import store from './plugins/store'

Vue.use(Vuex)

// 挂载axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 全局注册组件
Vue.component('my-footer', () =>
  import ('./components/common/footer.vue'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')