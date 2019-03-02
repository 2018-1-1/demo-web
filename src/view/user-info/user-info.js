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
      studentId:null,
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
    this.isHaveStudentId()
  },
  methods: {
    isHaveStudentId(){
      this.studentId=this.$route.query.userId
      if(this.$route.query.userId != null){
        this.getPersonalInfo(1)
        this.getCourseGradeById(1)
      }else{
        this.getPersonalInfo(0)
        this.getCourseGradeById(0)
      }
    },
    getPersonalInfo(flag) {
      let userId=null
      if(flag){
        userId = this.studentId
      }else{
        userId = parseInt(localStorage.getItem('userId'))
      }
      let param = {
        userId: userId
      }
      console.log(param)
      this.get('/api/user/find', param).then(res => {
        this.username=res.data.username,
        this.role=res.data.roleByRoleId.role
        this.sex=res.data.sex == 1?'男':'女'
        this.startDate=res.data.startDate
        this.tel=res.data.tel,
        this.stuNumber=res.data.studentId

      })
    },
    getCourseGradeById(flag){
      let userId=null
      if(flag){
        userId = this.studentId
      }else{
        userId = parseInt(localStorage.getItem('teacherNum'))
      }
      let param = {
        studentId: userId
      }
      this.get('/api/userCourse/selectCourseByStudentId',param).then(res=>{
        this.tableData=res.data
      })
    }
  },
  mounted() {}
}