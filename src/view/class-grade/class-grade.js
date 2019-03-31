import ECharts from "vue-echarts/components/ECharts";
import { type } from "os";
import "echarts/lib/chart/line";
export const classGrade = {
  components: {
    "v-echarts": ECharts
  },
  data() {
    return {
      options: {},
      classList: [],
      name:"请选择所查询班级或，"
    };
  },
  mounted() {
    this.getClassList();
    this.init();
    this.searchStudent()
  },
  methods: {
    getClassList() {
      this.get("/api/find/teacherGrades", {
        userId: localStorage.getItem("userId")
      }).then(res => {
        this.classList = res.data;
      });
    },
    init() {
      this.options = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true
          }
        ]
      };
    },
    show(item){
        console.log(item.id)
    },
    searchStudent(){
        this.get('/api/user/teacherFindClass',{teacherId:JSON.stringify(localStorage.getItem('teacherNum'))}).then(res=>{
          // this.tableData3=res.data
          let arr=[]
          console.log(res.data)
        //   res.data.forEach(item=>{
        //     item.students.forEach(it=>{
        //       it.grade=item.grade
        //     })
        //     arr.push(item.students)
        //   })
        //   let arrAdd=[]
        //   arr.forEach(item=>{
        //     item.forEach(it=>{
        //       arrAdd.push(it)
        //     })
        //   })
        //   this.tableData3=arrAdd
      
        })
        // 要进行过滤，必须改老师专业下的学生信息才可以显示
    },
  }
};
