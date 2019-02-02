<template>
  <div >
    <div v-if="userId==1 || userId==2">
    <span><h3>量表详情</h3></span>
    <el-table stripe :data="tableData0" height="300" border style="width: 100%;margin-top:1%">
      <el-table-column prop="name" label="量表名称" width="auto">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="publishQuestionnaire(scope.row)" v-if="userId==2" type="text" size="small">发布</el-button>
           <el-button @click="getQuestionnaireInfo(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <div v-if="userId==2">
    <span><h3>发布记录</h3></span>
    <el-table stripe :data="tableData1" height="300" border style="width: 100%;margin-top:1%">
      <el-table-column prop="issueTime" label="发布日期" width="250">
      </el-table-column>
      <el-table-column prop="questionnaireByQuestionnaireId.name" label="量表名称">
      </el-table-column>
      <el-table-column prop="userByUserId.username" width="120" label="发布人">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="60">
        <template slot-scope="scope">
          <el-button @click="deleteQuestionnaireRecord(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <div v-if="userId==3">
    <span><h3>答题记录</h3></span>
    <el-table stripe :data="tableData2" height="700" border style="width: 100%;margin-top:1%">
      <el-table-column prop="issueTime" label="发布日期" width="250">
      </el-table-column>
      <el-table-column prop="questionnaireByQuestionnaireId.name" label="量表名称">
      </el-table-column>
      <el-table-column prop="userByUserId.username" width="120" label="发布人">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="60">
        <template slot-scope="scope">
          <el-button @click="answerQuestionnaireRecord(scope.row)" type="text" size="small">答题</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
  import {
    questionManage
  } from './question-manage.js'
  export default {
    mixins: [questionManage]
  }
</script>