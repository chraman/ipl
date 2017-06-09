
<template>
<div>
<h1 class="page-heading">Batsman Stats</h1>
<div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8  col-sm-offset-2 col-sm-8 col-xs-12">
<div class="chart-bg">
  <h2 class="chart-heading">Most runs in IPL</h2>
  <bar :chartData="chartDataRuns" :options="chartOptionsRuns"></bar>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
<div class="chart-bg mt-20">
  <h2 class="chart-heading">Most sixes in IPL</h2>
  <bar :chartData="chartDataSixes" :options="chartOptionsSixexs"></bar>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
<div class="chart-bg mt-20">
  <h2 class="chart-heading">Death overs strike rate</h2>
  <line-chart :chartData="chartDataStrike" :options="chartOptionsStrike"></line-chart>
</div>
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
      chartDataStrike: {},
      chartOptionsSixexs: {},
      chartOptionsStrike: {}
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
                for(var i=0;i<5;i++) {
                  this.batsmanRuns.push(players.runs[i].batsman);
                  this.totalRuns.push(players.runs[i].count);
                  this.batsmanSixes.push(players.sixes[i].batsman)
                  this.totalSixes.push(players.sixes[i].count)
                }
                this.deathRunsBatsman = []
                this.deathStrikeRate = []
                for(var index=0;index<5;index++){
                  var batsmanInDeath = players.death_over_runs[index].batsman
                  var runsDeath = players.death_over_runs[index].sum
                  this.deathRunsBatsman.push(batsmanInDeath);
                  for(var i=0; i<players.batsman_facing_death_over.length;i++) {
                    if(players.batsman_facing_death_over[i].index == batsmanInDeath) {
                      var balls= players.batsman_facing_death_over[i].count
                      var sr = (runsDeath/balls)*100;
                      sr = Math.round( sr * 10 ) / 10;
                      this.deathStrikeRate.push(sr);
                    }
                  }
                }
                this.prepareChartDataRuns(this.batsmanRuns , this.totalRuns)
                this.prepareChartDataSixes(this.batsmanSixes , this.totalSixes)
                this.prepareChartDataDEathSR(this.deathRunsBatsman , this.deathStrikeRate)
            }, function(error) {
                console.log(error)
          });
        },
        prepareChartDataRuns: function(batsman,runs) {
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
        prepareChartDataSixes: function(batsman,sixes) {
          this.chartDataSixes = {
            labels: batsman,
            datasets: [
            {
                label: 'Sixes',
                backgroundColor: '#990099',
                data: sixes
            }
          ]
        }
        this.chartOptionsSixexs = {
            responsive: true, 
            maintainAspectRatio: false
        }
        },
        prepareChartDataDEathSR: function(batsman,sr) {
          this.chartDataStrike = {
            labels: batsman,
            datasets: [
            {
                label: 'Strike rate',
                backgroundColor: 'rgba(50,146,98,0.3)',
                pointBackgroundColor: 'rgba(50,146,98,1)',
                borderColor: 'rgba(50,146,98,1)',
                data: sr
            }
          ]
        }
        this.chartOptionsStrike = {
            responsive: true, 
            maintainAspectRatio: false
        }
        }
    }
  }
</script>

<style>
.chart-heading{
  text-align: center;
}
.chart-bg{
    background: beige;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding-bottom: 20px;
}
.mt-20{
  margin-top: 20px;
}
.page-heading{
  text-align: center;;
  margin-bottom: 20px;
}
</style>
