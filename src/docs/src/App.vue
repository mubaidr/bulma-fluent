<template>
  <div id="app">
    <header-view/>
    <div class="content-custom">
      <transition name="slide-right" appear="appear" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <footer-view/>
  </div>
</template>

<script>
import headerView from './views/Header.vue'
import footerView from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    headerView,
    footerView,
  },
  data() {
    return {
      transitionName: 'slide-up',
    }
  },
  watch: {
    $route(to, from) {
      this.setTransition(to, from)
    },
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
    },
  },
}
</script>

<style>
body {
  /* background-image: url('./assets/logo.png'); */
}

hr {
  background-color: #f2f2f2;
}

.content-custom {
  min-height: 320px;
}
</style>
