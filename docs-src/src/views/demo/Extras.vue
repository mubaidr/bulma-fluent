<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Specials</h1>
        <p>This theme has some extra classes implementing fluent design concepts. </p>
        <hr>

        <h2 class="subtitle is-4">Reveal Highlight</h2>
        <h2 class="subtitle is-5">Press tab key to see this in action. </h2>
        <p>Animates the border of focusable elements, such as buttons, when the user
        moves gamepad or keyboard focus to them.</p>
        <hr>

        <div class="is-revealed is-success">
          <div class="custom-buttons">
            <button class="button is-dark is-large"
                    tabindex="1"
                    autofocus>Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
            <button class="button is-dark is-large">Button</button>
          </div>
        </div>
        <h2 class="subtitle is-5">How to use</h2>
        <p>Apply
          <code>is-revealed</code> class to the parent of the container. All focusable
          childrens will be revealed when focused. You can also choose one of the
          color variant i.e.
          <code>is-primary</code>,
          <code>is-info</code> etc
          <code/>
        </p>
        <br>
        <h2 class="subtitle is-4">More coming soon!</h2>
        <hr>

      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.custom-buttons .button {
  padding: 1em 2.75em;
  height: 5em;
}
</style>
