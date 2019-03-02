<template>
  <div>
    <el-card style="height:593px">
      <h3 style="margin-left:-75px">学生信息录入</h3>
      <div style="margin-left:12%;margin-top:5%;">
        <el-select v-model="value" clearable placeholder="请选择班级" style="display:inline-block;float:left">
          <el-option v-for="(item,key) in options" :key="key" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span style="display:inline-block;margin-left:-100px">
        <span>学生信息:</span>
        <el-input id="upload" style="width:250px;" type="file" @change="importfxx(this,0)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        <span>学生成绩:</span>        
        <el-input id="upload" style="width:250px" type="file" @change="importfxx(this,1)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
         <el-button type="info" plain @click="submitStudentInfo" style="margin-left:10px">信息按钮</el-button>
        </span>
      </div>
    </el-card>
  </div>
</template>
<script>
  import {
    entryAgreement
  } from './entry-agreement.js'
  export default {
    mixins: [entryAgreement]
  }
</script>
<style>
</style>