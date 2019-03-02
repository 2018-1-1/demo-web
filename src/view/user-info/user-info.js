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
      startDate:null,
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
        this.role=res.data.roleByRoleId.role
        this.sex=res.data.sex == 1?'男':'女'
        this.startDate=res.data.startDate
        this.tel=res.data.tel,
        this.stuNumber=res.data.studentId
        console.log(res.data)
        this.getCourseGradeById(res.data.studentId)
      })
    },
    getCourseGradeById(id){
      this.get('/api/userCourse/selectCourseByStudentId',{studentId:id}).then(res=>{
        this.tableData=res.data
      })
    }
  },
  mounted() {}
}