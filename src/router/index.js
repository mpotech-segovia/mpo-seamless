import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/provider',
    name: 'Provider',
    component: () => import('../views/Provider.vue')
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: () => import('../views/Promotions.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/lottery',
    name: 'Lottery',
    component: () => import('../views/Lottery.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
