<template>
  <div>
    <el-card shadow="hover" style="padding-bottom:20px">
      <!-- TODO 搜索功能 -->
      <el-select v-model="value" clearable placeholder="请选择问卷名称" style="display:inline-block;float:left;margin-left:20px">
        <el-option v-for="(item,key) in options" :key="key" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" plain style="display:inline-block;float:left;margin-left:20px" @click="searchStudent">搜索</el-button>
    </el-card>
    <!-- 学生信息 -->
    <el-table stripe :data="tableData3" border style="width: 100%;margin-top:1%">
      <el-table-column prop="date" label="发布时间" width="120">
      </el-table-column>
      <el-table-column prop="name" label="量表名称">
      </el-table-column>
      <el-table-column prop="userName" label="量表发布人" width="180">
      </el-table-column>
      <el-table-column prop="address" label="量表已填人次" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="90">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">因子分析</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="position:absolute;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50, 100]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import {
    factorAnalysis
  } from './factor-analysis.js'
  export default {
    mixins: [factorAnalysis]
  }
</script>