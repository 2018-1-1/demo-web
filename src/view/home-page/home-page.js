import {
  Message
} from 'element-ui'
export const homePage = {
  data() {
    return {
      // isCollapse:false
      dialogFormVisible:false,
      userId: localStorage.getItem('userId'),
      roleId:localStorage.getItem('roleId'),
      centerDialogVisible: false,
      menus: [],
      // TODO 对于密码进行限制，只能为数字和字母
      form:{
        pwd:null,
        newPwd:null,
        newPwdAgain:null
      }
    }
  },
  methods: {
    modifyPwdAction(){
      if(this.form.pwd != null && this.form.newPwd === this.form.newPwdAgain && this.form.newPwd.length>=6){
        this.dialogFormVisible=false
        let body={
          userId:localStorage.getItem('userId'),
          oldPassword:this.form.pwd,
          newPassword:this.form.newPwd
        }
        this.post('/api/user/rePassword',body).then(res=>{
          this.dialogFormVisible=false
          Message({
            showClose: true,
            message: res.msg,
            type: 'success',
            duration: 1000
          })
        }).catch(error=>{
          console.log(error)
        })
      }else{
        Message({
          showClose: true,
          message: "新密码不得少于6位!或两个不相等",
          type: 'error',
          duration: 1000
        })
      }
    },
    modifyPwd(){
      this.dialogFormVisible=true
    },
    userInfo(){
      this.$router.push({
        path:'/userInfo'
      })
      this.centerDialogVisible=false
    },
    exit() {
      localStorage.removeItem('userId')
      localStorage.removeItem('jobId')
      localStorage.removeItem('token')
      localStorage.removeItem('roleId')
      location.reload()
      this.$router.push({
        path: "/"
      })
    },
    popover() {
      if (this.centerDialogVisible == false) {
        this.centerDialogVisible = true
      } else {
        this.centerDialogVisible = false
      }
    },
    pageActions() {
      if (this.isCollapse == true) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    },
    reStructMenueByRole() {
      if (this.roleId == 1) {
        this.menus = [{
          name: '问卷管理',
          path: '/questionManage',
          icon: "fa fa-braille"
        }, {
          name: '因子分析',
          path: '/factorAnalysis',
          icon: "fa fa-bar-chart"
        }, {
          name: '教师信息录入',
          path: '/entry-teacherInfo',
          icon: "fa fa-file-text-o"
        }, {
          name: '人才培养计划达成度',
          path: '/degree',
          icon: "fa fa-check-square-o"
        }, {
          name: '个人信息',
          path: '/userInfo',
          icon: "fa fa-address-card"
        }]
      } else if (this.roleId == 2) {
        this.menus = [{
          name: '问卷管理',
          path: '/questionManage',
          icon: "fa fa-braille"
        }, {
          name: '因子分析',
          path: '/factorAnalysis',
          icon: "fa fa-bar-chart"
        }, {
          name: '个人信息录入',
          path: '/entryAgreement',
          icon: "fa fa-file-text-o"
        }, {
          name: '人才培养计划达成度',
          path: '/degree',
          icon: "fa fa-check-square-o"
        }, {
          name: '个人信息',
          path: '/userInfo',
          icon: "fa fa-address-card"
        }]
      } else if (this.roleId == 3) {
        this.menus = [{
          name: '问卷管理',
          path: '/questionManage',
          icon: "fa fa-braille"
        },{
          name: '个人信息',
          path: '/userInfo',
          icon: "fa fa-address-card"
        }]
      } else {
        Message({
          showClose: true,
          message: "系统发生错误",
          type: 'error',
          duration: 1000
        })
      }
    }

  },
  mounted() {
    this.reStructMenueByRole()
  },
}