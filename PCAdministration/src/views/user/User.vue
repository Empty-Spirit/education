/**
 * 人员管理 用户管理
 */
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索筛选 -->
    <el-form
      :inline="true"
      :model="formInline"
      class="user-search"
    >
      <el-form-item label="搜索：">
        <el-select
          size="small"
          v-model="formInline.isLock"
          placeholder="请选择"
        >
          <el-option
            label="全部"
            value=""
          ></el-option>
          <el-option
            label="正常"
            value="N"
          ></el-option>
          <el-option
            label="已锁定"
            value="Y"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input
          size="small"
          v-model="formInline.userName"
          placeholder="输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          size="small"
          v-model="formInline.userMobile"
          placeholder="输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="small"
          type="primary"
          icon="el-icon-search"
          @click="search"
        >搜索</el-button>
        <el-button
          size="small"
          type="primary"
          icon="el-icon-plus"
          @click="handleEdit()"
        >添加</el-button>
        <el-button
          size="small"
          type="primary"
          @click="handleunit()"
        >部门设置</el-button>
      </el-form-item>
    </el-form>

    <!--列表-->
    <el-table
      size="small"
      @selection-change="selectChange"
      :data="userData"
      highlight-current-row
      v-loading="loading"
      border
      element-loading-text="拼命加载中"
      style="width: 100%;"
    >
      <el-table-column
        align="center"
        type="selection"
        width="50"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="userName"
        label="用户名"
        width="120"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="roleName"
        label="角色"
        width="120"
      >
      </el-table-column>
      <el-table-column
        align="center"
        sortable
        prop="statusChi"
        label="状态"
        width="120"
      >
      </el-table-column>

      <el-table-column
        align="center"
        sortable
        prop="createTime"
        label="修改时间"
        min-width="120"
      >
        <template slot-scope="scope">
          <div>{{scope.row.createTime|timestampToTime}}</div>
        </template>
      </el-table-column>
      <!-- <el-table-column
        align="center"
        sortable
        prop="statusChi"
        label="状态"
        min-width="50"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="statusChi=='启用'?nshow:fshow"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="editType(scope.$index, scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column> -->
      <el-table-column
        label="操作"
        min-width="300"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteUser(scope.$index, scope.row)"
          >删除</el-button>
          <el-button
            size="mini"
            type="success"
            @click="resetpwd(scope.$index, scope.row)"
          >重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      nshow: true, //switch开启
      fshow: false, //switch关闭
      formInline: {
        page: 1,
        limit: 10,
        deptId: '',
        userName: '',
        userMobile: '',
        isLock: ''
      },
      userData: [],
      loading: ''
    }
  },
  mounted () {
    this.$api.user.userList().then(res => {
      console.log(res.data)
      this.userData = res.data
    })
  },
  methods: {
    search () { },
    selectChange () { }
  },
}
</script>

<style>
</style>

 