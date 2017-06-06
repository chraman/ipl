
<template>
  <line-chart ></line-chart>
</template>

<script>

import Vue from 'vue'
import LineChart from 'vue-chartjs'
Vue.component('line-chart',LineChart)
export default {
  name: 'max-dots-baller',
  ready: function() {
        this.update();
    },
  methods: {
        update: function() {
            this.$http.get(this.source, function(response) {
                this.count = response.total;
            });
        }
  }
}
</script>

<style>
#app {
  min-width: 380px;
}
.app-header{
  position: absolute;
    padding-left: 12px;
    top: 42px;
    display: inline-block;
    background: white;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

}
.app-image{
  padding: 8px;
    display: inline-block;
    background: white;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.panel-header {
  background: #19388A;
      padding: 7px;
}
.app-panel-heading{ 
  background: white;
      padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 10px;
}
.heading{
  margin: 0px;
  font-family: "Helvetica";
    font-size: 40px;
    color: #193986;
}
</style>
