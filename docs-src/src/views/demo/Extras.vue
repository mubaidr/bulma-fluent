<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Specials</h1>
        <p>This theme has some extra classes implementing fluent design concepts. </p>
        <hr>
        <h2 class="subtitle is-4">Grid View</h2>
        <p>The Grid View presents a collection of items in rows and columns that can
        scroll vertically.</p>
        <hr>
        <div class="grid-view is-small">
          <button class="grid-item">A</button>
          <button class="grid-item">B</button>
          <button class="grid-item">C</button>
          <button class="grid-item">D</button>
          <button class="grid-item">E</button>
          <button class="grid-item">F</button>
        </div>

        <br>

        <h2 class="subtitle is-4">Reveal Focus</h2>
        <h2 class="subtitle is-5">Click a button below or press tab key to see this in action. </h2>
        <p>Animates the border of focusable elements, such as buttons, when the user
        moves focus to them.</p>
        <hr>
        <div class="is-revealed is-success has-text-centered">
          <button class="button is-dark"
                  tabindex="1"
                  autofocus>Content</button>
          <button class="button is-dark"
                  tabindex="2">Content</button>
          <button class="button is-dark"
                  tabindex="3">Content</button>
          <button class="button is-dark"
                  tabindex="4">Content</button>
          <button class="button is-dark"
                  tabindex="5">Content</button>
          <button class="button is-dark"
                  tabindex="6">Content</button>
        </div>
        <br>
        <h2 class="subtitle is-5">How to use</h2>
        <p>Add
          <code>is-revealed</code> class to the parent of the container. All focusable
          childrens will be revealed when focused. You can also choose one of the
          color variant i.e.
          <code>is-primary</code>,
          <code>is-info</code>
        </p>

        <br>

        <h2 class="subtitle is-4">Highlighted Buttons</h2>
        <hr>
        <div class="block has-text-centered">
          <a class="button is-highlighted"> Default
          </a>
          <a class="button is-primary is-highlighted"> Primary
          </a>
          <a class="button is-info is-highlighted"> Info
          </a>
          <a class="button is-success is-highlighted"> Success
          </a>
          <a class="button is-warning is-highlighted"> Warning
          </a>
          <a class="button is-danger is-highlighted"> Danger
          </a>
        </div>
        <h2 class="subtitle is-5">How to use</h2>
        <p>Add
          <code>is-highlighted</code> class to the button to highglight a button.
        </p>

        <br>

        <h2 class="subtitle is-4">Acrylic material</h2>
        <p>You can apply acrylic to app surfaces to add depth and help establish a visual
        hierarchy.
        </p>
        <hr>
        <div class="content">Coming soon!</div>
        <h2 class="subtitle is-5">How to use</h2>
        <p>Add
          <code>has-acrylic-material</code> class to elements/components.
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
  padding: 1em 2.235em;
  height: 5em;
}
</style>
