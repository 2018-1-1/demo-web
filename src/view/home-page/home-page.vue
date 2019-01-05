<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
  import {
    homePage
  } from './home-page.js'
  export default {
    mixins: [homePage]
  }
</script>
<style>
* {
  margin: auto;
  padding: 0;
}
 .el-header, .el-footer {
    text-align: center;
  }
  .el-main {
    text-align: center;
  }
</style>
