<template>
  <div class="main">
    <div class="home-content">
      <div class="banner">
        <Carousel
          autoplay
          loop
        >
          <CarouselItem>
            <img
              class="demo-carousel"
              src="https://guanli.jiajiao114.com/admin/img/banner.png"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              class="demo-carousel"
              src="https://guanli.jiajiao114.com/admin/img/banner.png"
            />
          </CarouselItem>
        </Carousel>
      </div>
      <div class="topCenter">
        <Card :dis-hover="true">
          <div class="center-btn">
            <div>
              <Avatar
                class="avatar-imgs"
                src="https://i.loli.net/2017/08/21/599a521472424.jpg"
              />
            </div>
            <div class="cneter-btnBox">
              <div>快速请家教</div>
              <div
                :style="{ cursor: 'pointer', color: '#f90' }"
                @click="handleRouter('Student', 'student')"
              >
                发布学员信息>
              </div>
            </div>
          </div>
        </Card>
        <Card :dis-hover="true">
          <div class="center-btn">
            <div>
              <Avatar
                class="avatar-imgs"
                src="https://i.loli.net/2017/08/21/599a521472424.jpg"
              />
            </div>
            <div class="cneter-btnBox">
              <div>我要做教员</div>
              <div
                :style="{ cursor: 'pointer', color: '#f90' }"
                @click="handleRouter('Teacher', 'teacher')"
              >
                发布教员信息>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <!-- 遍历data生成各种部分显示的数据 -->
        <cardLabel
          v-for="(item,index) in data"
          :key='index'
          :label='item.name'
          :src='item.src'
          :type='item.type'
        ></cardLabel>
      </div>
    </div>
    <div class="footer_room"></div>
    <bottom-label></bottom-label>
  </div>
</template>
<script>
import cardLabel from '@/components/cardLabel'
import BottomLabel from '@/components/BottomLabel'
export default {
  name: 'Main',
  components: {
    cardLabel,
    BottomLabel
  },
  data () {
    return {
      data: [
        { name: '家教信息', src: 'stuList', type: '1' },
        { name: '热门学员', src: 'stuList', type: '1' },
        { name: '最新学员', src: 'stuList', type: '2' },
        { name: '最新派单记录', src: 'stuList', type: '2' }
      ]
    }
  },
  methods: {
    handleRouter (val, data) {
      this.$router.push({
        name: val,
        params: {
          data: data
        }
      })
    }
  },
  mounted () {
    this.$api.user.userList().then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang='scss' scoped>
.main {
  .demo-carousel {
    width: 100%;
    height: 4rem;
    display: block;
  }
  .home-content {
    clear: both;
    overflow: hidden;
    overflow-y: scroll;
    margin: 0 8px;
  }
  .footer_room {
    height: 80px;
  }

  .btnBox {
    flex: 2;
  }

  .topCenter {
    margin: 0.1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4.1rem;
  }
  .topCenter .ivu-card {
    flex: 1;
  }
  .center-btn {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    height: 0.6rem;
  }
  .cneter-btnBox {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  .avatar-imgs {
    height: 0.6rem;
    width: 0.6rem;
  }
  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
