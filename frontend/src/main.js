import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router/router'
import GlobalVariable from './globalVariable' //เก็บตัวแปร global


Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({

  App,
  router,
  GlobalVariable,
  render: h => h(App)
}).$mount('#app')
