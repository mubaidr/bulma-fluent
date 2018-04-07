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
        <div class="grid-view is-revealed is-medium is-primary">
          <button class="grid-item"
                  tabindex="1"
                  autofocus>A</button>
          <button class="grid-item"
                  tabindex="2">B</button>
          <button class="grid-item"
                  tabindex="3">C</button>
          <button class="grid-item"
                  tabindex="4">D</button>
          <button class="grid-item"
                  tabindex="5">E</button>
          <button class="grid-item"
                  tabindex="6">F</button>
          <button class="grid-item"
                  tabindex="7">G</button>
          <button class="grid-item"
                  tabindex="8">H</button>
          <button class="grid-item"
                  tabindex="9">H</button>
          <button class="grid-item"
                  tabindex="10">I</button>
          <button class="grid-item"
                  tabindex="11">J</button>
          <button class="grid-item"
                  tabindex="12">K</button>
          <button class="grid-item"
                  tabindex="13">L</button>
          <button class="grid-item"
                  tabindex="14">M</button>
          <button class="grid-item"
                  tabindex="15">N</button>
        </div>
        <h2 class="subtitle is-5">How to use</h2>
        <details>
          <summary>Sample Mark up Code</summary>
          <p>
            <pre>
            &lt;div class="grid-view is-medium is-revealed is-success">
              &lt;button class="grid-item"&gt; Content
              &lt;/button&gt;
            &lt;/div&gt;
            </pre>
          </p>
        </details>
        <br>
        <p>Add
          <code>is-revealed</code> class to grid view for focus reveal animation. You can
          also choose any of the color variant i.e.
          <code>is-primary</code>,
          <code>is-info</code>
        </p>

        <br>

        <h2 class="subtitle is-4">Reveal Focus</h2>
        <h2 class="subtitle is-5">Click a button below or press tab key to see this in action. </h2>
        <p>Animates the border of focusable elements, such as buttons, when the user
        moves focus to them.</p>
        <hr>
        <div class="is-revealed is-primary has-text-centered">
          <button class="button is-dark"
                  tabindex="30">Content</button>
          <button class="button is-dark"
                  tabindex="31">Content</button>
          <button class="button is-dark"
                  tabindex="32">Content</button>
          <button class="button is-dark"
                  tabindex="33">Content</button>
          <button class="button is-dark"
                  tabindex="34">Content</button>
          <button class="button is-dark"
                  tabindex="35">Content</button>
        </div>
        <br>
        <h2 class="subtitle is-5">How to use</h2>
        <p>Add
          <code>is-revealed</code> class to the parent of the container. All focusable
          childrens will be revealed when focused. You can also choose any of the
          color variant i.e.
          <code>is-primary</code>,
          <code>is-info</code>
        </p>

        <br>

        <h2 class="subtitle is-4">Acrylic Material</h2>
        <p> Acrylic is a Fluent Design System component that adds physical texture (material)
        and depth to your app. </p>
        <hr>
        <div class="block">
          <div class="box has-acrylic-material">
            Some content
          </div>
          <div class="box has-acrylic-material is-dark">
            Some content
          </div>
        </div>

        <br>
        <h2 class="subtitle is-5">How to use</h2>
        <p>Add
          <code>has-acrylic-material-light</code> (for elements with light background)
          and Add
          <code>has-acrylic-material</code> (for elements with dark background)
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
          <code>is-highlighted</code> class to the button to highlight a button.
        </p>

        <br>
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
