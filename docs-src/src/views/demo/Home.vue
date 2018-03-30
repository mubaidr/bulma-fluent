<template>
  <div class="home-background">
    <section class="section">
      <div class="container">
        <h1 class="title">Getting started</h1>

        <hr>

        <div class="content">
          <p>
            You can either:
          </p>
          <ol>
            <li>
              use
              <strong>npm</strong> to install the bulma-fluent package
            </li>
            <li>
              use the cdnjs
              <strong>CDN</strong> to link to the stylesheet
            </li>
            <li>
              use the
              <strong>GitHub repository</strong> to get the latest development version
            </li>
          </ol>
        </div>

        <div class="content">
          <ol>
            <li>
              <p class="title is-5">Use npm:
              </p>
              <p>
                <code>npm install bulma-fluent</code>
              </p>
              <br>
            </li>
            <li>
              <p class="title is-5">
                Use the
                <a href="https://cdnjs.com/"
                   target="_blank">cdnjs</a> CDN:
              </p>
              <p>
                <a href="https://cdnjs.com/libraries/bulma-fluent">https://cdnjs.com/libraries/bulma-fluent</a>
              </p>
              <br>
            </li>
            <li>
              <p class="title is-5">
                Download from the repository:
              </p>
              <p>
                <a href="https://github.com/mubaidr/bulma-fluent/tree/master/css">https://github.com/mubaidr/bulma-fluent/tree/master/css</a>
              </p>
              <br>
            </li>
          </ol>
        </div>

        <div class="content">
          <h2 class="subtitle is-4">Documentation</h2>
          <p>Visit the
            <router-link to="extras">Specials</router-link> link to check for new classes, for everything
            other you can follow official bulma documentaion available
          <a href="https://bulma.io">here</a>.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.home-background {
  background: rgb(255, 255, 255); /* Old Browsers */
  background: -webkit-radial-gradient(
    center,
    rgb(255, 255, 255),
    rgb(180, 190, 190)
  ); /*Safari 5.1-6*/
  background: -o-radial-gradient(
    center,
    rgb(255, 255, 255),
    rgb(180, 190, 190)
  ); /*Opera 11.1-12*/
  background: -moz-radial-gradient(
    center,
    rgb(255, 255, 255),
    rgb(180, 190, 190)
  ); /*Fx 3.6-15*/
  background: radial-gradient(
    ellipse at center,
    rgb(255, 255, 255),
    rgb(180, 190, 190)
  ); /*Standard*/
}
</style>
