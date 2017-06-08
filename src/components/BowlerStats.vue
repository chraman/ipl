
<template>
<div>
<h1>Bowler Stats</h1>
<div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8  col-sm-offset-2col-sm-8 col-xs-12">
  <bar :chartData="chartDataWickets" :options="chartOptionsWickets"></bar>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
  <bar :chartData="chartDataDots" :options="chartOptionsDots"></bar>
</div>
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
  <bar :chartData="chartDataWickets" :options="chartOptionsWickets"></bar>
</div>
</div>
</template>

<script>

import Vue from 'vue'
import BarChart from '@/components/BarChart.js'
Vue.component('bar',BarChart)
export default {
  name: 'bowler-stats',
  data() {
    return {
      chartDataDots: {},
      chartOptionsDots: {},
      chartDataWickets: {},
      chartOptionsWickets: {}
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
                for(var i=0;i<5;i++) {
                  this.bowlersDots.push(players.dots[i].bowler);
                  this.ballsDots.push(players.dots[i].count);
                  this.bowlerWickets.push(players.wickets[i].bowler)
                  this.wickets.push(players.wickets[i].count)
                }
                this.prepareChartDataDots(this.bowlersDots , this.ballsDots)
                this.prepareChartDataWickets(this.bowlerWickets , this.wickets)
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
                backgroundColor: '#00D8FF',
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
            }
          ]
        }
        this.chartOptionsWickets = {
            responsive: true, 
            maintainAspectRatio: false
        }
        }
    }
  }
</script>

<style>
</style>
