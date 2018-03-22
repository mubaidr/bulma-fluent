import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import '../../bulma.sass'

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
