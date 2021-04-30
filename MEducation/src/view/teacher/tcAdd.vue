<template>
  <div>
    <Header :title="student ? '发布学员信息' : '发布教员信息'"></Header>
    <Form
      :model="form"
      :label-width="80"
      class="show-content"
    >
      <div v-show="student">
        <FormItem label="姓名">
          <Input
            v-model="form.student.name"
            placeholder="请输入姓名"
          ></Input>
        </FormItem>
        <FormItem
          label="性别"
          :style="{ textAlign: 'left' }"
        >
          <RadioGroup v-model="form.student.sex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="学校">
          <Input
            v-model="form.student.school"
            placeholder="请输入学校"
          ></Input>
        </FormItem>
        <FormItem label="年级">
          <Select
            v-model="form.student.class"
            placeholder="请选择年级"
          >
            <Option value="shanghai">小学</Option>
          </Select>
        </FormItem>
        <FormItem label="授课科目">
          <Select
            v-model="form.student.subject"
            placeholder="请选择科目"
          >
            <Option value="shanghai">英语</Option>
          </Select>
        </FormItem>
        <FormItem label="授课时间">
          <div class="study">
            <Select
              v-model="form.student.week"
              :style="{ width: '49%' }"
              placeholder="请选择频率"
            >
              <Option value="beijing">一周一次</Option>
            </Select>
            <Select
              v-model="form.student.times"
              :style="{ width: '49%' }"
              placeholder="请选择时长"
            >
              <Option value="beijing">每次两小时</Option>
            </Select>
          </div>
          <Input
            v-model="form.student.desc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入具体时间"
          ></Input>
        </FormItem>
        <FormItem label="地址">
          <div class="study">
            <Select
              v-model="form.student.week"
              placeholder="请选择省"
              :style="{ width: '33%' }"
            >
              <Option value="beijing">省</Option>
              <Option value="shanghai">小学</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
            <Select
              v-model="form.student.week"
              placeholder="请选择市"
              :style="{ width: '33%' }"
            >
              <Option value="beijing">市</Option>
              <Option value="shanghai">小学</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
            <Select
              v-model="form.student.week"
              placeholder="请选择区"
              :style="{ width: '33%' }"
            >
              <Option value="beijing">区</Option>
              <Option value="shanghai">小学</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </div>
          <Input
            v-model="form.student.week"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入详细地址"
          ></Input>
        </FormItem>
        <FormItem label="价格">
          <Select
            v-model="form.student.prise"
            placeholder="请选择价格"
          >
            <Option value="beijing">60/小时</Option>
          </Select>
          <!-- <Input v-model="form.student.prise" placeholder="手机号码"></Input> -->
        </FormItem>
        <FormItem label="备注">
          <Input
            v-model="form.student.desc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入备注"
          ></Input>
        </FormItem>
      </div>
      <div v-show="!student">
        <FormItem label="姓名">
          <Input
            v-model="form.teacher.name"
            placeholder="请输入姓名"
          ></Input>
        </FormItem>
        <FormItem label="年龄">
          <Input
            v-model="form.teacher.age"
            placeholder="请输入年级"
          ></Input>
        </FormItem>
        <FormItem
          label="性别"
          :style="{ textAlign: 'left' }"
        >
          <RadioGroup v-model="form.teacher.sex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="学校">
          <Input
            v-model="form.teacher.school"
            placeholder="请输入学校"
          ></Input>
        </FormItem>
        <FormItem label="年级">
          <Input
            v-model="form.teacher.class"
            placeholder="请输入年级"
          ></Input>
        </FormItem>
        <FormItem label="专业">
          <Input
            v-model="form.teacher.subject"
            placeholder="请输入专业"
          ></Input>
        </FormItem>
        <FormItem label="地址">
          <div class="study">
            <Select
              v-model="form.teacher.week"
              placeholder="请选择省"
              :style="{ width: '33%' }"
            >
              <Option value="beijing">省</Option>
              <Option value="shanghai">小学</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
            <Select
              v-model="form.teacher.week"
              placeholder="请选择市"
              :style="{ width: '33%' }"
            >
              <Option value="beijing">市</Option>
              <Option value="shanghai">小学</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
            <Select
              v-model="form.teacher.week"
              placeholder="请选择区"
              :style="{ width: '33%' }"
            >
              <Option value="beijing">区</Option>
              <Option value="shanghai">小学</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </div>
          <Input
            v-model="form.teacher.week"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入详细地址"
          ></Input>
        </FormItem>
        <FormItem label="可授科目">
          <Input
            v-model="form.teacher.class"
            placeholder="请输入可授科目"
          ></Input>
        </FormItem>
        <FormItem label="所获证书">
          <Input
            v-model="form.teacher.desc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入所获证书"
          ></Input>
        </FormItem>
        <FormItem label="家教经验">
          <Input
            v-model="form.teacher.desc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入家教经验"
          ></Input>
        </FormItem>
        <FormItem label="备注">
          <Input
            v-model="form.teacher.desc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入备注"
          ></Input>
        </FormItem>
      </div>
      <Button type="primary">提交需求</Button>
    </Form>
  </div>
</template>
<script>
import Header from './sections/Header'
export default {
  name: 'Index',
  components: {
    Header
  },
  mounted () {
    let params = this.$router.history.current.params
    let data = params.data
    if (data === 'student') {
      this.student = true
      console.log(params)
      if (params.class) {
        this.form.student.class = params.class
      }
      if (params.subject) {
        this.form.student.subject = params.subject
      }
    } else {
      this.student = false
    }
  },
  data () {
    return {
      student: false,
      form: {
        student: {
          name: '',
          sex: 'male',
          school: '',
          class: '',
          subject: '',
          week: '',
          times: '',
          desc: '',
          price: ''
        },
        teacher: {
          name: '',
          sex: 'male',
          school: '',
          class: '',
          subject: '',
          week: '',
          times: '',
          desc: '',
          price: ''
        }
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.show-content {
  position: relative;
  top: 65px;
}
.study {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.1rem;
}
</style>
