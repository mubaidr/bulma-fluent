<template>
  <div>
    <nav class="navbar is-transparent is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" @click="toggleNavBar" :class="{'is-active': isNavigationBarOpen}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu" :class="{'is-active': isNavigationBarOpen}">
        <div class="navbar-start">
          <router-link to="/" title="Getting Started" class="navbar-item" exact-active-class="is-active">
            <span>Getting Started</span>
          </router-link>
          <router-link to="/form" title="Form Inputs" class="navbar-item" active-class="is-active">
            <span>Form Inputs</span>
          </router-link>
          <router-link to="/elements" title="Elements" class="navbar-item" active-class="is-active">
            <span>Elements</span>
          </router-link>
          <router-link to="/components" title="Components" class="navbar-item" active-class="is-active">
            <span>Components</span>
          </router-link>
          <router-link to="/extras" title="Extras" class="navbar-item" active-class="is-active">
            <span>More</span>
          </router-link>
        </div>
        <div class="navbar-end">
          <a href="https://github.com/mubaidr/bulma-fluent" class="navbar-item" title="Github Repository" target="_blank">
            <span class="icon">
              <i class="fas fa-star" aria-hidden="true" />
            </span>
            <span>Github</span>
          </a>
          <a href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css" class="navbar-item" title="Download" target="_blank">
            <span class="icon">
              <i class="fas fa-download" aria-hidden="true" />
            </span>
            <span>Download</span>
          </a>
        </div>
      </div>
    </nav>
    <section class="hero is-primary is-medium">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Bulma Fluent
          </h1>
          <h2 class="subtitle is-4">
            Fluent Design Theme for
            <a href="http://bulma.io" target="_blank">Bulma CSS Framework</a>
            <span class="is-size-6">
              <br> inspired by
              <a href="https://fluent.microsoft.com" target="_blank">Microsoft’s Fluent Design System</a>
            </span>
          </h2>
          <br>
          <p>
            <a class="button is-white is-highlighted" href="https://github.com/mubaidr/bulma-fluent" title="Github Repository" target="_blank">
              <span class="icon">
                <i class="fas fa-star" aria-hidden="true" />
              </span>
              <span>Star on Github</span>
            </a>
            <a class="button is-light" href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css" title="Download Latest Minified Build" target="_blank">
              <span class="icon">
                <i class="fas fa-download" aria-hidden="true" />
              </span>
            </a>
          </p>
          <br/>
          <p>
            <a href="https://patreon.com/mubaidr">
              <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" style="height: 42px; width: auto;" />
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      isNavigationBarOpen: false,
    }
  },

  methods: {
    toggleNavBar() {
      this.isNavigationBarOpen = !this.isNavigationBarOpen
    },
  },
}
</script>

<style>
</style>
