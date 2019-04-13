import { Message } from "element-ui";
// import XLSX from 'xlsx'
export const entryAgreement = {
  data() {
    return {
      options: [],
      value: null,
      userInfoList: [],
      file: "",
      studentGrande: [],
      flag: null,
      classGrande:[]
    };
  },
  methods: {
    clear(){
      this.userInfoList=null,
      this.value=null,
      this.flag=null,
      this.studentGrande=null,
      this.classGrande=null
    },
    importfxx(obj, flag) {
      let _this = this;
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.file = event.currentTarget.files[0];
      let rABS = false; //是否将文件读取为二进制字符串
      let f = this.file;
      let reader = new FileReader();
      FileReader.prototype.readAsBinaryString = function(f) {
        let binary = "";
        let rABS = false; //是否将文件读取为二进制字符串
        let pt = this;
        let wb; //读取完成的数据
        let outdata;
        let reader = new FileReader();
        reader.onload = e => {
          let bytes = new Uint8Array(reader.result);
          let length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          let XLSX = require("xlsx");
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), {
              //手动转化
              type: "base64"
            });
          } else {
            wb = XLSX.read(binary, {
              type: "binary"
            });
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西
          if (flag == 0) {
            _this.userInfoList = outdata;
            _this.flag = flag;
          }
          if (flag == 1) {
            _this.studentGrande = outdata;
            _this.flag = flag;
          }
          if (flag == 2) {
            _this.classGrande = outdata;
            _this.flag = flag;
          }
          // TODO 根据flag来判断传入的学生信息还是成绩
        };
        reader.readAsArrayBuffer(f);
      };
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    },
    getClassList() {
      this.get("/api/find/teacherGrades",{userId:localStorage.getItem('userId')}).then(res => {
        this.options = JSON.parse(JSON.stringify(res.data).replace(/id/g, "value"));
        this.options = JSON.parse(
          JSON.stringify(this.options).replace(/grade/g, "label")
        );
      });
    },
    submitStudentInfo() {
      if (this.flag === 0) {
        this.options.forEach(it => {
          if (it.value == this.value && it.label==this.userInfoList[0]['班级']) {
            this.userInfoList.forEach(item => {
              // item["班级"] = it.label;
              item["学号"] = JSON.stringify(item["学号"])
            });
            let obj = {
              userInformation: this.userInfoList
            };
            this.post("/api/user/create",obj)
              .then(res => {
                Message({
                  showClose: true,
                  message: res.msg,
                  type: "success",
                  duration: 3000
                });
              })
              .catch(e => {
                Message({
                  showClose: true,
                  message: e,
                  type: "warning",
                  duration: 3000
                });
              });
          }else{
            // Message({
            //   showClose: true,
            //   message: "文件信息与班级选择不匹配",
            //   type: "warning",
            //   duration: 3000
            // });
          }
        });
      }
      if(this.flag === 1){
        this.options.forEach(it => {
          // if (it.value == this.value && it.label==this.studentGrande[0]['班级']) {
            console.log(this.studentGrande[0]['班级']==it.label)
          if (it.value == this.value && it.label==this.studentGrande[0]['班级']) {

            // this.studentGrande.forEach(item => {
            //   item["班级"] = it.label;
            //   // item["学号"] = JSON.stringify(item["学号"]);
            // });
            let obj = {
              userCourse: this.studentGrande
            };
            this.post("/api/userCourse/addCourseMark", obj)
              .then(res => {
                Message({
                  showClose: true,
                  message: res.msg,
                  type: "success",
                  duration: 3000
                });
              })
              .catch(e => {
                Message({
                  showClose: true,
                  message: "系统错误",
                  type: "warning",
                  duration: 3000
                });
              });
          }else{
            // Message({
            //   showClose: true,
            //   message: "文件信息与班级选择不匹配",
            //   type: "warning",
            //   duration: 3000
            // });
          }
        });
      }
      if(this.flag === 2){
        this.options.forEach(it => {
          // if (it.value == this.value && it.label==this.classGrande[0]['班级']) {
          if (it.value == this.value && it.label==this.classGrande[0]['班级']) {

            this.classGrande.forEach(item => {
                item["学号"] = JSON.stringify(item["学号"]);
              });
            let obj = {
              studentsGpa: this.classGrande
            };
            this.post("/api/create/gpa", obj)
              .then(res => {
                Message({
                  showClose: true,
                  message: '录入结束',
                  type: "success",
                  duration: 3000
                });
              })
              .catch(e => {
                Message({
                  showClose: true,
                  message: "系统错误",
                  type: "warning",
                  duration: 3000
                });
              });
          }else{
            // Message({
            //   showClose: true,
            //   message: "文件信息与班级选择不匹配",
            //   type: "warning",
            //   duration: 3000
            // });
          }
        });
      }
      this.clear()
    }
  },
  created() {
    this.getClassList();
  },
  mounted() {}
};
// TODO 个人信息录入
