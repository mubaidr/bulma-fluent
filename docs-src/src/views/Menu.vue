<template>
  <div>
    <div class="tabs is-centered has-text-centered">
      <ul>
        <li :class="{'is-active': $route.path === '/home' || $route.path === '/'}">
          <router-link to="/home">
            Getting Started</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/form'}">
          <router-link to="/form">Form</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/elements'}">
          <router-link to="/elements">Elements</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/components'}">
          <router-link to="/components">Components</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {}
}
</script>

<style>

</style>
