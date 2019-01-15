export const questionNairerequire = {
  data() {
    return {
      questionnaire: {
        name: "光电技术学院本科人才调查问卷",
        id: null,
        list: [{
            id: 0,
            type: "radio",
            question: "你是男的还是女的",
            questionnaire: [{
              key: 0,
              value: "男",
            }, {
              key: 1,
              value: "女",
            }]
          }, {
            id: 1,
            type: "checkbox",
            question: "你喜欢的吃的",
            questionnaire: [{
              key: 0,
              value: "小馒头",
            }, {
              key: 1,
              value: "馒头",
            }, {
              key: 2,
              value: "大馒头",
            }, {
              key: 3,
              value: "烤馒头",
            }, {
              key: 4,
              value: "炸馒头",
            }]
          },
          {
            id: 2,
            type: "text",
            question: "你来自何方",

          }
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
  methods: {
    submitForm(formName) {
      // let formData = new FormData();
      // formData.append("id", 1060);
      // let url = 'http://www.pintasty.cn/home/homedynamic';
      // let headers = '';
      // HTTPUtil.post(url, formData, headers).then((json) => {
      //   //处理 请求结果  
      // }, (json) => {
      //   //TODO 处理请求fail     
      // })
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
  }
}