import {
    Message
  } from 'element-ui'
export const studentAnswers = {
  data() {
    return {
      nextFlag: true,
      questionName: null,
      questionList: [],
      value: 55,
      question: {
        name: null,
        type: null,
        questionAnswers: []
      },
      choice: null,
      text: null,
      checkBox: [],
      percentage: 50,
      answerList: {
          list:[]
      }
    }
  },
  created() {
    this.getQuestionnaired()

  },
  methods: {
    getQuestionnaired() {
      let param = {
        questionnaireId: this.$route.query.id
      }
      this.get('/api/questionnaire/findAllQuestionsByQuestionnaireId', param).then(res => {
        this.questionName = res.data[0].selectQuestion.questionnaireByQuestionnaireId.name
        this.questionList = res.data
        this.questionList = this.reStructQuestion(res.data)
        this.question = this.questionList[0]
        window.localStorage.setItem('questionTotal', res.data.length)
        this.answerList.name = this.questionName
        this.answerList.questionId = this.$route.query.questionId
        this.answerList.userId = localStorage.getItem('userId')
      })
    },
    reStructQuestion(list) {
      let reList = []
      list.forEach((item, index) => {
        reList[index] = {
          id: item.selectQuestion.questionBankByQuestionBankId.id,
          index: index + 1,
          name: item.selectQuestion.questionBankByQuestionBankId.problemDescription,
          type: item.selectQuestion.questionBankByQuestionBankId.questionTypeByQuestionTypeId.type,
          questionAnswers: item.questionAnswers
        }
      })
      return reList
    },
    nextQuestion() {
        console.log(parseInt(localStorage.getItem('questionIndex')))
        console.log(parseInt(localStorage.getItem('questionTotal')))
      if (parseInt(localStorage.getItem('questionIndex')) + 1< parseInt(localStorage.getItem('questionTotal'))) {
          let answer={
              id:this.question.id,
              answer:this.discriminantType()
            }
        this.clearAnswerHis()
        this.answerList.list.push(answer)
        window.localStorage.setItem('questionIndex',
          parseInt(localStorage.getItem('questionIndex')) + 1)
        this.question = this.questionList[localStorage.getItem('questionIndex')]
      }
      else {
        this.nextFlag = false
        let answer={
            id:this.question.id,
            answer:this.discriminantType()
          }
      this.clearAnswerHis()
      this.answerList.list.push(answer)
      console.log(this.answerList)
      }
    },
    discriminantType() {
      if (this.choice != null) {
        return this.choice
      }
      else if (this.text != null) {
        return this.text
      }
      else if (this.checkBox.length > 0) {
        return this.checkBox
      } else {
        Message({
          showClose: true,
          message: '未完成填写',
          type: 'error',
          duration: 1000
        })
        return 
      }
    },
    clearAnswerHis() {
      this.choice = null
      this.checkBox = []
      this.text = null
    }
  },
}