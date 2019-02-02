<template>
   <div class="box">
     <div class="tab">
       <div class="tab-menu">
         <span :class="{selected:index === num}" @click="toggleTab(item.toggleTab,index)" v-for="(item,index) of tabs" :key="index">{{item.name}}</span>
       </div>
       <div class="tab-box">
         <!--学生登录开始-->
         <student-login :is="currentTab" keep-alive></student-login>
         <!--导师登录开始-->
         <!--教务登录开始-->
       </div>
     </div>
   </div>
</template>

<script>
import StudentLogin from './components/StudentLogin'
import TeacherLogin from './components/TeacherLogin'
import ManageLogin from './components/ManageLogin'
export default {
  name: "Login",
  components: {StudentLogin,TeacherLogin,ManageLogin},
  data() {
    return {
      currentTab: 'StudentLogin',
      num: 0,
      tabs: [
      {
        name: '登陆',
        toggleTab: 'StudentLogin'
      }
      // ,
      // {
      //   name: '导师登陆',
      //   toggleTab: 'TeacherLogin'
      // },
      // {
      //   name: '管理老师',
      //   toggleTab: 'ManageLogin'
      // }
      ]
    }
  },
  methods: {
    toggleTab (tab, index) {
      this.currentTab = tab;  // tab 为当前触发标签页的组件名
      this.num = index;
    }
  }
}
</script>

<style scoped lang="stylus">
.box {
  width: 100%;
  height: 1350px;
  background: url("~@/assets/img/bg.jpg") 0 0/cover no-repeat;
}
.box .tab {
  width: 410px;
  position: relative;
  top: 80px;
  margin: 0px auto;
  text-align: center;
  padding: 1px;
}
.tab .tab-menu {
  width: 100%;
  float: left;
  position: absolute;
  z-index: 1;

}

.tab .tab-menu span {
  float: left;
  width: 33%;
  height: 50px;
  line-height: 50px;
  border-bottom: 0px;
  cursor: pointer;
  text-align: center;
  margin: 0 1px 0 0;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 16px;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    background-color: #FFFFFF;
    color: #000000;
    font-size: 16px;
    opacity: 0.8;

  }
}
.tab .tab-menu .selected {
  cursor: pointer;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 16px;
  opacity: 0.8;
}
.tab .tab-box {
  width: 410px;
  clear: both;
  top: 50px;
  position: relative; 
  background-color: #FFFFFF;
  color: #000000;
  font-size: 16px;
  opacity: 0.8;
}
</style>
