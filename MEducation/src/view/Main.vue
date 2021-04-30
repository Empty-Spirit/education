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
                @click="handleRouter('Teacher', 'student')"
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
        <!-- 科目 -->
        <Subjects></Subjects>
        <!-- 学员简介 -->
        <cardLabel
          label="热门学员"
          src="stuList"
        ></cardLabel>
        <cardLabel
          label="最新学员"
          src="stuList"
        ></cardLabel>
        <cardLabel
          label="最新派单记录"
          src="stuList"
        ></cardLabel>
        <!-- 最新学员 -->
        <!-- <StudentCard title="最新学员"></StudentCard> -->
        <!-- 派单记录 -->
        <!-- <StudentCard title="最新派单记录"></StudentCard> -->
      </div>
    </div>
    <div class="footer_room"></div>
    <div class="footer">
      <div class="mine">
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
      </div>
    </div>
  </div>
</template>
<script>
import cardLabel from '@/components/cardLabel'
import StudentCard from '@/components/StudentCard'
import Subjects from '@/components/Subjects'
export default {
  name: 'Main',
  components: {
    cardLabel,
    StudentCard,
    Subjects
  },
  data () {
    return {}
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
    // let high = document.documentElement.clientHeight;
    // (document.querySelector('.home-content').style.height = high - 80 + 'px'),
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
  .mine {
    flex: 1;
    height: 0.6rem;
    border-radius: 0.04rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btnBox {
    flex: 2;
  }
  .btnBox .btn {
    width: 3rem;
    height: 50px;
    cursor: pointer;
  }
  .topCenter {
    margin: 0.1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
}
</style>
