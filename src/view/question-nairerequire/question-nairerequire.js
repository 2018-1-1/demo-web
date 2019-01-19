export const questionNairerequire = {
  data() {
    return {
      questionnaire: {
        list: [
          // {
          //   id: 0,
          //   type: "radio",
          //   question: "你是男的还是女的",
          //   questionnaire: [{
          //     key: 0,
          //     value: "男",
          //   }, {
          //     key: 1,
          //     value: "女",
          //   }]
          // }, {
          //   id: 1,
          //   type: "checkbox",
          //   question: "你喜欢的吃的",
          //   questionnaire: [{
          //     key: 0,
          //     value: "小馒头",
          //   }, {
          //     key: 1,
          //     value: "馒头",
          //   }, {
          //     key: 2,
          //     value: "大馒头",
          //   }, {
          //     key: 3,
          //     value: "烤馒头",
          //   }, {
          //     key: 4,
          //     value: "炸馒头",
          //   }]
          // },
          // {
          //   id: 2,
          //   type: "text",
          //   question: "你来自何方",

          // }
        ]
      },
      answerFrom: {
        questionnaireId: null,
        answerList: [{
          id: null,
          value: null,
        }]
      },
      rules: {

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
      console.log(param)
      this.get('/api/questionnaire/findAllQuestionsByQuestionnaireId',param).then(res=>{
        this.questionnaire.list=res.data
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted () {
    this.getQuestionnaireInfo()
  }
}