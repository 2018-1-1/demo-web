<template>
  <div>
    <!-- <el-card shadow="hover" style="padding-bottom:20px"> -->
      <!-- TODO 搜索功能 -->
      <!-- <el-input placeholder="请输入姓名" prefix-icon="el-icon-search" v-model="input21" style="width:120px;float:left">
      </el-input>
      <el-select v-model="value" clearable placeholder="请选择班级" style="display:inline-block;float:left;margin-left:20px">
        <el-option v-for="(item,key) in options" :key="key" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" plain style="display:inline-block;float:left;margin-left:20px" @click="searchStudent">搜索</el-button>
    </el-card> -->
    <!-- 学生信息 -->
    <el-table stripe :data="tableData3" height="490" border style="width: 100%;margin-top:1%">
      <el-table-column prop="studentId" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="班级">
      </el-table-column>
      <el-table-column prop="startDate" label="入学年份">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">个人信息</el-button>
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">人才培养计划</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import {
    degree
  } from './degree.js'
  export default {
    mixins: [degree]
  }
</script>