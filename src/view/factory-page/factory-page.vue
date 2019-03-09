<template>
    <div>
        <el-card style="width:40%;float:left;">
             <v-echarts :options='options' style="margin-right:10px"></v-echarts>
        </el-card>
        <el-card style="width:57%;float:right">
            <el-row v-for="(item,key) in factoryList" :key="key">
            <el-button size="mini" style="margin-top:10px" @click="show(item.id)">{{key+1}}、{{item.name}}【{{item.type}}】</el-button>
            </el-row>
        </el-card>
    </div>
</template>
<script>
import {factoryPage} from './factory-page.js'
export default {
    mixins:[factoryPage]
}
</script>

