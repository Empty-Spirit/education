import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Teacher from '@/components/Teacher'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
  ]
})
