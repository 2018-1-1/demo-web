export const studentAnswers={
    data() {
        return {
            questionName:null,
            questionList:[],
            value:55,
            question:{
                name:null,
                type:null,
                questionAnswers:[]
            },
            choice:'0',
            text:null,
            checkBox:[],
            percentage:50
        }
    },
    created() {
        this.getQuestionnaired()
    },
    methods: {
        getQuestionnaired(){
            let param={
                questionnaireId:this.$route.query.id
            }
            this.get('/api/questionnaire/findAllQuestionsByQuestionnaireId',param).then(res=>{
                this.questionName=res.data[0].selectQuestion.questionnaireByQuestionnaireId.name
               this.questionList=res.data
               this.questionList=this.reStructQuestion(res.data)
               this.question=this.questionList[0]   
              })
        },
        reStructQuestion(list){
            console.log(list)
            let reList=[]
            list.forEach((item,index)=>{
                reList[index]={
                    index:index+1,
                    name:item.selectQuestion.questionBankByQuestionBankId.problemDescription,
                    type:item.selectQuestion.questionBankByQuestionBankId.questionTypeByQuestionTypeId.type,
                    questionAnswers:item.questionAnswers
                }
            })
            return reList
        },
        nextQuestion(){
            // if()
            console.log(this.question)
        }
    },
}