/**
 * 人员管理 年级管理
 */
<template>
  <div class="grade">
    <search-header
      :message="message"
      @search='search'
      @add='handleEdit'
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
        prop="createUser"
        label="创建人"
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
          <div>{{scope.row.createTime}}</div>
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
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog
      title="添加年级"
      :visible.sync="showAdd"
    >
      <el-form :model="form">
        <el-form-item
          label="年级名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.gradeName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="close">取 消</el-button>
        <el-button
          type="primary"
          @click="gradeAdd"
        >确 定</el-button>
      </div>
    </el-dialog>

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
      showAdd: false,//是否显示弹窗
      formLabelWidth: '120px',
      nshow: true, //switch开启
      fshow: false, //switch关闭
      userData: [],
      loading: '',
      pageparm: {
        pageNo: 1,
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
      },
      form: {
        gradeName: ''
      }
    }
  },
  components: {
    Pagination,
    SearchHeader
  },
  mounted () {
    this.getGradeList()
  },
  methods: {
    getGradeList () {
      this.$api.grade.gradeList(this.pageparm).then(res => {
        this.userData = res.dataInfo
      })
    },
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
    handleEdit (value, label) {
      if (label) {
        this.form = label
      }
      this.showAdd = true
    },
    close () {
      this.form = {
        gradeName: ''
      }
      this.showAdd = false
    },
    gradeAdd () {
      if (this.form.gradeName === '') {
        this.$message({
          message: '年级名称不能为空',
          type: 'error'
        });
      } else {
        let obj = {}
        if (this.form.id) {
          obj = {
            gradeName: this.form.gradeName,
            id: this.form.id
          }
        }
        this.$api.grade.gradeAdd(obj).then(res => {
          this.getGradeList()
          this.showAdd = false
          this.form = {
            gradeName: ''
          }
        })
      }
    }
  },
}
</script>

<style>
</style>

 
</style>

 
 