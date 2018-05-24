<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Specials</h1>
        <p>This theme has some extra components implementing fluent design concepts.
        </p>
        <hr>

        <h2 class="subtitle is-3">Loader</h2>
        <p>A simple loader.</p>
        <hr>
        <div class="block loader-container">
          <div class="custom-loader is-small is-primary">
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
          </div>
          <div class="custom-loader is-primary">
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
          </div>
          <div class="custom-loader is-medium is-primary">
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
          </div>
          <div class="custom-loader is-large is-primary">
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
            <div class="dot">
              <div class="inner-dot">
              </div>
            </div>
          </div>
        </div>

        <br/>
        <h2 class="subtitle is-5">How to use</h2>

        <details>
          <summary>
            <span class="tag is-primary">Sample Mark up Code</span>
          </summary>
          <p>
            <pre>
&lt;div class=&quot;custom-loader is-large is-primary&quot;&gt;
  &lt;div class=&quot;dot&quot;&gt;
    &lt;div class=&quot;inner-dot&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;
    &lt;div class=&quot;inner-dot&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;
    &lt;div class=&quot;inner-dot&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;
    &lt;div class=&quot;inner-dot&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;dot&quot;&gt;
    &lt;div class=&quot;inner-dot&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </pre>
          </p>
        </details>
        <br/>
        <p>
          <span class="tag is-info">info:</span> You can also choose any of the color variant i.e.
          <code>is-primary</code>,
          <code>is-warn</code>,
          <code>is-danger</code>,
          <code>is-info</code>,
          <code>is-success</code>,
          <code>is-light</code>,
          <code>is-dark</code>
        </p>
        <p>
          <span class="tag is-info">info:</span> You can also choose any of the size variant i.e.
          <code>is-small</code>,
          <code>is-medium</code>,
          <code>is-large</code>
        </p>
        <br/>
        <h2 class="subtitle is-3">Navigation view</h2>
        <p>The navigation view control provides a collapsible navigation menu for top-level navigation in your app.</p>
        <hr>
        <button class="button is-primary" @click="isNavigationBarOpen = !isNavigationBarOpen">
          <span class="icon is-small">
            <i class="fa fa-bars" />
          </span> &nbsp; Toggle Navigation view</button>
        <br/>
        <br/>
        <div :class="{'is-active': isNavigationBarOpen}" class="navigation-bar">
          <button class="button" title="Close Main Menu" @click="isNavigationBarOpen = !isNavigationBarOpen">
            <span class="icon">
              <i class="fa fa-times" />
            </span>
          </button>
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-box" aria-hidden="true" />
                  </span> Dashboard
                </a>
              </li>
              <li>
                <a class="is-active">
                  <span class="icon">
                    <i class="fas fa-address-card" aria-hidden="true" />
                  </span> Customers</a>
              </li>
            </ul>
            <p class="menu-label">
              Administration
            </p>
            <ul class="menu-list">
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-cog" aria-hidden="true" />
                  </span> Team Settings</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-child" aria-hidden="true" />
                  </span> Manage Your Team</a>
              </li>
              <li class="is-disabled">
                <a>
                  <span class="icon">
                    <i class="fas fa-at" aria-hidden="true" />
                  </span> Invitations</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-cloudversify" aria-hidden="true" />
                  </span> Cloud Storage Settings</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-user" aria-hidden="true" />
                  </span> Authentication</a>
              </li>
            </ul>
            <p class="menu-label">
              Transactions
            </p>
            <ul class="menu-list">
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-amazon-pay" aria-hidden="true" />
                  </span> Payments</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-align-center" aria-hidden="true" />
                  </span> Transfers</a>
              </li>
              <li>
                <a>
                  <span class="icon">
                    <i class="fas fa-briefcase" aria-hidden="true" />
                  </span> Balance</a>
              </li>
            </ul>
          </aside>
        </div>
        <h2 class="subtitle is-5">How to use</h2>

        <details>
          <summary>
            <span class="tag is-primary">Sample Mark up Code</span>
          </summary>
          <p>
            <pre>
