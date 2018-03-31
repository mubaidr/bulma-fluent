<template>
  <div>
    <div class="tabs is-centered has-text-centered">
      <ul>
        <li :class="{'is-active': $route.path === '/home' || $route.path === '/'}">
          <router-link to="/home">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-arrow-right" />
            </span> -->
            Getting Started</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/extras'}">
          <router-link to="/extras">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-box" />
            </span> -->
            Fluent Design</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/form'}">
          <router-link to="/form">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-clipboard" />
            </span> -->
            Form Inputs</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/elements'}">
          <router-link to="/elements">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-list" />
            </span> -->
            Elements</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/components'}">
          <router-link to="/components">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-box" />
            </span> -->
            Components</router-link>
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
