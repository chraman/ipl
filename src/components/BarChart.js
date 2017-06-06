import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
 console.log(mixins)
export default Bar.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})