export const homePage = {
  data() {
    return {
      // isCollapse:false
      centerDialogVisible: false,
      menus: [{
        name: '调查问卷',
        path: '/questionNairerequire',
        icon: "fa fa-braille"
      },{
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
        path: "/login"
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
    handleOpen(key) {
      console.log(key);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {

  },
}