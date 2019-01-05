import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../view/home-page/home-page.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: "首页",
      component:homePage
    }
  ]
})
