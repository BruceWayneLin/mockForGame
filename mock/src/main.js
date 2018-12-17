import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
Vue.config.productionTip = false
import { VueHammer } from 'vue2-hammer'
// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap';

// import plugins individually - require exports-loader
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'

// jquery
global.$ = $
Vue.use(VueHammer)
library.add(faBars)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
