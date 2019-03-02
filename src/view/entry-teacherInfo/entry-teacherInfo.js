import { Message } from "element-ui";
export const entryTeacherInfo = {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("性别不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm2.姓名 !== "") {
          this.$refs.ruleForm2.validateField("姓名");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else {
        callback();
      }
    };
    return {
      data: [],
      value1: [],
      ruleForm2: {
        账号: "",
        姓名: "",
        性别: ""
      },
      rules2: {
        账号: [{ validator: validatePass, trigger: "blur" }],
        姓名: [{ validator: validatePass2, trigger: "blur" }],
        性别: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let param = {
            teacherInformation: [
              {
                姓名: this.ruleForm2.姓名,
                账号: this.ruleForm2.账号,
                性别: this.ruleForm2.性别,
                grades: this.value1
              }
            ]
          };
          this.post("/api/teacher/create", param)
            .then(res => {
              Message({
                showClose: true,
                message: "教师信息录入太长",
                type: "success",
                duration: 1000
              });
              this.ruleForm2 = {};
            })
            .catch(e => {
              Message({
                showClose: true,
                message: "系统发生错误",
                type: "error",
                duration: 1000
              });
            });
        } else {
          return false;
        }
      });
    },
    getAllClassList() {
      this.get("/api/find/grades").then(res => {
        res.shift();
        let obj = null;
        let arr = [];
        res.forEach(item => {
          obj = {};
          obj.key = item.id;
          obj.label = item.grade;
          arr.push(obj);
        });
        this.data = arr;
      });
    }
  },
  created() {
    this.getAllClassList();
  }
};
