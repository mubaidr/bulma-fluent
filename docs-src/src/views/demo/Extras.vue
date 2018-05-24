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
          <span class="tag is-info">Info</span> You can also choose any of the color variant i.e.
          <code>is-primary</code>,
          <code>is-warn</code>,
          <code>is-danger</code>,
          <code>is-info</code>,
          <code>is-success</code>,
          <code>is-light</code>,
          <code>is-dark</code>
        </p>
        <p>
          <span class="tag is-info">Info</span> You can also choose any of the size variant i.e.
          <code>is-small</code>,
          <code>is-medium</code>,
          <code>is-large</code>
        </p>

        <br/>
        <br/>

        <h2 class="subtitle is-3">Navigation View</h2>
        <p>The navigation view control provides a collapsible navigation menu for top-level navigation in your app.</p>
        <hr>
        <button class="button is-dark" @click="isNavigationBarOpen = !isNavigationBarOpen">
          <span class="icon is-small">
            <i class="fa fa-bars" />
          </span> &nbsp; Toggle Navigation view</button>
        <br/>
        <br/>
        <div :class="{'is-active': isNavigationBarOpen}" class="navigation-view">
          <button class="button is-dark" title="Close Main Menu" @click="isNavigationBarOpen = !isNavigationBarOpen">
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
&lt;div class=&quot;navigation-view&quot;&gt; &lt;button class=&quot;delete&quot;/&gt;
Place menu component here
&lt;div&gt;
            </pre>
          </p>
        </details>
        <br/>
        <p>
          <span class="tag is-info">Info</span> Toggling
          <code>is-active</code> class on
          <code>navigation-view</code> will open/close it.</p>
        <p>
          <span class="tag is-info">Info</span> You can also add
          <code>is-static</code> class to make navbar like demo. (Always visible, toggle icon description). </p>
        <p>
          <span class="tag is-warning">Note</span> You can also use dark varient by adding
          <code>is-dark</code> class. </p>
        <p>
          <span class="tag is-warning">Note</span> Please make sure to add
          <code>has-static-navigation-view</code> class to body
          <em>if</em> you are using static navigation bar.</p>

        <br>

        <h2 class="subtitle is-3">Highlighted Buttons</h2>
        <hr>
        <div class="block has-text-centered custom-buttons">
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
          <span class="tag is-info">Info</span> Add
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
  margin: 1em;
}

.loader-container .custom-loader {
  margin: 25px;
}
</style>
