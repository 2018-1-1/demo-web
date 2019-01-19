<template>
  <div >
    <span><h3>量表详情</h3></span>
    <el-table stripe :data="tableData0" height="300" border style="width: 100%;margin-top:1%">
      <el-table-column prop="name" label="量表名称" width="auto">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="publishQuestionnaire(scope.row)" type="text" size="small">发布</el-button>
           <el-button @click="getQuestionnaireInfo(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <span><h3>发布记录</h3></span>
    <el-table stripe :data="tableData1" height="300" border style="width: 100%;margin-top:1%">
      <el-table-column prop="date" label="发布日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="量表名称" width="500">
      </el-table-column>
      <el-table-column prop="address" label="发布人">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="60">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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