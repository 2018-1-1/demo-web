<template>
  <div>
    <el-card style="padding-bottom:20px">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        style="width:400px;float:left;"
      >
        <el-form-item label="教师账号" prop="账号">
          <el-input type="text" v-model="ruleForm2.账号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="教师姓名" prop="姓名">
          <el-input type="text" v-model="ruleForm2.姓名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="教师性别" prop="性别">
          <el-input v-model.number="ruleForm2.性别"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
      </el-form>
       <div style="margin-right:10%">
        <el-transfer v-model="value1" :data="data"></el-transfer>
      </div>
    </el-card>
  </div>
</template>
<script>
import ElementUI  from "element-ui";
import { entryTeacherInfo } from "./entry-teacherInfo.js";
export default {
  mixins: [entryTeacherInfo]
};
</script>
<style scoped>
.el-transfer{
    width:auto;
    
}
</style>
