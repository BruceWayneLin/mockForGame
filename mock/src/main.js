import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
Vue.config.productionTip = false
import { VueHammer } from 'vue2-hammer'

Vue.use(VueHammer)
library.add(faBars)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
