import vue from 'vue'
import VueRouter from 'vue-router'

// home
import home from './views/Home.vue'
import demo from './views/demo/index.vue'
import view404 from './views/404.vue'

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
    },
    {
      path: '/demo',
      component: demo
    },
    {
      path: '*',
      component: view404
    }
  ]
})

export default router
