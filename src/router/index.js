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
    path: '/home-mobile',
    name: 'HomeMobile',
    component: () => import('../views/mobile/HomeMobile.vue')
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
    path: '/game-mobile',
    name: 'GameMobile',
    component: () => import('../views/mobile/GameMobile.vue')
  },
  {
    path: '/popular-mobile',
    name: 'PopularMobile',
    component: () => import('../views/mobile/PopularMobile.vue')
  },
  {
    path: '/provider',
    name: 'Provider',
    component: () => import('../views/Provider.vue')
  },
  {
    path: '/provider-mobile',
    name: 'ProviderMobile',
    component: () => import('../views/mobile/ProviderMobile.vue')
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: () => import('../views/Promotions.vue')
  },
  {
    path: '/promotions-mobile',
    name: 'PromotionsMobile',
    component: () => import('../views/mobile/PromotionsMobile.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/news-mobile',
    name: 'NewsMobile',
    component: () => import('../views/mobile/NewsMobile.vue')
  },
  {
    path: '/news-detail',
    name: 'NewsDetail',
    component: () => import('../views/NewsDetail.vue')
  },
  {
    path: '/lottery',
    name: 'Lottery',
    component: () => import('../views/Lottery.vue')
  },
  {
    path: '/memo',
    name: 'Memo',
    component: () => import('../views/Memo.vue')
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: () => import('../views/Transaction.vue')
  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: () => import('../views/Bonus.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/help-mobile',
    name: 'HelpMobile',
    component: () => import('../views/mobile/HelpMobile.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
