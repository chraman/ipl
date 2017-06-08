<template>
  <div>
      <h1>Tournament Stats</h1>
		  <div>
        <table class="table table-striped table-bordered">
          <tr class="table-header">
            <th>Matches</th>
            <th>Runs</th>
            <th>Wickets</th>
            <th>Sixes</th>
          </tr>
          <tr>
            <td>{{ matches }}</td>
            <td>{{ runs }}</td>
            <td>{{ wickets }}</td>
            <td>{{ sixes  }}</td>
          </tr>
        </table>
		</div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
        <h1>Does winning toss wins you the match?</h1>
      </div>
      <div style="display:inline-block;" class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <pie-chart :chartData="chartDataToss" :options="chartOptions"></pie-chart>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
        <h1>Or chasing target wins you the match?</h1>
      </div>
      <div style="display:inline-block;" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pt-20">
        <pie-chart :chartData="chartDataChase" :options="chartOptions"></pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import PieChart from '@/components/PieChart.js'
import BowlerStats from '@/components/BowlerStats'
import BatsmanStats from '@/components/BatsmanStats'
Vue.component('pie-chart', PieChart)
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
      chartDataChase: {},
      chartDataToss: {},
      chartOptions: {responsive: true, maintainAspectRatio: false}
    }
  },
  mounted() {
    console.log(this.msg)
    this.update()
  },
  methods: {
        update: function() {
          this.$http.get("https://chraman.github.io/ipl/static/json/iplStats.json").then(
            function(response) {
                var stats = response.body.all_stats
                var chasingWinsTeam = response.body.number_wins_chasing
                this.matches = stats.matches
                this.sixes = stats.sixes
                this.runs = stats.runs
                this.wickets = stats.wickets
                console.log(tosswinPer)
                var tosswinPer = response.body.toss_wins.true
                tosswinPer = Math.round( tosswinPer * 10 ) / 10;
                this.prepareTossChart(tosswinPer)
                this.getChasingWins(chasingWinsTeam)
            }, function(error) {
                console.log(error)
          });
        },
        getChasingWins: function(chasingWinsTeam) {
          console.log(chasingWinsTeam)
          var chaseingWins = 0;
          for(var index = 0; index<chasingWinsTeam.length; index++) {
            chaseingWins +=  chasingWinsTeam[index].count
          }
          console.log(chaseingWins)
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
                                        '#41B883',
                                        '#E46651'
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
                                        '#41B883',
                                        '#E46651'
                                      ],
                                      data: [tosswinPer, 100-tosswinPer]
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
</style>
