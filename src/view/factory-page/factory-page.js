import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/pie";
export const factoryPage = {
  components: {
    "v-echarts": ECharts
  },
  data() {
    return {
      options: {},
      factoryInfo: null,
      factoryList: []
    };
  },
  created() {
    this.test();
    this.getFactoryInfo();
  },
  methods: {
    getFactoryInfo() {
      let id = this.$route.query.id;
      let url = "/api/answerRecord/findAllRecordsByQuestionnaireIssue";
      this.get(url, { questionnaireIssueId: id }).then(res => {
        this.factoryInfo = res.data;
        this.factoryList = this.getFactoryList(res.data);
      });
    },
    getFactoryList(list) {
      let obj = [];
      console.log(list)
      list.forEach((item, index) => {
        obj[index] = {};
        obj[index].id = item.selectQuestion.questionBankByQuestionBankId.id;
        obj[index].name =
          item.selectQuestion.questionBankByQuestionBankId.problemDescription;
        obj[index].record = item.recordCounts;
        if(item.selectQuestion.questionBankByQuestionBankId.questionTypeByQuestionTypeId.type=='checkbox'){
            obj[index].type='多选'
        }else{
            obj[index].type='单选'
        }
      });
      return obj;
    },
    
    show(id){
        let arr=[]
        this.factoryList.forEach(item=>{
            if(item.id===id){
                arr=item.record
            }
        })
        let arr0=[]
        arr.forEach(item=>{
            let obj={}
            obj.value=item.count
            obj.name=item.questionAnswer.answerValue
            arr0.push(obj)
        })
        this.options.series[0].data=arr0
    },

    test() {
      this.options = {
        backgroundColor: "#2c343c",
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "因子选项",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "请选择选项" },
            ],
            roseType: "angle",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    }
  }
};
