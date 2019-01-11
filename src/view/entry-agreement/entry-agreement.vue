<template>
  <div>
    <el-card>
      <el-select v-model="value4" clearable placeholder="请选择班级" style="width:200px;float:left">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <input id="upload" type="file" @change="importfxx(this)"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
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