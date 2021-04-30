<template>
  <div>
    <Header title="我的订单"></Header>
    <Tabs
      value="dsk"
      class="list"
    >
      <TabPane
        label="待上课"
        name="dsk"
      >
        <List border>
          <ListItem>
            <div class="list-items">
              <div>余额</div>
              <div>0.00</div>
            </div>
          </ListItem>
        </List>
      </TabPane>
      <TabPane
        label="已上课"
        name="ysk"
      >
        <List border>
          <ListItem>
            <div class="list-items">
              <div>余额</div>
              <div>0.00</div>
            </div>
          </ListItem>
        </List>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  components: { Header },
  name: 'OrderList',
  data () {
    return {
      value2: 0
    }
  },
  methods: {
    handleRouter () {
      this.$router.push({
        name: 'Teacher',
        data: 'student'
      })
    }
  }
}
</script>
<style scoped>
.list {
  position: relative;
  top: 65px;
}
.list-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.list .ivu-tabs-nav .ivu-tabs-tab {
  width: 100%;
}
</style>
