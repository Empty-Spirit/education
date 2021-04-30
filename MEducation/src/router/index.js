import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
import Main from '@/view/Main'
import Login from '@/view/Login'
import Mine from '@/view/mine/Mine'
import Teacher from '@/view/teacher/Teacher'
import List from '@/view//mine/orderList'
import StuList from '@/view/student/stuList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main
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
    }, {
      path: '/stuList',
      name: 'StuList',
      component: StuList
    }
  ]
})
