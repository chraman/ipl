<template>
  <div class="container" id="app">
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

</style>
