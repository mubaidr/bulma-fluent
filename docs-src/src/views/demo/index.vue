<template>
  <div>
    <menu-view/>
    <div class="content-custom">
      <transition :name="transitionName"
                  appear="appear"
                  mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import menuView from './menu.vue'

export default {
  name: 'Demo',
  components: {
    menuView
  },
  data() {
    return {
      transitionName: 'slide-up'
    }
  }
}
</script>

<style>

</style>
