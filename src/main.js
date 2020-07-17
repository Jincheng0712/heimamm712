import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



// 导入less
import '@/styles/bass.less'

new Vue({
  render: h => h(App),
}).$mount('#app')
