<template>
  <div>
    <Header title="我的"></Header>
    <List
      border
      class="list-content"
    >
      <ListItem>
        <div
          class="list-items"
          @click="handleRouter('List')"
        >
          <div>我的订单</div>
          <div>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div
          class="list-items"
          @click="handleRouter('Teacher')"
        >
          <div>发布家教需求</div>
          <div>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div class="list-items">
          <div>余额</div>
          <div>0.00</div>
        </div>
      </ListItem>
      <ListItem>
        <div
          class="list-items"
          @click="showMoney = true"
        >
          <div>提现</div>
          <div>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
        <Modal
          v-model="showMoney"
          title="提现"
          @on-ok="handleSubmit"
          @on-cancel="showMoney = false; moneyNumber = ''"
          ok-text="提现"
        >
          <div>
            <Input
              v-model="moneyNumber"
              prefix="logo-yen"
              placeholder="请输入金额"
            />
          </div>
        </Modal>
      </ListItem>
    </List>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  components: { Header },
  name: 'Index',
  data () {
    return {
      showMoney: false,
      moneyNumber: ''
    }
  },
  methods: {
    handleRouter (val) {
      this.$router.push({
        name: val,
        data: 'student'
      })
    },
    handleSubmit () {
      console.log(this.moneyNumber)
    }
  }
}
</script>
<style scoped>
.list-content {
  position: relative;
  top: 65px;
}
.list-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
