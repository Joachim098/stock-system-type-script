import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AddStock from '../views/AddStock.vue'
import RemoveStock from '../views/RemoveStock.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/addStock',
    name: 'AddStock',
    component: AddStock
  },{
    path: '/removeStrock',
    name: 'RemoveStock',
    component: RemoveStock
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
