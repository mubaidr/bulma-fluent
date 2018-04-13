<template>
  <div>
    <section class="hero is-primary is-medium">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Bulma Fluent
          </h1>
          <h2 class="subtitle is-4">
            Fluent Design Theme for
            <a href="http://bulma.io"
               target="_blank">Bulma CSS Framework</a>
            <span class="is-size-6">
              <br> inspired by
              <a href="https://fluent.microsoft.com"
                 target="_blank">Microsoft’s Fluent Design System</a>
            </span>
          </h2>
          <br>
          <p>
            <a class="button is-highlighted"
               href="https://github.com/mubaidr/bulma-fluent"
               title="Github Repository"
               target="_blank">
              <span>Visit Github Repo</span>
            </a>
            <a class="button is-primary"
               href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css"

               title="Download"
               target="_blank">
              <span class="icon">
                <i class="fa fa-download" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>

    <div :class="{'active': isNavigationBarOpen}"
         class="navigation-bar is-static">
      <button class="button is-dark"
              title="Toggle Main Menu"
              @click="isNavigationBarOpen = !isNavigationBarOpen">
        <span class="icon">
          <i class="fa fa-align-center" />
        </span>
      </button>
      <aside class="menu">
        <p class="menu-label">
          Menu oalalal
        </p>
        <ul class="menu-list">
          <li :class="{'is-active': $route.path === '/home' || $route.path === '/'}">
            <router-link to="/home"
                         title="Getting Started">
              <span class="icon">
                <i class="fas fa-arrow-right" />
              </span>
              <span>Getting Started</span>
            </router-link>
          </li>
          <li :class="{'is-active': $route.path === '/form'}">
            <router-link to="/form"
                         title="Form Inputs">
              <span class="icon">
                <i class="fas fa-clipboard" />
              </span>
              <span>Form Inputs</span>
            </router-link>
          </li>
          <li :class="{'is-active': $route.path === '/elements'}">
            <router-link to="/elements"
                         title="Elements">
              <span class="icon">
                <i class="fas fa-list" />
              </span>
              <span>Elements</span>
            </router-link>
          </li>
          <li :class="{'is-active': $route.path === '/components'}">
            <router-link to="/components"
                         title="Components">
              <span class="icon">
                <i class="fas fa-box" />
              </span>
              <span>Components</span>
            </router-link>
          </li>
          <li :class="{'is-active': $route.path === '/extras'}">
            <router-link to="/extras"
                         title="Extras">
              <span class="icon">
                <i class="fas fa-box" />
              </span>
              <span>Extras</span>
            </router-link>
          </li>
        </ul>
        <p class="menu-label">
          Source
        </p>
        <ul class="menu-list">
          <li>
            <a href="https://github.com/mubaidr/bulma-fluent"
               title="Github Repository"
               target="_blank">
              <span class="icon">
                <i class="fas fa-github"
                   aria-hidden="true" />
              </span>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css"

               title="Download"
               target="_blank">
              <span class="icon">
                <i class="fas fa-download"
                   aria-hidden="true" />
              </span>
              <span>Download</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      isNavigationBarOpen: false
    }
  }
}
</script>

<style>

</style>
