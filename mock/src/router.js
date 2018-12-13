import Vue from 'vue'
import Router from 'vue-router'
import MapHome from './views/MapHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MapHome',
      component: MapHome
    },
    {
      path: '/DashBoard',
      name: 'DashBoard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/DashBoard.vue')
    }
  ]
})
