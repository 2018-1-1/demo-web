<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix" style="float:left;margin-top:-5px">
        <i class="fa fa-user-circle-o" style="color:#22a7f0"></i><span style="dispaly:inline-block;margin-left:10px">个人信息</span>
      </div>
      <div style="width:50%;margin: 0 auto">
        <img src="../../assets/tou.png" style="width:100%;border-radius:120px">
      </div>
      <div style="width:100%;margin-top:50px">
        <el-row>
          <el-col :span="10">
            <div>
              <span class="fontStyle">姓名：</span>{{username}}
            </div>
          </el-col>
          <el-col :span="4">
            <div>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">角色：</span>{{role}}
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">学号：</span>
              <!-- {{class}} -->
              {{stuNumber}}
            </div>
          </el-col>
          <el-col :span="4">
            <div>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">入学年份：</span>
              <!-- {{tel}} -->
              {{startDate}}
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">性别：</span>
              {{sex}}
            </div>
          </el-col>
          <el-col :span="4">
            <div>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <!-- <span class="fontStyle">手机号：</span>
              {{}} -->
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card" style="position:relative;left:520px;top:-430px;width:42%">
      <div slot="header" class="clearfix" style="float:left;margin-top:-5px">
        <i class="fa fa-list-alt" style="color:#22a7f0"></i><span style="dispaly:inline-block;margin-left:10px">成绩详情</span>
      </div>
      <div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="courseName" label="学科名称" width="300">
          </el-table-column>
          <el-table-column prop="credit" label="学分">
          </el-table-column>
          <el-table-column prop="grade" label="成绩">
          </el-table-column>
          <!--
          <el-table-column prop="address" label="平时成绩">
          </el-table-column>
          <el-table-column prop="address" label="考试成绩">
          </el-table-column>
          <el-table-column prop="address" label="总评成绩">
          </el-table-column> -->
        </el-table>
      </div>
    </el-card>
  </div>
</template>
<script>
  import {
    userInfo
  } from './user-info.js'
  export default {
    mixins: [userInfo]
  }
</script>
<style>
  .fontStyle {
    /* font-color: #141522, */
    display: inline-block;
    margin-top: 10px;
    font-size: 12px;
    color: rgb(110, 105, 116)
  }

  .text {
    font-size: 14px;
  }

  

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>