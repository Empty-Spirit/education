<!-- 底部导航 -->
<template>
  <div class="bottom_label">
    <div class="footer">
      <div
        v-for="(item,index) in label"
        class="label_name"
        :key="index"
        @click="go(item.src)"
      >{{item.name}}</div>
      <!-- <div class="mine">
        <div
          @click="handleRouter('Mine')"
          :style="{ cursor: 'pointer' }"
        >
          <div>
            <Avatar
              style="background-color: #87d068"
              shape="square"
              icon="ios-person"
              size="large"
            />
          </div>
          <div>我的</div>
        </div>
      </div>
      <div class="btnBox">
        <Button
          type="warning"
          class="btn"
          @click="handleRouter('Teacher', 'student')"
        >发布家教需求</Button>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottomLabel',
  data () {
    return {
      header: false,
      status: 1,
      label: [{
        name: '首页',
        src: '/'
      }, {
        name: '家教信息',
        src: '/'
      }, {
        name: '发布信息',
        src: '/'
      }, {
        name: '消息',
        src: '/'
      }, {
        name: '我的',
        src: 'Mine'
      }]
    }
  },
  methods: {
    go (src) {
      this.$router.push({
        name: src
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.bottom_label {
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 4px solid #eee;
    background: #fff;
  }
  .label_name {
    width: 20%;
    margin: 2px;
    color: #000;
    font-size: 14px;
  }
}
</style>
