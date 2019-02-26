<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="/home" router class="el-menu-vertical-demo" background-color="#353d47" text-color="#fff"
          active-text-color="#ffd04b" style="height:100%">
          <el-menu-item index="/home" style="background:#22a7f0">
            <i class="el-icon-menu" style="color:white"></i>
            <span>人才培养管理系统</span>
          </el-menu-item>
          <el-menu-item v-for="(item,key) in menus" :key="key" :index='item.path'>
            <i :class='item.icon'></i>
            <span style="display:inline-block;">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="padding:0">
          <!-- <i class="el-icon-caret-right" @click="pageActions"></i> -->
          <el-card shadow="never" style="width:101%;margin-left:-10px;margin-top:-8px">
            <span style="font-family: Hiragino Sans GB;inline-height:64px;height:64px">光电技术学院本科人才培养管理系统</span>
            <el-card shadow="hover" body-style="padding:0" style="margin-top:-1.5%;width:7%;height:70px;float:right;margin-right:-20px">
              <el-button type="text" style="height:80px;width:60%;" @click="popover"><span>姓名</span><i class="el-icon-arrow-down"
                  style="color:red"></i></el-button>
            </el-card>
          </el-card>
          <el-dialog title="个人信息" :modal="false" width="450px" :show-close='false' :visible.sync="centerDialogVisible"
            style="padding-bottom:-50px">
            <img src="../../assets/tou.png" style="width:450px;margin-left:-20px;margin-top:-10px">
            <el-row style="margin-left:-20px;width:450px;margin-top:-3px;margin-bottom:-30px;">
              <el-col :span="8">
                <el-button style="width:150px" @click="userInfo">个人信息</el-button>
              </el-col>
              <el-col :span="8">
                <el-button style="width:150px" @click="modifyPwd">修改密码</el-button>
              </el-col>
              <el-col :span="8">
                <el-button style="width:150px" @click="exit">退出</el-button>
              </el-col>
            </el-row>
          </el-dialog>
          <el-dialog title="修改密码" width="450px" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="原始密码" >
                <el-input v-model="form.pwd" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="修改后的密码">
                <el-input v-model="form.newPwd" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="再次输入修改后的密码">
                <el-input v-model="form.newPwdAgain" autocomplete="off"></el-input>                
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="modifyPwdAction">确 定</el-button>
            </div>
          </el-dialog>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <div class="division">
            <h3>联系我们</h3>
            <h3 style="color: #888;font-weight: 400">--- CONTACT ---</h3>
          </div>
          <div class="footer">
            <a href="https://github.com/2018-1-1"><img src="../../assets/github4.png"><span>https://github.com/2018-1-1</span></a>
            <a href="https://github.com/Merlynr"><img src="../../assets//github4.png"><span>https://github.com/Merlynr</span></a>
          </div>
          <!-- <test @getmess='get' :mess="mess"></test> -->
        </el-footer>
      </el-container>
    </el-container>

  </div>
</template>
<script>
  import {
    homePage
  } from './home-page.js'
  export default {
    mixins: [homePage]
  }
</script>
<style>
  .el-header,
  .el-footer {
    text-align: center;
  }

  .el-main {
    text-align: center;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    /* min-height: 400px; */
  }

  .division {
    width: 100%;
    margin: 30px auto;
    text-align: center;
    color: #5a5a5a;
  }

  .footer {
    width:103%;
    margin-left: -30px;
    height: 100px;
    background: black;
    padding-top: 50px
  }

  .footer a {
    color: white;
    text-decoration: none;
  }

  .footer img {
    width: 25px;
    height: 25px;
    margin-right: 10px
  }

  .footer span {
    margin-right: 20px;
  }
</style>