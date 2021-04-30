<!-- 首页模块展示 -->
<template>
  <div class="cardLabel">
    <div v-show="header">
      <Header></Header>
    </div>
    <div class="header">
      <Row :wrap="false">
        <Col flex="auto"><span class="title">{{label}}</span></Col>
        <Col flex="none">
        <div
          style="padding: 0 16px"
          @click='goAll'
        >
          全部
          <Icon type="ios-arrow-forward" />
        </div>
        </Col>
      </Row>
    </div>
    <stuCard v-if="label === '热门学员'"></stuCard>
    <StudentCard v-if="label === '最新学员' || label === '最新派单记录'"></StudentCard>
  </div>
</template>
<script>
import stuCard from './stuCard'
import StudentCard from './StudentCard'
import Header from './Header'
export default {
  name: 'cardLabel',
  props: {
    label: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  components: {
    stuCard,
    StudentCard,
    Header
  },
  data () {
    return {
      header: false,
      status: 1
    }
  },
  mounted () {
    // console.log(this.label, this.src)
  },
  methods: {
    goAll () {
      // status是判断对全部学员 最新学员 最新派单记录 三个模块中的哪个模块全部
      if (this.label === '热门学员') {
        this.status = 1
      } else {
        this.status = 2
      }
      this.$router.push({ path: this.src, query: { status: this.status, type: 1 } })
    }
  }
}
</script>
<style scoped lang='scss'>
.cardLabel {
  .title {
    display: inline-block;
    margin-left: 80px;
  }
}
</style>
