<template>
    <div>
        <el-card style="width:50%;float:left;">
             <v-echarts :options='options'></v-echarts>
        </el-card>
        <el-card style="width:30%;float:right;margin-right:15%">
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

