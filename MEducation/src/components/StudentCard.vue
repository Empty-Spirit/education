<template>
  <div>
    <div v-show="header"><Header :title="title"></Header></div>
    <div class='studentCard'>
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
  </div>
</template>
<script>
import Header from './Header'
export default {
  name: 'StudentCard',
  components: { Header },
  data () {
    return {
      list: [
        { id: 1, name: '全部', status: '全部' },
        { id: 2, name: '11', status: 'aa' },
        { id: 3, name: '全部', status: '12313' },
        { id: 4, name: 'aaa', status: '全部' },
        { id: 5, name: '11', status: '12313' }
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
    // type判断是首页部分数据展示还是list全部数据展示 0部分 1全部
    this.type = this.$route.query.type
    if(this.type == 1){
      this.header = true
      this.title = this.$route.query.label
      document.querySelector('.studentCard').style.position = 'relative';
      document.querySelector('.studentCard').style.top = '65px';
    }
    this.showList = this.$filter.showList(this.type, this.list)
  }
}
</script>
<style scoped lang='scss'>
.studentsCard {
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
