
<template>
<div>
<h1>Batsman Stats</h1>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
  <h2 class="chart-heading">Most run scorer</h2>
  <bar :chartData="chartDataRuns" :options="chartOptionsRuns"></bar>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
  <h2 class="chart-heading">Most Sixes</h2>
  <bar :chartData="chartDataSixes" :options="chartOptionsSixexs"></bar>
</div>
</div>
</template>

<script>

import Vue from 'vue'
import BarChart from '@/components/BarChart.js'
Vue.component('bar',BarChart)
export default {
  name: 'batsman-stats',
  data() {
    return {
      chartDataRuns: {},
      chartOptionsRuns: {},
      chartDataSixes: {},
      chartOptionsSixexs: {}
    }
  },
  mounted() {
    this.update()
  },
  methods: {
        update: function() {
          this.$http.get("https://chraman.github.io/ipl/static/json/BatsmanStats.json").then(
            function(response) {
                var players = response.body;
                this.batsmanRuns = [];
                this.totalRuns = [];
                this.batsmanSixes=[];
                this.totalSixes=[];
                console.log(players)
                for(var i=0;i<5;i++) {
                  this.batsmanRuns.push(players.runs[i].batsman);
                  this.totalRuns.push(players.runs[i].count);
                  this.batsmanSixes.push(players.sixes[i].batsman)
                  this.totalSixes.push(players.sixes[i].count)
                }
                console.log(this.bowlers)
                this.prepareChartDataDots(this.batsmanRuns , this.totalRuns)
                this.prepareChartDataWickets(this.batsmanSixes , this.totalSixes)
            }, function(error) {
                console.log(error)
          });
        },
        prepareChartDataDots: function(batsman,runs) {
          this.chartDataRuns = {
            labels: batsman,
            datasets: [
            {
                label: 'Runs',
                backgroundColor: '#DD1B16',
                data: runs
            }
          ]
        }
        this.chartOptionsRuns = {
            responsive: true, 
            maintainAspectRatio: false
        }
        },
        prepareChartDataWickets: function(batsman,sixes) {
          this.chartDataSixes = {
            labels: batsman,
            datasets: [
            {
                label: 'Sixes',
                backgroundColor: '#f87979',
                data: sixes
            }
          ]
        }
        this.chartOptionsSixexs = {
            responsive: true, 
            maintainAspectRatio: false
        }
        }
    }
  }
</script>

<style>
</style>
