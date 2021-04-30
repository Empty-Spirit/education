<!-- 全部学员list-->
<template>
  <div class="list">
    <!-- 全部学员 -->
    <stu-card v-if="status == 1"></stu-card>
    <!-- 最新学员 最新派单记录 -->
    <student-card v-if="status == 2"></student-card>
  </div>
</template>

<script>
import StuCard from '@/components/stuCard'
import StudentCard from '@/components/StudentCard'
export default {
  name: 'List',
  components: {
    StuCard,
    StudentCard
  },
  data () {
    return {
      status: 1
    }
  },
  mounted () {
    this.status = this.$route.query.status
  }
}
</script>

<style lang="scss">
.list {
}
</style>
