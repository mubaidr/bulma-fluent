<template>
  <div class="header-background">
    <section class="hero is-dark is-medium">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Bulma-Fluent
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
               href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.css"

               title="Download"
               target="_blank">
              <span class="icon">
                <i class="fa fa-download" />
              </span>
            </a>
            <!-- <a class="button is-primary"
               href="https://twitter.com/@mubaidr"
               title="Twitter"
               target="_blank">
              <span class="icon">
                <i class="fa fa-twitter" />
              </span>
            </a> -->
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeaderView'
}
</script>

<style>
.header-background {
  background: rgb(255, 255, 255); /* Old Browsers */
  background: -webkit-radial-gradient(
    center,
    rgb(255, 255, 255),
    rgb(0, 122, 205)
  ); /*Safari 5.1-6*/
  background: -o-radial-gradient(
    center,
    rgb(255, 255, 255),
    rgb(0, 122, 205)
  ); /*Opera 11.1-12*/
  background: -moz-radial-gradient(
    center,
    rgb(255, 255, 255),
    rgb(0, 122, 205)
  ); /*Fx 3.6-15*/
  background: radial-gradient(
    ellipse at center,
    rgb(255, 255, 255),
    rgb(0, 122, 205)
  ); /*Standard*/
}
</style>
