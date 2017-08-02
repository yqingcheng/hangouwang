import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import List from '@/components/List'
import Search from '@/components/Search'
import Shop from '@/components/Shop'
import chess from '@/components/foodrouter/chess'
import eag from '@/components/foodrouter/eag'
import food from '@/components/foodrouter/food'
import fuiter from '@/components/foodrouter/fuiter'
import you from '@/components/foodrouter/you'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/List',
          name: 'List',
          component: List
        },

        {
          path: '/Shop',
          name: 'Shop',
          component: Shop
        }
      ]
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      redirect: '/chess',
      children:[
        {
          path: '/chess',
          name: 'chess',
          component: chess
        },
        {
          path: '/eag',
          name: 'eag',
          component: eag
        },
        {
          path: '/food',
          name: 'food',
          component: food
        },
        {
          path: '/fuiter',
          name: 'fuiter',
          component: fuiter
        },
        {
          path: '/you',
          name: 'you',
          component: you
        }
      ]
    }
  ]
})
