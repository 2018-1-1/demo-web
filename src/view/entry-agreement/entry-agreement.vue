<template>
    <el-card>
      <el-select v-model="value" clearable placeholder="请选择班级">
        <el-option v-for="(item,key) in options" :key="key" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <input style="display:block;width:200px"  id="upload" type="file" @change="importfxx(this)"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
    </el-card>
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
  * {
    width: 100%;
    margin: auto;
    padding: 0;
  }
   .el-select{
    width: 25%;
  }
</style>
