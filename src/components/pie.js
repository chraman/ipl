




import { VueCharts } from 'vue-chartjs'
export default VueCharts.Pie.extend({
  name: 'pie',
  mounted() {
  	this.renderChart({
  		labels: ['true','false'],
  		dataset: [
			{
				backgroundColor: ['red','blue'],
				data: [40,60]
			}
  		]
  	}, {responsive: true, maintainAspectRatio: false})
  }
})