
<template>
<div>
  <h1>Team Stats</h1>
  <div class="">
  <div class="row ml-0 mr-0">
  <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55">
  <h3>Choose Team-A</h3>
  <div class="btn-group-vertical" role="group" >
    <button @click="prepareLineChartData(team,teamB)" v-for="team in teamNames" type="button" class="btn btn-xs btn-default">{{team}}</button>
  </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55" style="float:right">
  <h3>Choose Team-B</h3>
  <div class="btn-group-vertical group-small-screen" role="group" >
    <button @click="prepareLineChartData(teamA,team)" v-for="team in teamNames" type="button" class="btn btn-xs btn-default">{{team}}</button>
  </div>
  </div>
  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 p-0">
    <line-chart :chartData="chartDataRuns" :options="chartOptionsRuns"></line-chart>
  </div>
  </div>
  <div class="row ml-0 mr-0">
  <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55">
  <h3>Choose Team-A</h3>
  <div class="btn-group-vertical" role="group" >
    <button @click="prepareRadarChartData(team,teamShotsB)" v-for="team in teamNames" type="button" class="btn btn-xs btn-default">{{team}}</button>
  </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6 p-0 pt-55" style="float:right">
  <h3>Choose Team-B</h3>
  <div class="btn-group-vertical group-small-screen" role="group" >
    <button @click="prepareRadarChartData(teamShotsA,team)" v-for="team in teamNames" type="button" class="btn btn-xs btn-default">{{team}}</button>
  </div>
  </div>
  <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12 p-0">
    <radar-chart :chartData="chartDataShots" :options="chartOptionsShots"></radar-chart>
  </div>
  </div>
</div>
</div>
</template>

<script>

import Vue from 'vue'
import LineChart from '@/components/LineChart.js'
 import RadarChart from '@/components/RadarChart.js'
  Vue.component('line-chart',LineChart)
 Vue.component('radar-chart',RadarChart)
export default {
  name: 'team-stats',
  data() {
    return {
      chartDataRuns: {},
      teamNames: [],
      chartOptionsRuns: {responsive: true, maintainAspectRatio: false},
      chartDataShots: {},
      chartOptionsShots: {responsive: true, maintainAspectRatio: false}
    }
  },
  mounted() {
    this.update()
  },
  methods: {
        update: function() {
          this.$http.get("https://chraman.github.io/ipl/static/json/teamStats.json").then(
            function(response) {
                var seasonsRunsTeam = response.body.team_runs_season;
                var runsByShots = response.body.team_runs_shots;
                this.handleTeamRuns(seasonsRunsTeam)
                this.handleRunsByShots(runsByShots)
            }, function(error) {
                console.log(error)
          });
        },
        handleTeamRuns: function(seasonsRunsTeam) {
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
                this.prepareLineChartData(this.teamA,this.teamB)
        },
        handleRunsByShots: function(runsByShots) {
            console.log(runsByShots)
                this.shots=new Set()
                this.teamsShots= new Set()
                for(var index=0;index<runsByShots.length;index++){
                  this.shots.add(runsByShots[index].batsman_runs)
                  this.teamsShots.add(runsByShots[index].batting_team)
                }
                this.dataSetsShots = [];
                this.shotsLabels = [];
                for (var shots of this.shots) {
                  this.shotsLabels.push(shots);
                }
                this.teamNamesShots = []
                for (var team of this.teamsShots) {
                  this.shotsRun = []
                  this.teamNamesShots.push(team);
                  for(var index=0;index<runsByShots.length;index++) {
                    if(runsByShots[index].batting_team == team ) {
                      this.shotsRun.push(runsByShots[index].runs_by_season)
                    }
                  }
                  this.dataSetsShots.push({label: team,data: this.shotsRun})
                }
                this.teamShotsA = this.dataSetsShots[0].label;
                this.teamShotsB = this.dataSetsShots[1].label;
                this.prepareRadarChartData(this.teamShotsA,this.teamShotsB)
        },
        prepareLineChartData: function(teamA,teamB) {
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
        },
        prepareRadarChartData: function(teamA,teamB) {
          var indexA,indexB
          this.teamShotsA = teamA
          this.teamShotsB = teamB
          console.log(this.teamShotsA,this.teamShotsB)
          console.log(this.dataSetsShots[10].data.length)
          for(var index=0;index<this.dataSets.length;index++){
            if(this.dataSetsShots[index].label==teamA) {
              indexA = index;
            }else if(this.dataSetsShots[index].label==teamB) {
              indexB = index;
            }
          }
          console.log(this.dataSetsShots[indexA].data)
          if(indexA == undefined || indexB == undefined){
            return;
          }
          this.chartDataShots = {
            labels: this.shotsLabels,
            datasets: [
                         {
                            label: this.teamShotsA,
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: this.dataSetsShots[indexA].data
                          },
                          {
                            label: this.teamShotsB,
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            pointBackgroundColor: 'rgba(255,99,132,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,99,132,1)',
                            data: this.dataSetsShots[indexB].data
                          }
                      ]
              }
              console.log(this.chartDataShots)
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
.mr-0{
  margin-right:0px !important;
}
.ml-0{
  margin-left:0px !important;
}
</style>
