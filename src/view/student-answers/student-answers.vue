<template>
  <div style="height:578px">
    <el-card style="padding-bottom:30px">
      <div style="width:90%;margin-bottom:50px">
        <b style="display:inline-block;float:left">{{questionName}}</b>
        <h2>第 {{question.index}} 题</h2>
        <el-row style="margin-top:40px">
          <el-col :span="8"><b style="display:inline-block;float:right;">题目：</b></el-col>
          <el-col :span="16"><span style="display:inline-block;float:left;margin-left:20px">{{question.name}} </span></el-col>
        </el-row>
        <div style="margin-top:30px">
          <el-input v-if="question.type=='text'" type="textarea" style="margin-left:180px;width:700px" v-model="text"></el-input>
          <el-radio-group v-if="question.type=='radio'" v-model="choice" style="margin-left:-342px">
            <el-radio v-for="(it,answerKey) in question.questionAnswers" :key="answerKey" :label="it.answerKey" style="margin-left:50px;float:left">{{it.answerValue}}
            </el-radio>
          </el-radio-group>
          <el-checkbox-group v-if="question.type=='checkbox'" v-model="checkBox">
            <el-checkbox v-for="(it,answerKey) in question.questionAnswers" :key="answerKey" :label="it.answerKey">{{it.answerValue}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <el-button @click="nextQuestion" v-if="nextFlag" type="primary" style="float:right;margin-bottom:50px" plain>下一题</el-button>
        <el-button @click="nextQuestion" v-else type="primary" style="float:right;margin-bottom:50px" plain>完成</el-button>
      </div>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage"></el-progress>
    </el-card>

  </div>
</template>

<script>
  import {
    studentAnswers
  } from './student-answers.js'
  export default {
    mixins: [studentAnswers]
  }
</script>