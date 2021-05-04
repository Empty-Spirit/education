// 导入组件
import Vue from 'vue';
import Router from 'vue-router';
// 登录
import login from '@/views/login';
// 首页
import index from '@/views/index';
/**
 * 基础菜单
 */
// 商品管理
import LoginGournal from '@/views/basics/LoginGournal'; //用户登录日志
import PayList from '@/views/order/PayList'; //支付记录
import Withdrawal from '@/views/order/Withdrawal'; //提现记录
import Carousel from '@/views/system/Carousel'; //轮播管理
import Menu from '@/views/system/Menu'; //菜单管理
import Student from '@/views/user/Student'; //学生管理
import Teacher from '@/views/user/Teacher'; //教师管理
import Grade from '@/views/user/Grade'; //年级管理
import Role from '@/views/user/Role'; //角色管理
import Subject from '@/views/user/Subject'; //科目管理
import User from '@/views/user/User'; //用户管理


// 启用路由
Vue.use(Router);

// 导出路由 
export default new Router({
    routes: [{
        path: '/',
        name: '',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
        path: '/login',
        name: '登录',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
      path: '/index',
      name: '首页',
      component: index,
      iconCls: 'el-icon-tickets',
      children: [{
          path: '/basics/LoginGournal',
          name: '商品管理',
          component: LoginGournal,
          meta: {
              requireAuth: true
          }
      }]
  }, {
        path: '/order',
        name: '订单管理',
        component: index,
        iconCls: 'el-icon-tickets',
        children: [{
            path: '/order/payList',
            name: '支付记录',
            component: PayList,
            meta: {
                requireAuth: true
            }
        },{
          path: '/order/Withdrawal',
          name: '提现记录',
          component: Withdrawal,
          meta: {
              requireAuth: true
          }
      }]
    }, {
        path: '/system',
        name: '系统管理',
        component: index,
        iconCls: 'el-icon-tickets',
        children: [{
            path: '/system/Carousel',
            name: '轮播管理',
            component: Carousel,
            meta: {
                requireAuth: true
            }
        },{
          path: '/system/Menu',
          name: '菜单管理',
          component: Menu,
          meta: {
              requireAuth: true
          }
      }]
    }, {
        path: '/user',
        name: '人员管理',
        component: index,
        iconCls: 'el-icon-tickets',
        children: [{
            path: '/user/Student',
            name: '学生管理',
            component: Student,
            meta: {
                requireAuth: true
            }
        },{
          path: '/user/Teacher',
          name: '教师管理',
          component: Teacher,
          meta: {
              requireAuth: true
          }
      },{
        path: '/user/Subject',
        name: '科目管理',
        component: Subject,
        meta: {
            requireAuth: true
        }
      },{
          path: '/user/Grade',
          name: '年级管理',
          component: Grade,
          meta: {
              requireAuth: true
          }
      },{
          path: '/user/User',
          name: '用户管理',
          component: User,
          meta: {
              requireAuth: true
          }
      },{
          path: '/user/Role',
          name: '角色管理',
          component: Role,
          meta: {
              requireAuth: true
          }
      }]
    }]
})