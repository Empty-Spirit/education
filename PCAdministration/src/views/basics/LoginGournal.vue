/**
 * 基础菜单 用户登录日志
 */
<template>
  <div>用户登录日志</div>
</template>

<script>
import { userSave } from '../../api/userMG'
export default {
  name: "LoginGournal",
  state () {
    return {
      message: ''
    }
  },
  mounted () {
    // userSave().then(res => {
    //   console.log(res)
    // })
  },
}
</script>

<style>
</style>

 