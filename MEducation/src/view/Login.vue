<template>
  <div class="login">
    <Card :dis-hover="true">
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
      >
        <FormItem prop="user">
          <Input
            type="text"
            v-model="formInline.user"
            placeholder="Username"
          >
          <Icon
            type="ios-person-outline"
            slot="prepend"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="Password"
          >
          <Icon
            type="ios-lock-outline"
            slot="prepend"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formInline')"
          >登陆</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '是输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('成功!')
          this.$router.push({ name: 'Index' })
        } else {
          this.$Message.error('失败!')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.login {
  text-align: center;
  .ivu-card {
    width: 90%;
  }
}
</style>
