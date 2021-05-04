/**
 * 人员管理 年级管理
 */
<template>
  <div class="grade">
    <search-header
      :message="message"
      @search='search'
    ></search-header>
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
        prop="gradeName"
        label="年级名"
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
          <div>{{scope.row.creatTime|timestampToTime}}</div>
        </template>
      </el-table-column>
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

    <!-- 分页组件 -->
    <Pagination v-bind:child-msg="pageparm"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import SearchHeader from '@/components/SearchHeader'
export default {
  name: 'Grade',
  data () {
    return {
      nshow: true, //switch开启
      fshow: false, //switch关闭
      userData: [],
      loading: '',
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      },
      message: {
        name: '用户管理',
        searchData: [
          {
            searchValue: '',
            searchLabel: '输入用户名'
          }, {
            searchValue: '',
            searchLabel: '输入手机号'
          }
        ],
      }
    }
  },
  components: {
    Pagination,
    SearchHeader
  },
  mounted () {
    this.$api.user.gradeList().then(res => {
      this.userData = res.data
    })
  },
  methods: {
    search (data) {
      let obj = {
        id: '',
        gradeName: data.gradeName,
      }
      this.$api.user.gradeList(obj).then(res => {
        console.log(res)
      })
    },
    selectChange () { },
    handleEdit () { }
  },
}
</script>

<style>
</style>

 
</style>

 
 