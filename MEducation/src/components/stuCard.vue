<!--学生卡片-->
<template>
  <div>
    <div v-show="header"><Header :title="title"></Header></div>
    <div class="stuCard">
      <Card
        :dis-hover="true"
        v-for="item in showList"
        :key="item.id"
      >
        <Row>
          <Col span="6">
          <img
            :src="item.img"
            class="student-img"
          />
          </Col>
          <Col span="18">
          <Row :wrap="false">
            <Col flex="auto">
            <strong>{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;<span class="desc">{{item.des}}</span></strong>
            </Col>
            <Col flex="none">
            <div class="time">
              2020-4
            </div>
            </Col>
          </Row>

          <div>{{item.school}}&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.school}}</span></div>
          <div>学习科目：<span>{{item.school}}</span></div>
          <div>{{item.school}}</div>
          </Col>
        </Row>
      </Card>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
export default {
  components: { Header },
  name: 'StuCard',
  data () {
    return {
      type: 0,
      studentsList: [
        { name: '学习科目', school: 'sc', des: '学习科目', id: 1, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: 'zhang', school: 'sc', des: '学习科目', id: 2, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: 'zhang', school: 'sc', des: 'ee', id: 3, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: 'zhang', school: 'sc', des: 'ee', id: 4, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' }
      ],
      showList: [], // 用来显示的数据
      header: false,
      title: ''
    }
  },
  mounted () {
    // type判断是首页部分数据展示还是list全部数据展示 0部分 1全部
    this.type = this.$route.query.type
    if(this.type == 1) {
      this.header = true
      this.title = this.$route.query.label
      document.querySelector('.stuCard').style.position = 'relative';
      document.querySelector('.stuCard').style.top = '65px';
    }
    this.showList = this.$filter.showList(this.type, this.studentsList)
  }
}
</script>

<style lang="scss" scoped>
.stuCard {
  .ivu-card {
    height: 162px;
  }
  .student-img {
    width: 100%;
  }
  .ivu-col-span-18 {
    text-align: left;
    padding-left: 20px;
  }
  .desc {
    font-size: 14px;
    color: #f90;
  }
  .time {
    padding: 0 16px;
    font-size: 14px;
  }
}
</style>
