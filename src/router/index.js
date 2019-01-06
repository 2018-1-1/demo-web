import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../view/home-page/home-page.vue'
import questionNairerequire from '../view/question-nairerequire/question-nairerequire.vue'
import userInfo from '../view/user-info/user-info.vue'
import factorAnalysis from '../view/factor-analysis/factor-analysis.vue'
import degree from '../view/schemas-microsoft-com/degree.vue'
import entryAgreement from '../view/entry-agreement/entry-agreement.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: "首页",
      component:homePage,
      children:[{
        path:'/questionNairerequire',
        name:'调查问卷',
        component:questionNairerequire
      },{
        path:'/userInfo',
        name:'个人信息页面',
        component:userInfo
      },{
        path:'/factorAnalysis',
        name:'因子分析',
        component:factorAnalysis
      },{
        path:'/degree',
        name:'课程达成度',
        component:degree
      },{
        path:'/entryAgreement',
        name:'个人信息录入',
        component:entryAgreement
      }]
    }
  ]
})
