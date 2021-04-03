import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import bootstrapVue from 'bootstrap-vue'

Vue.use(bootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
