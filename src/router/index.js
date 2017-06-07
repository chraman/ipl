import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import BatsmanStats from '@/components/BatsmanStats'
import BowlerStats from '@/components/BowlerStats'
import TeamStats from '@/components/TeamStats'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tab1'
    },
    {
      path: '/tab1',
      name: 'tab1',
      component: DashBoard
    },
    {
    	path: '/tab2',
    	name: 'tab2',
    	component: BowlerStats
    },
    {
    	path: '/tab3',
    	name: 'tab3',
    	component: BatsmanStats
    },
    {
      path: '/tab4',
      name: 'tab4',
      component: TeamStats
    }
  ]
})
