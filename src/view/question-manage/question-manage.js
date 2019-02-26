import {
    Message
  } from 'element-ui'
export const questionManage = {
  data() {
    return {
      tableData0: [],
      tableData1: [],
      tableData2:[],
      userId:localStorage.getItem('userId')
    }
  },
  created() {
    this.getQuesList()
    this.getQuestionnaireRecord()
    this.getStudentanswerList()
  },
  methods: {
    getQuesList(){
        this.get('/api/questionnaire/findAllQuestionnaire').then(res=>{
            this.tableData0=res.data
        })
    },
    publishQuestionnaire(row){
        let params={
            userId:localStorage.getItem('userId'),
            questionnaireId:JSON.stringify(row.id)
        }
        this.post('/api/questionnaireIssue/publishQuestionnaire',params).then(res=>{
            Message({
                showClose: true,
                message: res.msg,
                type: 'success',
                duration: 1000
              })
              this.getQuestionnaireRecord()
        }).catch((res)=>{
            Message({
                showClose: true,
                message: "系统发生错误",
                type: 'error',
                duration: 1000
              })
        })
    },
    getQuestionnaireInfo(row){
        this.$router.push({
            path: "/questionNairerequire",
            query: {
                id: row.id
              }
          })
    },
    getQuestionnaireRecord(){
      this.get('/api/questionnaire/findAllQuestionnaireIssueByUserId',{userId:localStorage.getItem('userId')}).then(res=>{
        this.tableData1=res.data.reverse()
      })
    },
    openDeteleDialog(row){
      this.$confirm('此操作将执行后将不能进行该发布记录的因子分析, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteQuestionnaireRecord(row)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    deleteQuestionnaireRecord(row){
      this.post('/api/questionnaire/deleteQuestionnaireIssueById',{id:JSON.stringify(row.id)}).then(()=>{
        Message({
          showClose: true,
          message: '删除成功',
          type: 'success',
          duration: 1000
        })
        this.getQuestionnaireRecord()
      })
    },
    getStudentanswerList(){
      this.get('/api/questionnaire/findQuestionnaireCanFill',{userId:localStorage.getItem('userId')}).then(res=>{
       this.tableData2=res.data
      })
    },
    answerQuestionnaireRecord(row){
      window.localStorage.setItem('questionIndex', 0)
      window.localStorage.setItem('questionTotal', 0)
      this.$router.push({
        path:'/studentAnswers',
        query:{
          id:row.questionnaireByQuestionnaireId.id,
          questionId:row.id
        }
      })
    }
  }
}