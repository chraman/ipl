import { VueCharts } from 'vue-chartjs'
const { reactiveProp } = VueCharts.mixins
export default VueCharts.Doughnut.extend({
 mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})