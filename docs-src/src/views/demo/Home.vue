<template>
  <div>
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
                <a href="https://nodei.co/npm/bulma-fluent/"><img src="https://nodei.co/npm/bulma-fluent.png?compact=true"></a>
              </p>
              <p>
                <code>
                  import 'bulma-fluent/css/bulma.css'
                </code>
                <br/>or import sass file.<br/>
                <code>
                  import 'bulma-fluent/bulma.sass'
                </code>
              </p>
            </li>
            <li>
              <p class="title is-5">
                Download from the repository:
              </p>
              <p>
                <a href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css">https://github.com/mubaidr/bulma-fluent/tree/master/css</a>
              </p>
            </li>
          </ol>
        </div>

        <div class="content">
          <h2 class="subtitle is-3">Customize</h2>
          <p>Simply set your own Sass variables before importing Bulma-fluent.</p>
          <p>
            <pre>
            <code>
// Set your brand colors
$primary: #8A4D76
$info: #FA7C91
$success: #757763
$warning: yellow
$danger: red
$light: #ccc
$dark: #444

// Update font family
$family-sans-serif: "Calibri", "Arial"

// Import the Bulma-fluent
@import "bulma-fluent/bulma.sass"
</code></pre>
          </p>
        </div>

        <div class="content">
          <h2 class="subtitle is-3">Documentation</h2>
          <p>Visit the You can follow
            <a href="https://bulma.io/documentation/">official bulma documentaion</a> or visit
            <router-link to="extras">Extras</router-link> for some new components.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
