<template>
  <div>
    <nav class="navbar is-dark is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="~../assets/logotype12.png" alt="Bulma-fluent" />
        </router-link>
        <div
          :class="{ 'is-active': isNavigationBarOpen }"
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
          @click="toggleNavBar"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        :class="{ 'is-active': isNavigationBarOpen }"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <router-link
            to="/"
            title="Getting Started"
            class="navbar-item"
            exact-active-class="is-active"
          >
            <span>Getting Started</span>
          </router-link>
          <router-link
            to="/form"
            title="Form Inputs"
            class="navbar-item"
            active-class="is-active"
          >
            <span>Form Inputs</span>
          </router-link>
          <router-link
            to="/elements"
            title="Elements"
            class="navbar-item"
            active-class="is-active"
          >
            <span>Elements</span>
          </router-link>
          <router-link
            to="/components"
            title="Components"
            class="navbar-item"
            active-class="is-active"
          >
            <span>Components</span>
          </router-link>
          <router-link
            to="/extras"
            title="Extras"
            class="navbar-item"
            active-class="is-active"
          >
            <span>More</span>
          </router-link>
        </div>
        <div class="navbar-end">
          <a
            href="https://github.com/mubaidr/bulma-fluent"
            class="navbar-item"
            title="Github Repository"
            target="_blank"
          >
            <span class="icon">
              <i class="fas fa-star" aria-hidden="true" />
            </span>
            <span>Github</span>
          </a>
          <a
            href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css"
            class="navbar-item"
            title="Download"
            target="_blank"
          >
            <span class="icon">
              <i class="fas fa-download" aria-hidden="true" />
            </span>
            <span>Download</span>
          </a>
        </div>
      </div>
    </nav>
    <section
      :class="{ 'is-medium': this.$route.path === '/' }"
      class="hero is-dark"
    >
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <br />
          <img src="~../assets/logomark11.png" />
          <h1 class="title is-1">
            Bulma Fluent
          </h1>
          <h2 class="subtitle is-4">
            Fluent Design Theme based on
            <a href="http://bulma.io" target="_blank">Bulma CSS Framework</a>
            <span class="is-size-6">
              <br />
              inspired by
              <a href="https://fluent.microsoft.com" target="_blank"
                >Microsoft’s Fluent Design System</a
              >
            </span>
          </h2>
          <br />
          <p>
            <a href="https://patreon.com/mubaidr">
              <img
                src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png"
                style="height: 36px; width: auto;"
              />
            </a>
          </p>
          <br />
          <p />
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
.hero-body {
  transition: all 600ms ease-out;
}
</style>
