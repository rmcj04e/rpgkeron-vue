import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/app.scss'
import './assets/css/libs.scss'
import 'animate.css/animate.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
