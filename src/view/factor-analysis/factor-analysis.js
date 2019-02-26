export const factorAnalysis = {
  data() {
    return {
      currentPage: 5,
      tableData3: [],
      input21: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  created(){
    this.searchFactoryInfo()
  },
  methods: {
    searchFactoryInfo() {
      let url='/api/questionnaire/findAllQuestionnaireIssueAndFillNumberByUserId'
      let userId=localStorage.getItem('userId')
      this.get(url,{userId:userId}).then(res=>{
        this.tableData3=this.tableData3=this.reStructeFactoryInfo(res.data)
      })
    },
    reStructeFactoryInfo(list){
      let obj=[]
      list.forEach((item,index)=>{
        obj[index]=new Object()
        obj[index].date=item.questionnaireIssue.issueTime
        obj[index].name=item.questionnaireIssue.questionnaireByQuestionnaireId.name
        obj[index].userName=item.questionnaireIssue.userByUserId.username
        obj[index].number=item.fillNumber
        obj[index].id=item.questionnaireIssue.id
      })
      return obj
    },
    handleClick(row) {
      this.$router.push({
        path:'/factory-page',
        query:{
          id:row.id
        }
      })
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // }
  }
}