<template>
  <div id="app">
    <header-view/>
    <menu-view/>
    <div class="content-custom">
      <transition :name="transitionName"
                  appear="appear"
                  mode="out-in">
        <router-view/>
      </transition>
    </div>
    <footer-view/>
  </div>
</template>

<script>
import headerView from './views/Header.vue'
import footerView from './views/Footer.vue'
import menuView from './views/Menu.vue'

export default {
  name: 'App',
  components: {
    headerView,
    footerView,
    menuView
  },
  data() {
    return {
      transitionName: 'slide-up'
    }
  },
  watch: {
    $route(to, from) {
      this.setTransition(to, from)
    }
  },
  methods: {
    setTransition(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth === fromDepth) {
        this.transitionName = 'slide-up'
      } else {
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
}
</script>

<style>
.content-custom {
  min-height: 305px;
}
</style>
