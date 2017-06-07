
<template>
<div>
  <h1>Team Stats</h1>
  <div class="">
  <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55">
  <h3>Choose Team-A</h3>
  <div class="btn-group-vertical" role="group" >
    <button @click="prepareChartData(team,teamB)" v-for="team in teamNames" type="button" class="btn btn-xs btn-default">{{team}}</button>
  </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55" style="float:right">
  <h3>Choose Team-B</h3>
  <div class="btn-group-vertical group-small-screen" role="group" >
    <button @click="prepareChartData(teamA,team)" v-for="team in teamNames" type="button" class="btn btn-xs btn-default">{{team}}</button>
  </div>
  </div>
  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 p-0">
    <line-chart :chartData="chartDataRuns" :options="chartOptionsRuns"></line-chart>
  </div>
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
      chartDataRuns: {},
      teamNames: [],
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
                this.dataSets = [];
                this.seasonLabels = [];
                for (var season of this.seasons) {
                  this.seasonLabels.push(season);
                }
                this.teamNames = []
                for (var team of this.teams) {
                  this.seasonsRun = []
                  this.teamNames.push(team);
                  for(var index=0;index<seasonsRunsTeam.length;index++) {
                    if(seasonsRunsTeam[index].batting_team == team ) {
                      this.seasonsRun.push(seasonsRunsTeam[index].runs_by_season)
                    }
                  }
                  this.dataSets.push({label: team,data: this.seasonsRun})
                }
                this.teamA = this.dataSets[0].label;
                this.teamB = this.dataSets[1].label;
                this.prepareChartData(this.teamA,this.teamB)
            }, function(error) {
                console.log(error)
          });
        },
        prepareChartData: function(teamA,teamB) {
          var indexA,indexB
          this.teamA = teamA
          this.teamB = teamB
          for(var index=0;index<this.dataSets.length;index++){
            if(this.dataSets[index].label==teamA) {
              indexA = index;
            }else if(this.dataSets[index].label==teamB) {
              indexB = index;
            }
          }
          if(indexA == undefined || indexB == undefined){
            console.log("already there");
            return;
          }
          this.chartDataRuns = {
            labels: this.seasonLabels,
            datasets: [
                        {
                          label: this.teamA,
                          backgroundColor: 'rgba(32,162,219,0.3)',
                          fill: true,
                          data: this.dataSets[indexA].data
                        },
                        {
                          label: this.teamB,
                          backgroundColor: 'rgba(196,93,105,0.3)',
                          fill: true,
                          data: this.dataSets[indexB].data
                        }
                      ]
              }
        }
    }
  }
</script>

<style>
.p-0{
  padding: 0px !important;
}
.pt-55{
  padding-top:20px !important;
}
</style>
