<template>
  <div>
    <el-card style="padding-top:0">
        <h3>学生绩点追踪</h3>
        <el-button v-for="(item,key) in classList" :key="key" size="mini" @click="show(item)" style="margin-top:10px;margin-left:10px">{{item.grade}}</el-button>
      <div style="width:100%;">
          <el-button  size="mini" style="margin-top:10px;margin-left:10px">{{name}}</el-button>
      </div>
      <v-echarts :options="options" style="margin-top:-40px"></v-echarts>
      <div>
        
      </div>
    </el-card>
  </div>
</template>
<script>
  import {
    classGrade
  } from "./class-grade.js";
  export default {
    mixins: [classGrade]
  };

</script>
