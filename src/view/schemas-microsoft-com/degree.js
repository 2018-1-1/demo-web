export const degree = {
  data() {
    return {
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
  created() {

  },
  methods: {
    searchStudent(){
        
        // 要进行过滤，必须改老师专业下的学生信息才可以显示
    },
    handleClick(row) {
        this.$router.push({
          path:'/userInfo'
        })
      }
  },
  mounted() {

  },
}