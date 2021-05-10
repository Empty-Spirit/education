<template>
  <div class='studentCard card_header'>
    <List border>
      <ListItem
        v-for="item in showList"
        :key="item.id"
      >
        <div style="flex: 1">
          <Row :wrap="false">
            <Col flex="auto"><strong class="desc">{{item.name}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{item.name}}</strong></Col>
            <Col flex="none">
            <div class="time">
              2020
            </div>
            </Col>
          </Row>
          <Row :wrap="false">
            <Col flex="auto">{{item.name}} </Col>
            <Col flex="none">
            <div class="time">
              2020-5
            </div>
            </Col>
          </Row>
        </div>
      </ListItem>
    </List>
  </div>
</template>
<script>
import Header from './Header'
export default {
  name: 'StudentCard',
  components: { Header },
  props: {
    status: {
      type: String
    }
  },
  data () {
    return {
      type: 0,
      list: [],
      newStudent: [
        { id: 1, name: '新学员一', status: '全部' },
        { id: 2, name: '新学员二', status: 'aa' },
        { id: 3, name: '新学员三', status: '12313' },
        { id: 4, name: '新学员四', status: '全部' },
        { id: 5, name: '新学员五', status: '12313' }
      ],
      newOrder: [
        { id: 1, name: '新单一', status: '全部' },
        { id: 2, name: '新单二', status: 'aa' },
        { id: 3, name: '新单三', status: '12313' },
        { id: 4, name: '新单四', status: '全部' },
        { id: 5, name: '新单五', status: '12313' }
      ],
      header: false,
      showList: [],
      title: ''
    }
  },
  methods: {
    handleRouter () {
      // this.$router.push({
      //     name: ''
      // })
      // this.header = true
    }
  },
  mounted () {
    // 默认部分数据显示 type 为0  label和status判断要显示的是最新学员 还是最新派单记录
    this.type = this.$route.query.label ? 1 : 0
    this.list = this.$route.query.label === '最新学员' || this.status === '最新学员' ? this.newStudent : this.newOrder
    this.showList = this.$filter.showList(this.type, this.list)
  }
}
</script>
<style scoped lang='scss'>
.studentCard {
  margin: 0.1rem 0;
  .ivu-col {
    text-align: left;
  }
  .desc {
    color: #f90;
  }
  .time {
    padding: 0 16px;
    font-size: 14px;
  }
  .ivu-list-item {
    text-align: left;
  }
}
</style>
