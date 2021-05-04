/**
* 左边菜单
*/ 
<template>
  <el-menu
    default-active="2"
    :collapse="collapsed"
    collapse-transition
    router
    :default-active="$route.path"
    unique-opened
    class="el-menu-vertical-demo"
    background-color="#334157"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div class="logobox">
      <img
        class="logoimg"
        src="../assets/img/logo.png"
        alt=""
      >
    </div>
    <el-submenu
      v-for="menu in allmenu"
      :key="menu.menuid"
      :index="menu.menuname"
    >
      <template slot="title">
        <i
          class="iconfont"
          :class="menu.icon"
        ></i>
        <span>{{menu.menuname}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="chmenu in menu.menus"
          :index="'/'+chmenu.url"
          :key="chmenu.menuid"
        >
          <i
            class="iconfont"
            :class="chmenu.icon"
          ></i>
          <span>{{chmenu.menuname}}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
// import { menuList } from '../api/system'
export default {
  name: 'leftnav',
  data () {
    return {
      collapsed: false,
      allmenu: []
    }
  },
  // 创建完毕状态(里面是操作)
  created () {
    // 获取图形验证码
    // menuList().then(res => {
    //   // this.changeMenu(res.data)
    // })
    let res = {
      success: true,
      data: [
        {
          menuid: 80,
          icon: 'li-icon-xiangmuguanli',
          menuname: '基础管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 2,
              icon: 'icon-cat-skuQuery',
              menuname: '用户登录日志',
              hasThird: 'N',
              url: 'basics/LoginGournal',
              menus: null
            }
          ]
        },
        {
          menuid: 33,
          icon: 'li-icon-dingdanguanli',
          menuname: '订单管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 34,
              icon: 'icon-order-manage',
              menuname: '支付记录',
              hasThird: 'N',
              url: 'order/PayList',
              menus: null
            }, {
              menuid: 79,
              icon: 'icon-order-manage',
              menuname: '提现记录',
              hasThird: 'N',
              url: 'order/Withdrawal',
              menus: null
            }
          ]
        }, {
          menuid: 1,
          icon: 'li-icon-xiangmuguanli',
          menuname: '系统管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 78,
              icon: 'icon-cms-manage',
              menuname: '轮播管理',
              hasThird: 'N',
              url: 'system/Carousel',
              menus: null
            }, {
              menuid: 174,
              icon: 'icon-cms-manage',
              menuname: '菜单管理',
              hasThird: 'N',
              url: 'system/Menu',
              menus: null
            }
          ]
        },
        {
          menuid: 71,
          icon: 'li-icon-xitongguanli',
          menuname: '人员管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 74,
              icon: 'icon-cs-manage',
              menuname: '家长管理',
              hasThird: 'N',
              url: 'user/Parent',
              menus: null
            }, {
              menuid: 76,
              icon: 'icon-cs-manage',
              menuname: '教师管理',
              hasThird: 'N',
              url: 'user/Teacher',
              menus: null
            }, {
              menuid: 75,
              icon: 'icon-promotion-manage',
              menuname: '年级管理',
              hasThird: 'N',
              url: 'user/Grade',
              menus: null
            }, {
              menuid: 77,
              icon: 'icon-promotion-manage',
              menuname: '科目管理',
              hasThird: 'N',
              url: 'user/Subject',
              menus: null
            },
            {
              menuid: 72,
              icon: 'icon-cus-manage',
              menuname: '用户管理',
              hasThird: 'N',
              url: 'user/User',
              menus: null
            },
            {
              menuid: 73,
              icon: 'icon-news-manage',
              menuname: '角色管理',
              hasThird: 'N',
              url: 'user/Role',
              menus: null
            }

          ]
        }
      ],
      msg: 'success'
    }
    this.allmenu = res.data

    // 监听
    this.$root.Bus.$on('toggle', value => {
      this.collapsed = !value
    })
  },
  methods: {
    changeMenu (data) {
      let menuList = []
      let obj = {}
      let child = []
      data.map((item) => {
        if (item.sort === '1') {
          console.log(item, '一类')
          obj = {
            id: item.id,
            icon: 'li-icon-xiangmuguanli',
            menuname: item.menuName,
            url: null,
            menus: []
          }
          menuList.push(obj)
        }
      })
      this.getChild(data, menuList)
    },
    getChild (data, menuList) {
      let obj = {}
      data.map(item => {
        if (item.sort !== '1') {
          obj = {
            id: item.id,
            icon: 'li-icon-xiangmuguanli',
            menuname: item.menuName,
            url: null,
            parentId: item.parentId,
            menus: []
          }
          menuList.map(i => {
            if (i.id === item.parentId) {
              i.menus.push(obj)
            }
          })
        }
      })
      this.allmenu = menuList
      console.log(this.allmenu)
    }
  },
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
  text-align: left;
}
.el-menu-item-group__title {
  padding: 0px;
}
.el-menu-bg {
  background-color: #1f2d3d !important;
}
.el-menu {
  border: none;
}
.logobox {
  height: 40px;
  line-height: 40px;
  color: #9d9d9d;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
}
.logoimg {
  height: 40px;
}
</style>