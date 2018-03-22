import vue from 'vue'
import VueRouter from 'vue-router'

// home
import home from './views/Home.vue'

vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  root: '/',
  routes: [
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/',
      component: home
    }
  ]
})

export default router
