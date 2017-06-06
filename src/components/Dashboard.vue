<template>
  <div class="container">
  <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
      </div>
 </div>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
        <h1>Does winning toss wins you the match?</h1>
      </div>
      <div style="display:inline-block;" class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <pie></pie>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
        <h1>Or chasing target wins you the match?</h1>
      </div>
      <div style="display:inline-block;" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pt-20">
        <pie></pie>
      </div>
    </div>
    <div class="row pt-20">
      <bowler-stats></bowler-stats>
    </div>
    <div class="row pt-20">
      <batsman-stats></batsman-stats>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import pie from '@/components/pie.js'
import BowlerStats from '@/components/BowlerStats'
import BatsmanStats from '@/components/BatsmanStats'
Vue.component('pie', pie)
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
      wickets:''
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
                var stats = response.body
                this.matches = stats.matches
                this.sixes = stats.sixes
                this.runs = stats.runs
                this.wickets = stats.wickets
                console.log(stats)
            }, function(error) {
                console.log(error)
          });
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
