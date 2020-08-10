import '@/assets/sass/main.sass'
// import '@/css/IranYekan.css'
import '@/assets/css/font-style.css'

// import('@/assets/js/jquery.easeScroll')
// import('@/assets/js/jquery.transform2d.js')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import $ from "jquery";
window.$ = $;

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
