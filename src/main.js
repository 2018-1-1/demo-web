// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'font-awesome/scss/font-awesome.scss'
import 'font-awesome/css/font-awesome.css'
Vue.config.productionTip = false
import XLSX from 'xlsx'
import {post,put,patch,get} from  './utils/http'
import {setCookie,getCookie,delCookie} from '../src/utils/cookie'


Vue.prototype.xlsx=XLSX
Vue.use(ElementUI);
Vue.prototype.post=post
Vue.prototype.get=get
Vue.prototype.put=put
Vue.prototype.patch=patch

Vue.prototype.setCookie=setCookie
Vue.prototype.getCookie=getCookie
Vue.prototype.delCookie=delCookie



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
