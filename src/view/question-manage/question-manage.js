import {
    Message
  } from 'element-ui'
export const questionManage = {
  data() {
    return {
      tableData0: [],
      tableData1: []
    }
  },
  created() {
    this.getQuesList()
    this.getQuestionnaireRecord()
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
        // this.get()
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
    answerQuestionnaireRecord(row){
      
    }
  }
}