<template>
  <div id="app">
    <header-view />
    <div class="content-custom">
      <transition
        name="slide-up"
        appear="appear"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
    <footer-view />
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
}
</script>

<style>
.content-custom {
  min-height: 320px;
}
</style>
