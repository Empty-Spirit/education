<template>
  <div class="subjects">
    <div class="header">
      <Row :wrap="false">
        <Col flex="auto">家教科目</Col>
      </Row>
    </div>
    <div class="content">
      <div class="btnDiv">
        <div
          class="btn"
          v-for="item in showTable"
          :key="item.id"
          @click="handleChose(item)"
        >
          <img :src="item.img" />
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div>
        <Drawer
          :title="title"
          :closable="false"
          v-model="showSub"
        >
          <p
            v-for="item in object"
            :key="item.id"
            @click="handleChoseOne(item)"
          >
            {{ item.name }}
          </p>
        </Drawer>
      </div>
    </div>
    <div v-if="kemuList.length > 6">
      <Icon
        v-if="showMore"
        type="ios-arrow-up"
        @click="showMoreLabel(1)"
      />
      <Icon
        v-else
        type="ios-arrow-down"
        @click="showMoreLabel(0)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Kemu',
  data () {
    return {
      showMore: false,
      kemuList: [
        {
          name: '小学',
          img: 'https://guanli.jiajiao114.com/admin/img/banner.png',
          id: 1
        },
        {
          name: '初中',
          img: 'https://guanli.jiajiao114.com/admin/img/banner.png',
          id: 2
        },
        {
          name: '高中',
          img: 'https://guanli.jiajiao114.com/admin/img/banner.png',
          id: 3
        },
        {
          name: '艺术',
          img: 'https://guanli.jiajiao114.com/admin/img/banner.png',
          id: 4
        },
        {
          name: '语言',
          img: 'https://guanli.jiajiao114.com/admin/img/banner.png',
          id: 5
        },
        {
          name: '其他',
          img: 'https://guanli.jiajiao114.com/admin/img/banner.png',
          id: 6
        },
        {
          name: '其他',
          img: 'https://guanli.jiajiao114.com/admin/img/banner.png',
          id: 7
        }
      ],
      showTable: [],
      title: '科目',
      showSub: false,
      object: [
        { name: '语文', id: 1 },
        { name: '英语', id: 2 },
        { name: '数学', id: 3 },
        { name: '物理', id: 4 },
        { name: '化学', id: 5 },
        { name: '生物', id: 6 }
      ]
    }
  },
  mounted () {
    // 默认显示六条类目
    if (this.kemuList.length > 6) {
      this.showTable = this.kemuList.slice(0, 6)
    }
  },
  methods: {
    handleChose (val) {
      this.title = val.name
      this.showSub = true
    },
    handleChoseOne (val) {
      this.$router.push({
        name: 'Teacher',
        params: {
          data: 'student',
          class: this.title,
          subject: val.name
        }
      })
    },
    // 展示更多类目
    showMoreLabel (type) {
      if (type === 1) {
        // 收起类目
        this.showTable = this.kemuList.slice(0, 6)
        this.showMore = false
      } else {
        // 查看全部类目
        this.showTable = this.kemuList
        this.showMore = true
      }
    }
  }
}
</script>
<style scoped>
.header .ivu-col {
  line-height: 50px;
  border-bottom: 0.01rem solid #eee;
}
.subjects {
  margin: 0.1rem 0;
}
.content {
  padding: 0.1rem 0;
}
.btnDiv {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.btn {
  width: calc(calc(100% / 3) - 10px);
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn img {
  width: 60px;
  height: 60px;
  display: inline-block;
}
.btn span {
  display: inline-block;
}
</style>
