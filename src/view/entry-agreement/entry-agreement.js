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
      flag: null
    };
  },
  methods: {
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
          if (it.value == this.value) {
            this.userInfoList.forEach(item => {
              item["班级"] = it.label;
              item["学号"] = JSON.stringify(item["学号"]);
            });
            let obj = {
              userInformation: this.userInfoList
            };
            this.post("/api/user/create", obj)
              .then(res => {
                Message({
                  showClose: true,
                  message: res.msg,
                  type: "success",
                  duration: 1000
                });
              })
              .catch(e => {
                Message({
                  showClose: true,
                  message: res.msg,
                  type: "warning",
                  duration: 1000
                });
              });
          }
        });
      }
      if(this.flag === 1){
        this.options.forEach(it => {
          if (it.value == this.value) {
            this.studentGrande.forEach(item => {
              item["班级"] = it.label;
              // item["学号"] = JSON.stringify(item["学号"]);
            });
            let obj = {
              userCourse: this.studentGrande
            };
            this.post("/api/userCourse/addCourseMark", obj)
              .then(res => {
                Message({
                  showClose: true,
                  message: res.msg,
                  type: "success",
                  duration: 1000
                });
              })
              .catch(e => {
                Message({
                  showClose: true,
                  message: res.msg,
                  type: "warning",
                  duration: 1000
                });
              });
          }
        });
      }
    }
  },
  created() {
    this.getClassList();
  },
  mounted() {}
};
// TODO 个人信息录入
