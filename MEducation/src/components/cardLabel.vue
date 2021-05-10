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
    <stuCard
      v-if="type === '1'"
      :status='label'
    ></stuCard>
    <StudentCard
      v-if="type === '2'"
      :status='label'
    ></StudentCard>
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
    },
    type: {
      type: String
    }
  },
  components: {
    stuCard,
    StudentCard,
    Header
  },
  data () {
    return {
      header: false
    }
  },
  methods: {
    goAll () {
      this.$router.push({ path: this.src, query: { label: this.label, type: this.type } })
    }
  }
}
</script>
<style scoped lang='scss'>
.cardLabel {
  .title {
    display: inline-block;
    margin-left: 80px;
    line-height: 50px;
  }
}
</style>
