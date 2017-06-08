import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
 console.log(Radar)
export default Radar.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})