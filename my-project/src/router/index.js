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
import denglu from '@/components/denglu'
import zhuce from '@/components/zhuce'
import putong from '@/components/zhucerouter/putong'
import phone from '@/components/zhucerouter/phone'
import zhezhi from '@/components/zhezhi'
import shopcar from '@/components/shopcar'
import jiesuan from '@/components/jiesuan'

Vue.use(Router);

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
        },
        {
          path: '/zhezhi',
          name: 'zhezhi',
          component: zhezhi
        },
        {
          path:'/denglu',
          name:'denglu',
          component:denglu
        },
        {
          path:'/zhuce',
          name:'zhuce',
          component:zhuce,
          redirect: '/putong',
          children:[
            {
              path: '/putong',
              name: 'putong',
              component: putong
            },
            {
              path: '/phone',
              name: 'phone',
              component: phone
            }
          ]
        }
      ]
    },
    {
      path:'/shopcar',
      name:'shopcar',
      component:shopcar
    },
    {
      path:'/jiesuan',
      name:'jiesuan',
      component:jiesuan
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
