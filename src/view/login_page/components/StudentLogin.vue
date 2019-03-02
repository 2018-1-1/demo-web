<template>
  <div class="student">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="学号" prop="number" class="number">
        <el-input type="number" v-model="ruleForm.number" autocomplete="off" placeholder="输入学号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" class="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="输入密码"></el-input>
      </el-form-item>
      <!-- <el-form-item label="验证码" prop="code" class="code">
        <el-input type="text" v-model="ruleForm.code" autocomplete="off" placeholder="输入验证码"></el-input>
      </el-form-item> -->
      <!-- <el-checkbox v-model="checked" style="margin-top: 20px;">记住密码</el-checkbox> -->
      <el-form-item class="login-btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
  export default {
    name: "StudentLogin",
    data() {
      return {
        checked: true,
        ruleForm: {
          pass: null,
          number: null,
          // code: ''
        },
        teacherNum:null,
        rules: {
          pass: [{
              required: true,
              message: '请输入密码',
              trigger: 'change'
            },
            {
              min: 3,
              max: 16,
              message: '长度在 6 到 16 个字符',
              trigger: 'change'
            }
          ],
          number: [{
            required: true,
            message: '请输入学号',
            trigger: 'change'
          }]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {
              studentId: this.ruleForm.number,
              password: this.ruleForm.pass
            }
            this.post('/api/user/login', params).then((res) => {
              var storage = window.localStorage
              // storage['username']=res.data.token
              storage.setItem("username", res.data.token.token)
              storage.setItem('userId', res.data.userId)
              storage.setItem('roleId', res.data.roleId)
              this.teacherNum=this.ruleForm.number
              storage.setItem('teacherNum',this.teacherNum)
              this.$router.push({
                  path:"/home"
                })
            }).catch(e=>{
              Message({
                showClose: true,
                message: "账号或密码错误！",
                type: "error",
                duration: 1000
              });
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  .login-btn {
    margin-right: 0 !important;
  }

  .login-btn>>>.el-form-item__content {
    margin-left: 0 !important;
  }

  .student>>>.el-form-item__label {
    line-height: 60px;
  }

  .login-btn>>>.el-button {
    cursor: pointer;
    width: 100%;
    height: 45px;
    padding: 0;
    background: rgba(239, 67, 0, .8);
    border: 1px solid #ff730e;
    border-radius: 6px;
    font-weight: 700;
    color: #fff;
    font-size: 24px;
    letter-spacing: 15px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .1);

    &:hover {
      background: rgba(239, 67, 0, 1);
    }
  }

  .student>>>.el-form-item {
    margin-bottom: 0;
    margin-right: 20px;
  }

  .student>>>.el-form-item__error {
    left: 10px;
  }

  .student {
    padding: 10px;
  }

  .student div {
    padding: 10px;
  }
</style>