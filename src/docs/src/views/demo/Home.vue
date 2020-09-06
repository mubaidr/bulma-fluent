<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Getting started</h1>

        <hr />

        <div class="content">
          <p>You can either:</p>
          <span class="title is-5">Use npm:</span>
          <p>
            <code>npm i bulma-fluent</code>
          </p>
          <span class="title is-5">CDN link</span>
          <p>
            <a href="https://unpkg.com/bulma-fluent/css/"
              >unpkg.com/bulma-fluent</a
            >
          </p>
          <span class="title is-5">Download from the repository:</span>
          <p>
            <a
              href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css"
              >https://github.com/mubaidr/bulma-fluent/tree/master/css</a
            >
          </p>
        </div>

        <div class="content">
          <h2 class="subtitle is-3">Customize</h2>
          <p>
            Simply set your own Sass variables before importing Bulma-fluent.
          </p>
          <p>
            <code lang="scss">
              // Set your brand colors
              <br />$primary: #8A4D76 <br />$info: #FA7C91 <br />$success:
              #757763 <br />$warning: yellow <br />$danger: red <br />$light:
              #ccc <br />$dark: #444
              <br />
              <br />// Update font family <br />$family-sans-serif: "Calibri",
              "Arial"
              <br />
              <br />// Import the Bulma-fluent <br />@import
              "bulma-fluent/bulma.sass"
              <br />
            </code>
          </p>
        </div>

        <div class="content">
          <h2 class="subtitle is-3">Documentation</h2>
          <p>
            You can follow
            <a href="https://bulma.io/documentation/"
              >official bulma documentaion</a
            >
            for all components.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
