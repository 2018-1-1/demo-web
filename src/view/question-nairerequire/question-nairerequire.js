export const questionNairerequire = {
  data() {
    return {
      questionnaire: {
        list: [{
          selectQuestion:{
            questionnaireByQuestionnaireId:{
              name:null
            },
            questionBankByQuestionBankId:{
              problemDescription:null,
              questionTypeByQuestionTypeId:'text'
            }
          }
        }]
      },
    }
  },
  created() {
  },
  methods: {
    getQuestionnaireInfo(){
      let param={
        questionnaireId:JSON.stringify(this.$router.history.router.currentRoute.query.id)
      }
      this.get('/api/questionnaire/findAllQuestionsByQuestionnaireId',param).then(res=>{
        this.questionnaire.list=res.data
      })
    }
  },
  mounted () {
    this.getQuestionnaireInfo()
  }
}