import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login_page/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    }
  ]
})
Vue.use(Router)


