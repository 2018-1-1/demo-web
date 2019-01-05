<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height:100%">
          <el-menu-item index="0" style="background:#22a7f0">
            <i class="el-icon-menu"></i>
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
            <span>从不显示</span>
            <el-card shadow="hover" body-style="padding:0" style="margin-top:-1%;width:7%;height:62px;float:right">
              <el-button type="text" style="height:62px;width:60%" @click="popover"><span>姓名</span><i
                  class="el-icon-arrow-down" style="color:red"></i></el-button>
              <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" style="border:5px red solid">
                <span>需要注意的是内容是默认不居中的</span>
                <span slot="footer" class="dialog-footer">
                  <!-- <el-button @click="centerDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button> -->
                </span>
              </el-dialog>
            </el-card>
          </el-card>
        </el-header>
        <el-main>

        </el-main>
        <el-footer>Footer</el-footer>
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
</style>