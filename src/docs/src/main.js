import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/fontawesome/css/fontawesome-all.css'
import './assets/animations.sass'

import './styles.sass'

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
