<template>
  <div id="app">
    <img src="./assets/logo.png">
    <dashboard></dashboard>
  </div>
</template>

<script>

import Vue from 'vue'
import Dashboard from '@/components/Dashboard'
Vue.component('dashboard', Dashboard)
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
