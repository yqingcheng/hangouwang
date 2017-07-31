import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import List from '@/components/List'
import Search from '@/components/Search'
import Shop from '@/components/Shop'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: '/Home',
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/List',
          name: 'List',
          component: List
        },
        {
          path: '/Search',
          name: 'Search',
          component: Search
        },
        {
          path: '/Shop',
          name: 'Shop',
          component: Shop
        }
      ]
    }
  ]
})
