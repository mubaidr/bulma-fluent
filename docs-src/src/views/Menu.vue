<template>
  <div>
    <div class="tabs is-centered has-text-centered">
      <ul>
        <li :class="{'is-active': $route.path === '/home' || $route.path === '/'}">
          <router-link to="/home">
            <span class="icon">
              <i class="fa fa-arrow-right" />
          </span>Getting Started</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/form'}">
          <router-link to="/form">
            <span class="icon">
              <i class="fa fa-wpforms" />
          </span>Form</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/elements'}">
          <router-link to="/elements">
            <span class="icon">
              <i class="fa fa-list-alt" />
          </span>Elements</router-link>
        </li>
        <li :class="{'is-active': $route.path === '/components'}">
          <router-link to="/components">
            <span class="icon">
              <i class="fa fa-object-group" />
          </span>Components</router-link>
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
