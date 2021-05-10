<!--学生卡片-->
<template>
  <div class="stuCard card_header">
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
</template>
<script>
export default {
  name: 'StuCard',
  props: {
    status: {
      type: String
    }
  },
  data () {
    return {
      type: 0,
      studentsList: [
        { name: '学员一', school: 'sc', des: '学习科目', id: 1, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: '学员二', school: 'sc', des: '学习科目', id: 2, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: '学员三', school: 'sc', des: 'ee', id: 3, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: '学员四', school: 'sc', des: 'ee', id: 4, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' }
      ],
      teacherList: [
        { name: '教师一', school: 'sc', des: '学习科目', id: 1, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: '教师二', school: 'sc', des: '学习科目', id: 2, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: '教师三', school: 'sc', des: 'ee', id: 3, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' },
        { name: '教师四', school: 'sc', des: 'ee', id: 4, img: 'https://guanli.jiajiao114.com/admin/img/banner.png' }
      ],
      list: [],
      showList: [] // 用来显示的数据'
    }
  },
  mounted () {
    // 默认部分数据显示 type 为0  label和status判断要显示的是家教信息 还是学生信息
    this.type = this.$route.query.label ? 1 : 0
    this.list = this.$route.query.label === '家教信息' || this.status === '家教信息' ? this.teacherList : this.studentsList
    this.showList = this.$filter.showList(this.type, this.list)
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
