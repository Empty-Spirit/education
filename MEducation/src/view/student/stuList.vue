<!-- 全部学员list-->
<template>
  <div class="list">
    <Header
      v-show="header"
      :title="title"
    ></Header>
    <div class='header_search'>
      <search
        :message='message'
        @searchMessage="search"
      ></search>
    </div>
    <div class='content'>
      <!-- 全部学员 -->
      <stu-card v-if="type == 1"></stu-card>
      <!-- 最新学员 最新派单记录 -->
      <student-card v-if="type == 2"></student-card>
    </div>
  </div>
</template>

<script>
import StuCard from '@/components/stuCard'
import StudentCard from '@/components/StudentCard'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
export default {
  name: 'List',
  components: {
    StuCard,
    StudentCard,
    Header,
    Search
  },
  data () {
    return {
      type: 1,
      header: false,
      title: '',
      // 需要根据什么进行数据筛选
      message: [
        {
          type: 'select',
          label: '地址',
          value: '',
          data: [
            {
              value: '1',
              label: '内蒙古'
            }
          ]
        }, {
          type: 'select',
          label: '',
          value: '',
          data: [
            {
              value: '1',
              label: '通辽市'
            }
          ]
        }, {
          type: 'select',
          label: '',
          value: '',
          data: [
            {
              value: '1',
              label: '科尔沁区'
            }
          ]
        }, {
          type: 'input',
          label: '科目',
          value: ''
        }, {
          type: 'input',
          label: '年级',
          value: ''
        }, {
          type: 'select',
          label: '状态',
          value: '',
          data: [
            {
              value: '1',
              label: '成交'
            }, {
              value: '2',
              label: '未成交'
            }
          ]
        }, {
          type: 'radio',
          label: '性别',
          value: '',
          data: [
            {
              value: '1',
              label: '男'
            }, {
              value: '2',
              label: '女'
            }
          ]
        }

      ]
    }
  },
  mounted () {
    this.type = this.$route.query.type
    if (this.$route.query.label) {
      this.header = true
      this.title = this.$route.query.label
    }
  },
  methods: {
    search (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
.list {
  .content {
    margin-top: 65px;
  }
}
</style>
