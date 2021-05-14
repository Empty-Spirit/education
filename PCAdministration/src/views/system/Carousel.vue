/**
 * 系统管理 轮播管理
 */
<template>
  <div>系统管理 轮播管理</div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      pageparm: {
        pageNo: 1,
        pageSize: 10,
        total: 10
      },
    }
  },
  mounted () {
    this.$api.system.carouselList(this.pageparm).then(res => {
      console.log(res)
    })
  },
}
</script>

<style>
</style>

 