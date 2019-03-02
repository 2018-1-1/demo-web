export const degree = {
  data() {
    return {
      tableData3: [],
      input21: '',
      options: [],
      value: '',
      studentInfo:[]
    }
  },
  created() {
    this.searchStudent()
  },
  methods: {
    searchStudent(){
        this.get('/api/user/teacherFindClass',{teacherId:localStorage.getItem('teacherNum')}).then(res=>{
          // this.tableData3=res.data
          let arr=[]
          res.data.forEach(item=>{
            item.students.forEach(it=>{
              it.grade=item.grade
            })
            arr.push(item.students)
          })
          let arrAdd=[]
          arr.forEach(item=>{
            item.forEach(it=>{
              arrAdd.push(it)
            })
          })
          this.tableData3=arrAdd
      
        })
        // 要进行过滤，必须改老师专业下的学生信息才可以显示
    },
    handleClick(row) {
        this.$router.push({
          path:'/userInfo',
          query:{
            userId:row.id
          }
        })
      }
  },
  mounted() {

  },
}