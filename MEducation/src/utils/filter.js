// type判断是首页部分数据展示还是list页全部数据展示
// data 接收所有数据并返回用来展示的数据
// num首页部分数据展示数量。不传默认两条
const showList = (type, data, num) => {
  let showList = []
  let _num = num || 2
  if (type) {
    showList = data
  } else {
    showList = data.slice(0, _num)
  }
  return showList
}
export default {
  showList
}
