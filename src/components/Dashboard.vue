<template>
  <div class="container">
  <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1>Tournament Stats</h1>
		<div>
        <table class="table table-striped table-bordered">
          <tr>
            <th>Matches</th>
            <th>Runs</th>
            <th>Wickets</th>
            <th>Sixes</th>
          </tr>
          <tr>
            <td>577</td>
            <td>1022012</td>
            <td>10000</td>
            <td>20000</td>
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
        <h1>Or chasing taget wins you the match?</h1>
      </div>
      <div style="display:inline-block;" class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <pie></pie>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import pie from '@/components/pie.js'
Vue.component('pie', pie)
console.log(pie)
export default {
  name: 'dasboard',
  data () {
    return {
      msg: 'IPL Dashboard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
