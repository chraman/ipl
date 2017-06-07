import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import BatsmanStats from '@/components/BatsmanStats'
import BowlerStats from '@/components/BowlerStats'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
    	path: '/bowlerStats',
    	name: '/BowlerStats',
    	component: BowlerStats
    },
    {
    	path: '/batsmanStats',
    	name: '/BatsmanStats',
    	component: BatsmanStats
    }
  ]
})
