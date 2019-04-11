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
      name:"请选择所查询班级或学生",
      class:null,
      studentsList:[]
    };
  },
  mounted() {
    this.getClassList();
    this.init();
  },
  methods: {
    getClassList() {
      this.get("/api/find/teacherGrades", {
        userId: localStorage.getItem("userId")
      }).then(res => {
        this.classList = res.data;
      });
    },
    init(sData) {
      this.options = {
        xAxis: {
          type: "category",
          data: ["大一上", "大一下", "大二上", "大二下","大三上", "大三下","大四上", "大四下"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: sData,
            type: "line",
            smooth: true
          }
        ]
      };
    },
    getSData(list){
      let sData=[]
      sData[0]=list.firstSemesterGpa
      sData[1]=list.secondSemesterGpa
      sData[2]=list.thirdlySemesterGpa
      sData[3]=list.fourthlySemesterGpa
      sData[4]=list.fifthSemesterGpa
      sData[5]=list.sixthSemesterGpa
      sData[6]=list.seventhSemesterGpa
      sData[7]=list.eighthSemesterGpa
      this.init(sData)
    },
    show(item){
        this.class=item.id 
        this.get('/api/grade/gpa',{gradeId:item.id}).then(res=>{
          this.getSData(res.data)
        })
        this.searchStudent(item.id)
    },
    searchStudent(id){
        this.get('/api/grade/findGradeStudents',{gradeId:id}).then(res=>{
          this.studentsList=res.data      
        })
        // 要进行过滤，必须改老师专业下的学生信息才可以显示
    },
    showStudent(student){
      this.get('/api/find/gpa',{userId:student.userByUserId.id}).then(res=>{
        this.getSData(res.data)
      })
    }
  }
};