&lt;div class=&quot;navigation-bar&quot;&gt; &lt;button class=&quot;delete&quot;/&gt;
Place menu component here
&lt;div&gt;
            </pre>
          </p>
        </details>
        <br/>
        <p>
          <span class="tag is-info">Info:</span> Toggling
          <code>is-active</code> class on
          <code>navigation-bar</code> will open/close it.</p>
        <p>
          <span class="tag is-info">Info:</span> You can also add
          <code>is-static</code> class to make navbar like demo. (Always visible, toggle icon description). </p>
        <p>
          <span class="tag is-warning">Note:</span> Please make sure to add
          <code>has-static-navigation-bar</code> class to body
          <em>if</em> you are using static navigation bar.</p>
        <br>
        <br>

        <h2 class="subtitle is-3">Grid View</h2>
        <p>The Grid View presents a collection of items in rows and columns that can scroll vertically.</p>
        <hr>
        <div class="grid-view is-revealed is-small">
          <button class="grid-item" tabindex="1">A</button>
          <button class="grid-item" tabindex="2">B</button>
          <button class="grid-item" tabindex="3">C</button>
          <button class="grid-item" tabindex="4">D</button>
          <button class="grid-item" tabindex="5">E</button>
          <button class="grid-item" tabindex="6">F</button>
          <button class="grid-item" tabindex="7">G</button>
          <button class="grid-item" tabindex="8">H</button>
          <button class="grid-item" tabindex="9">H</button>
          <button class="grid-item" tabindex="10">I</button>
          <button class="grid-item" tabindex="11">J</button>
          <button class="grid-item" tabindex="12">K</button>
          <button class="grid-item" tabindex="13">L</button>
          <button class="grid-item" tabindex="14">M</button>
        </div>
        <h2 class="subtitle is-5">How to use</h2>
        <details>
          <summary>
            <span class="tag is-primary">Sample Mark up Code</span>
          </summary>
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
        <p>
          <span class="tag is-info">info:</span> You can also choose any of the color variant i.e.
          <code>is-primary</code>,
          <code>is-warn</code>,
          <code>is-danger</code>,
          <code>is-info</code>,
          <code>is-success</code>,
          <code>is-light</code>,
          <code>is-dark</code>
        </p>
        <p>
          <span class="tag is-info">info:</span> Add
          <code>is-revealed</code> class to grid view for focus reveal animation.
        </p>

        <br>

        <h2 class="subtitle is-3">Reveal Focus</h2>
        <h2 class="subtitle is-5">Click a button below or press tab key to see this in action. </h2>
        <p>Animates the border of focusable elements, such as buttons, when the user moves focus to them.</p>
        <hr>
        <div class="is-revealed is-primary has-text-centered">
          <button class="button" tabindex="30">Content</button>
          <button class="button" tabindex="31">Content</button>
          <button class="button" tabindex="32">Content</button>
          <button class="button" tabindex="33">Content</button>
          <button class="button" tabindex="34">Content</button>
          <button class="button" tabindex="35">Content</button>
        </div>
        <br>
        <h2 class="subtitle is-5">How to use</h2>
        <p>
          <span class="tag is-info">info:</span> Add
          <code>is-revealed</code> class to the parent of the container. All focusable childrens will be revealed when focused. </p>
        <p>
          <span class="tag is-info">info:</span> You can also choose any of the color variant i.e.
          <code>is-primary</code>,
          <code>is-warn</code>,
          <code>is-danger</code>,
          <code>is-info</code>,
          <code>is-success</code>,
          <code>is-light</code>,
          <code>is-dark</code>
        </p>

        <br>
        <!--
        <h2 class="subtitle is-3">Acrylic Material</h2>
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
        -->

        <h2 class="subtitle is-3">Highlighted Buttons</h2>
        <hr>
        <div class="block has-text-centered">
          <a class="button is-dark is-highlighted"> Default
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
        <p>
          <span class="tag is-info">info:</span> Add
          <code>is-highlighted</code> class to the button to highlight a button.
        </p>

        <br>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavigationBarOpen: false,
    }
  },
}
</script>

<style>
.custom-buttons .button {
  padding: 1em 2.235em;
  height: 5em;
}

.loader-container .custom-loader {
  margin: 0 25px;
}
</style>
