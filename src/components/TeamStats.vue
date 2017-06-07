
<template>
<div>
<h1>Team Stats</h1>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
  <line-chart :chartData="chartDataRuns" :options="chartOptionsRuns"></line-chart>
</div>
</div>
</template>

<script>

import Vue from 'vue'
 import LineChart from '@/components/LineChart.js'
 Vue.component('line-chart',LineChart)
export default {
  name: 'team-stats',
  data() {
    return {
      chartDataRuns: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: 'rgba(32,162,219,0.3)',
          fill: true,
          data: [40, 39, 10, 40, 39, 80, 40]
        },
        {
          label: 'Data two',
          backgroundColor: 'rgba(196,93,105,0.3)',
          fill: true,
          data: [40, 39, 60, 20, 39, 80, 40]
        }
      ]
    },
      chartOptionsRuns: {responsive: true, maintainAspectRatio: false},
      chartDataSixes: {},
      chartOptionsSixexs: {}
    }
  },
  mounted() {
    this.update()
  },
  methods: {
        update: function() {
          this.$http.get("https://chraman.github.io/ipl/static/json/allSeasonsRunsTeam.json").then(
            function(response) {
                var seasonsRunsTeam = response.body.team_runs_season;
                console.log(seasonsRunsTeam)   
                this.seasons=new Set()
                this.teams= new Set()
                for(var index=0;index<seasonsRunsTeam.length;index++){
                  this.seasons.add(seasonsRunsTeam[index].season)
                  this.teams.add(seasonsRunsTeam[index].batting_team)
                }
                for (var team of this.teams) {
                  console.log(team)
                }
              console.log(this.teams)


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
