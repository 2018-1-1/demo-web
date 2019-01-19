import {
  get
} from "http";

export const userInfo = {
  data() {
    return {
      username: null,
      role: null,
      class: null,
      tel: null,
      stuNumber: null,
      sex: null,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: ' 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '1516 弄'
      }]
    }
  },
  created() {
    this.getPersonalInfo()
  },
  methods: {
    getPersonalInfo() {
      let userId = parseInt(localStorage.getItem('userId'))
      let param = {
        userId: userId
      }
      this.get('/api/user/find', param).then(res => {
        this.username=res.data.username,
        this.role=res.data.roleByRoleId.role,
        this.class=res.data.class,
        this.tel=res.data.tel,
        this.stuNumber=res.data.stuNumber
      })
    }
  },
  mounted() {}
}