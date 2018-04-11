<template>
  <div>
    <div class="tabs is-centered has-text-centered">
      <ul>
        <li :class="{'is-active': $route.path === '/home' || $route.path === '/'}">
          <router-link to="/home"
                       title="Getting Started">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-arrow-right" />
            </span> -->
            Getting Started</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/form'}">
          <router-link to="/form"
                       title="Form Inputs">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-clipboard" />
            </span> -->
            Form Inputs</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/elements'}">
          <router-link to="/elements"
                       title="Elements">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-list" />
            </span> -->
            Elements</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/components'}">
          <router-link to="/components"
                       title="Components">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-box" />
            </span> -->
            Components</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/extras'}">
          <router-link to="/extras"
                       title="Extras">
            <!-- <span class="icon is-small is-left">
              <i class="fas fa-box" />
            </span> -->
            Extras</router-link>
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
