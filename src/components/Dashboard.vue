<template>
  <div>
      <h1>Tournament Stats</h1>
		  <div>
        <table class="table table-striped table-bordered">
          <tr class="table-header">
            <th>{{ matchesLabel }}</th>
            <th>{{ runsLabel }}</th>
            <th>{{ wicketsLabel }}</th>
            <th>{{ sixesLabel }}</th>
          </tr>
          <tr>
            <td>{{ matches }}</td>
            <td>{{ runs }}</td>
            <td>{{ wickets }}</td>
            <td>{{ sixes  }}</td>
          </tr>
        </table>
		</div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0">
    <div class="chart-bg mr-10 ml-10">
    <h2 class="chart-heading">IPL team's run percentage</h2>
       <doughnut-chart :chartData="chartDataTeamRuns" :options="chartOptions"></doughnut-chart>
    </div>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0 pr-0">
        <div class="chart-bg mt-20 ml-10 mr-10">
        <h2 class="chart-heading">Does winning toss wins you the match?</h2>
          <pie-chart :chartData="chartDataToss" :options="chartOptions"></pie-chart>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0 pr-0">
        <div class="chart-bg mt-20 mr-10 ml-10">
          <h2 class="chart-heading">Or chasing down target wins you the match?</h2>
          <pie-chart :chartData="chartDataChase" :options="chartOptions"></pie-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import PieChart from '@/components/PieChart.js'
import DoughnutChart from '@/components/DoughnutChart.js'
import BowlerStats from '@/components/BowlerStats'
import BatsmanStats from '@/components/BatsmanStats'
Vue.component('pie-chart', PieChart)
Vue.component('doughnut-chart', DoughnutChart)
Vue.component('bowler-stats', BowlerStats)
Vue.component('batsman-stats', BatsmanStats)


export default {
  name: 'dasboard',
  data () {
    return {
      msg: 'IPL Dashboard',
      matches:'',
      sixes:'',
      runs:'',
      wickets:'',
      matchesLabel:'Matches',
      sixesLabel:'Runs',
      runsLabel:'Wickets',
      wicketsLabel:'Sixes',
      chartDataTeamRuns: {},
      chartDataChase: {},
      chartDataToss: {},
      chartOptions: {responsive: true, maintainAspectRatio: false}
    }
  },
  mounted() {
    this.update()
  },
  methods: {
        update: function() {
          this.$http.get("https://chraman.github.io/ipl/static/json/iplStats.json").then(
            function(response) {
                var stats = response.body.all_stats
                var chasingWinsTeam = response.body.number_wins_chasing
                var totalTeamRuns = response.body.team_total_run
                this.matches = stats.matches
                this.sixes = stats.sixes
                this.runs = stats.runs
                this.wickets = stats.wickets
                var tosswinPer = response.body.toss_wins.true
                tosswinPer = Math.round( tosswinPer * 10 ) / 10;
                this.prepareTossChart(tosswinPer)
                this.prepareRunsChart(totalTeamRuns)
                this.getChasingWins(chasingWinsTeam)
            }, function(error) {
                console.log(error)
          });
        },
        getChasingWins: function(chasingWinsTeam) {
          var chaseingWins = 0;
          for(var index = 0; index<chasingWinsTeam.length; index++) {
            chaseingWins +=  chasingWinsTeam[index].count
          }
          var chasewinPer = (chaseingWins/this.matches)*100
          chasewinPer = Math.round( chasewinPer * 10 ) / 10;
          this.prepareChasingChart(chasewinPer)

        },
        prepareChasingChart: function(chasewinPer) {
          this.chartDataChase = {
                                  labels: ['Win', 'Loss'],
                                  datasets: [
                                    {
                                      backgroundColor: [
                                        '#316395',
                                        '#FF9900'
                                      ],
                                      data: [chasewinPer, 100-chasewinPer]
                                    }
                                  ]
                                }

        },
        prepareTossChart: function(tosswinPer) {
          this.chartDataToss = {
                                  labels: ['Win', 'Loss'],
                                  datasets: [
                                    {
                                      backgroundColor: [
                                        
                                                         '#109618',
                                                          '#DC3912'
                                      ],
                                      data: [tosswinPer, 100-tosswinPer]
                                    }
                                  ]
                                }

        },
        prepareRunsChart: function(totalTeamRuns) {
          console.log(totalTeamRuns)
          var  teams = []
          var runsPer = []
          for(var index=0;index<totalTeamRuns.length;index++) {
            teams.push(totalTeamRuns[index].batting_team)
            var runPer = (totalTeamRuns[index].count/this.runs)*100
            runPer = Math.round( runPer * 10 ) / 10;
            runsPer.push(runPer)
          }
          this.chartDataTeamRuns= {
                                  labels: teams,
                                  datasets: [
                                    {
                                      backgroundColor: [
                                                          '#3366CC',
                                                          '#DC3912',
                                                          '#FF9900',
                                                          '#109618',
                                                          '#990099',
                                                          '#3B3EAC',
                                                          '#0099C6',
                                                          '#DD4477',
                                                          '#66AA00',
                                                          '#B82E2E',
                                                          '#316395',
                                                          '#994499',
                                                          '#22AA99'
                                                        ],
                                      data: runsPer
                                    }
                                  ]
                                }
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  border-right:5px solid #008747;
}
.table-header{
  background-color: #f9f9f9;
}
td {
 padding: 6px !important;
    border: 1px solid #ddd;
}
th {
  padding: 6px !important;
    border: 1px solid #ddd;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.pt-20{
  padding-top:20px;
}
.mr-0{
  margin-right:0px !important;
}
.ml-0{
  margin-left:0px !important;
}
.pr-0{
  padding-right:0px !important;
}
.pl-0{
  padding-left:0px !important;
}
.chart-bg{
    background: beige;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding-bottom: 20px;
}
.width-pie{
  width:45%;
}
.chart-heading{
  text-align: center;
}
.mt-20{
  margin-top:20px;
}
.mr-10{
  margin-right:10px;
}
.ml-10{
  margin-left:10px;
}
</style>
