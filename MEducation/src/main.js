// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import api from './request/api'
import 'view-design/dist/styles/iview.css'
import './styles/index.scss'
import './utils/rem'
import filter from './utils/filter'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$filter = filter
Vue.use(ViewUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
