<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import {useRouter} from 'vue-router'
const router=useRouter()
let aa=""
function bb(){ }
bb()
</script>

<template>
  <button @click="()=>router.push({path:'/home',query:{id:2}})">首页</button>
    <button @click="()=>router.push({path:'/mine',query:{id:1}})">个人中心</button>
    <router-link to="/home">首页</router-link>
     <router-link to="/mine">个人中心</router-link>
  <router-view />

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  button{
    font-size: 40px;
  }
}
</style>
