import ECharts from "vue-echarts/components/ECharts";
import { type } from "os";
import "echarts/lib/chart/line";
export const classGrade={
    components: {
        "v-echarts": ECharts
      },
    data(){
        return{
            options:{},
            classList:[]
        }
    },
    mounted(){
        this.getClassList()
        this.init()
    },
    methods:{
        getClassList() {
            this.get("/api/find/teacherGrades",{userId:localStorage.getItem('userId')}).then(res => {
                this.classList=res.data
            });
          },
          show(id){
              console.log(id)
          },
        init(){
            this.options = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
            }
        }
    }
}