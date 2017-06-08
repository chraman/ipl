import { VueCharts, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default VueCharts.HorizontalBar.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})