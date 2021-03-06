import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './lib/rem'
import './style/index.css'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
