import vue from 'vue'
import VueRouter from 'vue-router'
import View404 from './views/404.vue'
import Components from './views/demo/Components.vue'
import Elements from './views/demo/Elements.vue'
import Extras from './views/demo/Extras.vue'
import Form from './views/demo/Form.vue'
// home
import Home from './views/demo/Home.vue'


vue.use(VueRouter)

const router = new VueRouter({
  root: '/',
  routes: [
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/Form',
      component: Form,
    },
    {
      path: '/Elements',
      component: Elements,
    },
    {
      path: '/Components',
      component: Components,
    },
    {
      path: '/Extras',
      component: Extras,
    },
    {
      path: '*',
      component: View404,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
