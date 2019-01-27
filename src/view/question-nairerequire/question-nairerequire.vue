<template>
  <div>
    <el-form :model="questionnaire" ref="questionnaire" label-width="700px">
      <el-card>
        <h3 style="margin-left:-75px">{{questionnaire.list[0].selectQuestion.questionnaireByQuestionnaireId.name}}</h3>
        <el-form-item v-for="(item,key) in questionnaire.list" :key="key" :label="item.selectQuestion.questionBankByQuestionBankId.problemDescription">
          <el-input v-if="item.selectQuestion.questionBankByQuestionBankId.questionTypeByQuestionTypeId.type=='text'" type="textarea" style="margin-left:-134px;width:700px"></el-input>
          <el-radio-group v-if="item.selectQuestion.questionBankByQuestionBankId.questionTypeByQuestionTypeId.type=='radio'" style="margin-left:-742px">
            <el-radio v-for="(it,answerKey) in item.questionAnswers" :key="answerKey" :label="it.answerValue" style="width:50px;margin-left:50px;float:left">
            </el-radio>
          </el-radio-group>
          <el-checkbox-group v-if="item.selectQuestion.questionBankByQuestionBankId.questionTypeByQuestionTypeId.type=='checkbox'">
            <el-checkbox v-for="(it,answerKey) in item.questionAnswers" :key="answerKey" :label="it.answerValue" style="width:50px;margin-left:50px;float:left"></el-checkbox>
          </el-checkbox-group>
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