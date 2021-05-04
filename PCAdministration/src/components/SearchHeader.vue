<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{message.name}}</el-breadcrumb-item>
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
      <el-form-item
        label=""
        v-for="(item,index) in message.searchData"
        :key="index"
      >
        <el-input
          size="small"
          v-model="item.searchValue"
          :placeholder="item.searchLabel"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="">
        <el-input
          size="small"
          v-model="formInline.userMobile"
          :placeholder="message.searchTwo"
        ></el-input>
      </el-form-item> -->
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
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
  props: {
    message: {
      type: Object,
    }
  },
  data () {
    return {
      formInline: {
        page: 1,
        limit: 10,
        deptId: '',
        userName: '',
        userMobile: '',
        isLock: ''
      },
    }
  },
  methods: {
    search () {
      this.$emit('search', this.message)
    },
  },
}
</script>