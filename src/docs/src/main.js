import Vue from 'vue'
import App from './App.vue'
import './assets/animations.sass'
import './assets/fontawesome/css/fontawesome-all.css'
import router from './router'
import './styles.sass'

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})
