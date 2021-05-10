/** 头部数据查找 */
<template>
  <div class='search'>
    <Collapse v-model="search">
      <Panel name="1">
        展开筛选项
        <div
          class='search_content'
          slot="content"
        >
          <span
            class="search_label"
            v-for="(item,index) in message"
            :key="index"
          >
            <span>{{item.label}}</span>
            <Select
              v-if="item.type === 'select'"
              v-model="item.value"
              style="width:200px"
            >
              <Option
                v-for="(obj,index) in item.data"
                :value="obj.value"
                :key="index"
              >{{ obj.label }}</Option>
            </Select>
            <Input
              v-if='item.type === "input"'
              v-model="item.value"
              placeholder="请输入"
              style="width: 300px"
            />
            <RadioGroup
              v-if='item.type === "radio"'
              v-model="item.value"
            >
              <Radio
                v-for="(obj,index) in item.data"
                :key="index"
                :label="obj.label"
              ></Radio>
            </RadioGroup>
          </span>
          <Button
            class="search_btn"
            type="success"
            @click="submit"
          >查找</Button>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    message: {
      type: Array
    },
    searchMessage: {
      type: Function
    }
  },
  data () {
    return {
      search: '0'
    }
  },
  methods: {
    submit () {
      this.$emit('searchMessage', this.message)
      this.search = '0'
    }
  }
}
</script>

<style scoped lang='scss'>
.search {
  position: relative;
  top: 65px;
  .search_content {
    text-align: left;
  }
  .search_label {
    display: inline-block;
    margin-top: 5px;
  }
  .search_btn {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
}
</style>
