import {
  Message
} from 'element-ui'
export const homePage = {
  data() {
    return {
      // isCollapse:false
      userId: localStorage.getItem('userId'),
      centerDialogVisible: false,
      menus: []
    }
  },
  methods: {
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
      if (this.userId == 1) {
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
      } else if (this.userId == 2) {
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
      } else if (this.userId == 3) {
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