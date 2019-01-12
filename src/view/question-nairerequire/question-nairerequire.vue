<template>
  <div>
    <el-form :model="questionnaire" :rules="rules" ref="ruleForm" label-width="700px">
      <el-card>
        <h3 style="margin-left:-75px">{{questionnaire.name}}</h3>
        <el-form-item v-for="(item,key) in questionnaire.list" :key="key" :label="item.question">
          <el-input v-if="item.type=='text'" style="width:700px;margin-left:-50%"></el-input>
          <el-radio-group v-if="item.type=='radio'">
            <el-radio v-for="(it,key) in item.questionnaire" :key="key" :label="it.value" style="width:50px;float:left;margin-left:50px">
            </el-radio>
          </el-radio-group>
          <el-checkbox-group v-if="item.type=='checkbox'">
            <el-checkbox v-for="(it,key) in item.questionnaire" :key="key" :label="it.value" style="width:50px;margin-left:50px;float:left"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="margin-left:-780px">
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:200px">立即提交</el-button>
        </el-form-item>
      </el-card>
    </el-form>
  </div>
</template>
<script>
  import {
    questionNairerequire
  } from './question-nairerequire.js'
  export default {
    mixins: [questionNairerequire]
  }
</script>