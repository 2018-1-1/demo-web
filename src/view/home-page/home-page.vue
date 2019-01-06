<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#353d47" text-color="#fff" active-text-color="#ffd04b" style="height:100%">
          <el-menu-item index="0" style="background:#22a7f0">
            <i class="el-icon-menu" style="color:white"></i>
            <span>人才培养管理系统</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container style="position:relative;top:0;">
        <el-header style="padding:0">
          <!-- <i class="el-icon-caret-right" @click="pageActions"></i> -->
          <el-card shadow="never">
            <span style="font-family: Hiragino Sans GB;inline-height:64px;height:64px">光电技术学院本科人才培养管理系统</span>
            <el-card shadow="hover" body-style="padding:0" style="margin-top:-1.5%;width:7%;height:64px;float:right">
              <el-button type="text" style="height:64px;width:60%" @click="popover"><span>姓名</span><i class="el-icon-arrow-down"
                  style="color:red"></i></el-button>
            </el-card>
          </el-card>
          <el-dialog title="个人信息" :modal="false" width="450px" :show-close='false' :visible.sync="centerDialogVisible"
            style="padding-bottom:-50px">
            <img src="../../assets/tou.png" style="width:450px;margin-left:-40px;margin-top:-10px">
            <el-row style="margin-left:-20px;width:450px;margin-top:-3px;margin-bottom:-30px;">
              <el-col :span="8">
                <el-button>个人信息</el-button>
              </el-col>
              <el-col :span="8">
                <el-button>修改密码</el-button>
              </el-col>
              <el-col :span="8">
                <el-button>退出</el-button>
              </el-col>
            </el-row>
          </el-dialog>
        </el-header>
        <el-main>

        </el-main>
        <el-footer style="position: relative;bottom:0px">
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
  * {
    width: 100%;
    margin: auto;
    padding: 0;
  }

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
    width: 1720px;
    margin-left:-20px;
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