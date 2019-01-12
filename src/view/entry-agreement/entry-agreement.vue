<template>
  <div>

      <h3 style="margin-left:-75px">学生信息录入</h3>
      <el-select v-model="value" clearable placeholder="请选择班级" style="width:15%">
        <el-option v-for="(item,key) in options" :key="key" :label="item.label" :value="item.value" style="width:200px;">
        </el-option>
      </el-select>
      <!-- <input style="display:block;width:200px"  id="upload" type="file" @change="importfxx(this)"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" /> -->

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

  
   /* .el-select{
    width: 25%;
  } */
</style>
