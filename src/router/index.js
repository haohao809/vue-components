import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import count from '@/pages/count'
import forecast from '@/pages/forecast'
import analysis from '@/pages/analysis'
import publish from '@/pages/publish'
import OrderList from '@/pages/orderList'
Vue.use(Router)

export default new Router({
//	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/analysis',
      children:[
      	   {
		    	path: 'count',
		    	name: 'count',
		    	component: count
		    },
		    {
		    	path: 'forecast',
		    	name: 'forecast',
		    	component: forecast
		    },
		    {
		    	path: 'analysis',
		    	name: 'analysis',
		    	component: analysis
		    },
		    {
		    	path: 'publish',
		    	name: 'publish',
		    	component: publish
		    }, 
  
      ]
    },
 		{
		    	path: '/OrderList',
		    	name: 'OrderList',
		    	component: OrderList
		 },
  ]
})
