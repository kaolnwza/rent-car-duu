import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router/router'
import GlobalVariable from './globalVariable' //เก็บตัวแปร global
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Vuelidate from 'vuelidate'
library.add(fas);

Vue.component('fa', FontAwesomeIcon);

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({

  App,
  router,
  GlobalVariable,

  render: h => h(App)
}).$mount('#app')
