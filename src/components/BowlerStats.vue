
<template>
<div>
<h1>Bowler Stats</h1>
<div class="row mr-0">

<div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8  col-sm-offset-2 col-sm-8 col-xs-12">
<div class="chart-bg">
  <h2 class="pl-10 chart-heading">Highest wicket takers in IPL</h2>
  <bar :chartData="chartDataWickets" :options="chartOptionsWickets"></bar>
</div>
</div>
</div>
<div class="row mr-0">

<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
<div class="chart-bg mt-20">
<h2 class="chart-heading">Total dots balls</h2>
  <bar :chartData="chartDataDots" :options="chartOptionsDots"></bar>
</div>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
<div class="chart-bg mt-20">
<h2 class="chart-heading">Death overs dot balls</h2>
  <h-bar :chartData="chartDataDeath" :options="chartOptionsDeath"></h-bar>
</div>
</div>
</div>
</div>
</template>

<script>

import Vue from 'vue'
import BarChart from '@/components/BarChart.js'
import HorizontalBarChart from '@/components/HorizontalBarChart.js'
Vue.component('bar',BarChart)
Vue.component('h-bar',HorizontalBarChart)
export default {
  name: 'bowler-stats',
  data() {
    return {
      chartDataDots: {},
      chartOptionsDots: {},
      chartDataWickets: {},
      chartOptionsWickets: {},
      chartDataDeath: {},
      chartOptionsDeath: {}
    }
  },
  mounted() {
    this.update()
  },
  methods: {
        update: function() {
          this.$http.get("https://chraman.github.io/ipl/static/json/BowlerStats.json").then(
            function(response) {
                var players = response.body;
                this.bowlersDots = [];
                this.ballsDots = [];
                this.bowlerWickets=[];
                this.wickets=[];
                this.bowlerDeathDots = []
                this.ballsDeathDots = []
                for(var i=0;i<5;i++) {
                  this.bowlersDots.push(players.dots[i].bowler);
                  this.ballsDots.push(players.dots[i].count);
                  this.bowlerWickets.push(players.wickets[i].bowler)
                  this.wickets.push(players.wickets[i].count)
                  this.bowlerDeathDots.push(players.death_dots[i].bowler)
                  this.ballsDeathDots.push(players.death_dots[i].count)
                }
                this.prepareChartDataDots(this.bowlersDots , this.ballsDots)
                this.prepareChartDataWickets(this.bowlerWickets , this.wickets)
                this.prepareChartDataDeathDots(this.bowlerDeathDots , this.ballsDeathDots)
            }, function(error) {
                console.log(error)
          });
        },
        prepareChartDataDots: function(bowlers,balls) {
          this.chartDataDots = {
            labels: bowlers,
            datasets: [
            {
                label: 'Dot balls',
                backgroundColor: '#990099',
                data: balls
            }
          ]
        }
        this.chartOptionsDots = {
            responsive: true, 
            maintainAspectRatio: false
        }
        },
        prepareChartDataWickets: function(bowlers,wickets) {
          this.chartDataWickets = {
            labels: bowlers,
            datasets: [
            {
                label: 'Wickets',
                backgroundColor: '#7C8CF8',
                data: wickets
            },

          ]
        }
        this.chartOptionsWickets = {
            responsive: true, 
            maintainAspectRatio: false
        }
        },
        prepareChartDataDeathDots: function(bowlerDeathDots,ballsDeathDots) {
          this.chartDataDeath = {
            labels: bowlerDeathDots,
            datasets: [
            {
                label: 'Death Dot Balls',
                backgroundColor: '#22AA99',
                data: ballsDeathDots
            }
          ]
        }
        this.chartOptionsDeath = {
            responsive: true, 
            maintainAspectRatio: false
        }
        }

    }
  }
</script>


<style>
.mr-0{
  margin-right:0px !important;
}
.ml-0{
  margin-left:0px !important;
}
.pl-10{
  padding-left: 10px;
}
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
  margin-top:20px;
}
</style>
