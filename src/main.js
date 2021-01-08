/*
 * @Author: zhaopan
 * @Date: 2020-04-28 15:00:09
 * @LastEditors: zhaopan
 * @LastEditTime: 2020-04-30 17:02:09
 */
import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './common/stylus/index.styl'
import './register'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
