import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../view/home-page/home-page.vue'
import questionNairerequire from '../view/question-nairerequire/question-nairerequire.vue'
import userInfo from '../view/user-info/user-info.vue'
import factorAnalysis from '../view/factor-analysis/factor-analysis.vue'
import degree from '../view/schemas-microsoft-com/degree.vue'
import entryAgreement from '../view/entry-agreement/entry-agreement.vue'
import Login from '../view/login_page/Login.vue'
import talentAnalysis from '../view/talent-analysis/talent-analysis.vue'
import questionManage from '../view/question-manage/question-manage.vue'
import studentAnswers from '../view/student-answers/student-answers.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Login
    },
    {
      path: '/home',
      name: "首页",
      component: homePage,
      children: [{
        path: '/questionNairerequire',
        name: '调查问卷',
        component: questionNairerequire
      }, {
        path: '/userInfo',
        name: '个人信息页面',
        component: userInfo
      }, {
        path: '/factorAnalysis',
        name: '因子分析',
        component: factorAnalysis
      }, {
        path: '/degree',
        name: '课程达成度',
        component: degree
      }, {
        path: '/entryAgreement',
        name: '个人信息录入',
        component: entryAgreement
      }, {
        path: '/talentAnalysis',
        component: talentAnalysis
      }, {
        path: '/questionManage',
        name: '问卷管理',
        component: questionManage
      }, {
        path: '/studentAnswers',
        component: studentAnswers
      }]
    }
  ]
})