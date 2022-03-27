<script setup lang="ts">
import {useRouter,useRoute} from 'vue-router'
import {getCurrentInstance, h}from 'vue'
const router=useRouter()
const route=useRoute()

const{proxy}:any =getCurrentInstance()

console.log(route.query)

proxy.$message({
    message:h('p',null,[
        h('span',null,'message can be'),
        h('i',{style:'color:teal'},'vNode'),
    ])
})


</script>

<template>
<div>首页</div>

  <div class="flex">
  <el-row>
    <el-button plain disabled>Plain</el-button>
    <el-button type="primary" plain disabled>Primary</el-button>
    <el-button type="success" plain disabled>Success</el-button>
    <el-button type="info" plain disabled>Info</el-button>
    <el-button type="warning" plain disabled>Warning</el-button>
    <el-button type="danger" plain disabled>Danger</el-button>
  </el-row>
  </div>



</template>

<style>

</style>
