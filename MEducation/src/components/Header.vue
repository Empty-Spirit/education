<template>
  <div class="header">
    <div
      @click="handleReturn"
      class="btn-return"
    >
      <Icon type="ios-arrow-back" />
      返回
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data () {
    return {}
  },
  methods: {
    handleReturn () {
      this.$router.history.go(-1)
    }
  }
}
</script>
<style scoped>
.header {
  width: 375px;
  line-height: 50px;
  background-color: #fff;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.btn-return {
  cursor: pointer;
  color: #2d8cf0;
  z-index: 3;
  margin-left: 10px;
  width: 60px;
}
.header .title {
  flex: 1;
  margin-left: -90px;
}
</style>
