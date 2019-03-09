<template>
  <div>
    <el-card style="padding-top:0">
        <h3>学生绩点追踪</h3>
      <div style="width:100%;">
        <span v-for="(item,key) in classList" :key="key">
          <el-button size="mini" style="margin-top:10px;margin-left:10px" @click="show(item.id)">{{item.grade}}</el-button>
        </span>
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
