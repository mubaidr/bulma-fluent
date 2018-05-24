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
            <a href="https://liberapay.com/mubaidr/donate" target="_blank"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
          </p>
        </div>
      </div>
    </section>

    <div :class="{'is-active': isNavigationBarOpen}" class="navigation-view is-static">
      <button class="button is-highlighted" title="Toggle Main Menu" @click="isNavigationBarOpen = !isNavigationBarOpen">
        <span class="icon">
          <i class="fa fa-bars" />
        </span>
      </button>
      <aside class="menu">
        <p class="menu-label">
          Menu
        </p>
        <ul class="menu-list">
          <li>
            <router-link to="/" title="Getting Started" exact-active-class="is-active">
              <span class="icon">
                <i class="fas fa-home" />
              </span>
              <span>Getting Started</span>
            </router-link>
          </li>
          <li>
            <router-link to="/form" title="Form Inputs" active-class="is-active">
              <span class="icon">
                <i class="fas fa-clipboard" />
              </span>
              <span>Form Inputs</span>
            </router-link>
          </li>
          <li>
            <router-link to="/elements" title="Elements" active-class="is-active">
              <span class="icon">
                <i class="fas fa-box" />
              </span>
              <span>Elements</span>
            </router-link>
          </li>
          <li>
            <router-link to="/components" title="Components" active-class="is-active">
              <span class="icon">
                <i class="fas fa-object-group" />
              </span>
              <span>Components</span>
            </router-link>
          </li>
          <li>
            <router-link to="/extras" title="Extras" active-class="is-active">
              <span class="icon">
                <i class="fas fa-list" />
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
            <a href="https://github.com/mubaidr/bulma-fluent" title="Github Repository" target="_blank">
              <span class="icon">
                <i class="fas fa-star" aria-hidden="true" />
              </span>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css" title="Download" target="_blank">
              <span class="icon">
                <i class="fas fa-download" aria-hidden="true" />
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
      isNavigationBarOpen: false,
    }
  },
}
</script>

<style>
</style>
