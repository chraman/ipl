




import { VueCharts } from 'vue-chartjs'
export default VueCharts.Pie.extend({
  mounted () {
    this.renderChart({
      labels: ['true', 'false'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651'
          ],
          data: [40, 60]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})