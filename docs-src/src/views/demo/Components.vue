<template>
  <div class="container">
    <section class="section">
      <h1 class="title"> Components
      </h1>

      <hr>

      <h2 class="subtitle is-3">Card</h2>

      <hr>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div>
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br>
      <br>
      <h2 class="subtitle is-3">Breadcrumb</h2>
      <hr>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Bulma</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Components</a>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Breadcrumb</a>
          </li>
        </ul>
      </nav>

      <br>
      <h2 class="subtitle is-3">Dropdown</h2>
      <hr>
      <div class="column is-4 is-offset-4">
        <div :class="{'is-active': dropdownActive}" class="dropdown" @click="toggleDropDown">
          <div class="dropdown-trigger">
            <button class="button" aria-controls="dropdown-menu" aria-haspopup="true">
              <span>Dropdown button</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div id="dropdown-menu" class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a class="dropdown-item" href="#">
                Dropdown item
              </a>
              <a class="dropdown-item is-active" href="#">
                dropdown item
              </a>
              <hr class="dropdown-divider">
              <a class="dropdown-item" href="#">
                With a divider
              </a>
            </div>
          </div>
        </div>
      </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h2 class="subtitle is-3">Menu</h2>
      <hr>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box custom-box">
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
        </div>
      </div>
      <br>
      <br>
      <br>
      <h2 class="subtitle is-3">Messages</h2>
      <hr>
      <div class="columns is-variable is-8 messages">
        <div class="column">
          <article class="message">
            <div class="message-header">
              <p>Default Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>

          <article class="message is-dark">
            <div class="message-header">
              <p>Dark Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>

          <article class="message is-primary">
            <div class="message-header">
              <p>Primary Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>

          <article class="message is-info">
            <div class="message-header">
              <p>Info Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>
        </div>
        <div class="column">
          <article class="message is-light">
            <div class="message-header">
              <p>Light Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>
          <article class="message is-success">
            <div class="message-header">
              <p>Success Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>

          <article class="message is-warning">
            <div class="message-header">
              <p>Warning Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>

          <article class="message is-danger">
            <div class="message-header">
              <p>Danger Message</p>
              <button class="delete" aria-label="delete" />
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur.
            </div>
          </article>
        </div>
      </div>

      <br>
      <h2 class="subtitle is-3">Navbar</h2>
      <hr>
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button is-light" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <br>
      <br>
      <h2 class="subtitle is-3">Pagination</h2>
      <hr>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">45</a>
          </li>
          <li>
            <a class="pagination-link is-current" aria-current="page" aria-label="Page 46">46</a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 47">47</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">86</a>
          </li>
        </ul>
      </nav>

      <br>
      <br>
      <br>
      <h2 class="subtitle is-3">Panel</h2>
      <hr>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <nav class="panel">
            <p class="panel-heading">
              Repositories
            </p>
            <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-left">
                  <i class="fas fa-search" />
                </span>
              </p>
            </div>
            <p class="panel-tabs">
              <a>all</a>
              <a>public</a>
              <a>private</a>
              <a class="is-active">sources</a>
              <a>forks</a>
            </p>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" />
              </span>
              bulma
            </a>
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-book" />
              </span>
              marksheet
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" />
              </span>
              minireset.css
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" />
              </span>
              jgthms.github.io
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-code-branch" />
              </span>
              daniellowtw/infboard
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-code-branch" />
              </span>
              mojs
            </a>
            <div class="panel-block">
              <button class="button is-primary is-fullwidth">
                Reset
              </button>
            </div>
          </nav>
        </div>
      </div>

      <br>
      <br>
      <h2 class="subtitle is-3">Tabs</h2>
      <hr>
      <div class="tabs is-centered">
        <ul>
          <li>
            <a>Pictures</a>
          </li>
          <li class="is-active">
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
      <div class="tabs is-centered">
        <ul>
          <li>
            <a>
              <span class="icon is-small">
                <i class="fas fa-image" />
              </span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small">
                <i class="fas fa-music" />
              </span>
              <span>Music</span>
            </a>
          </li>
          <li class="is-active">
            <a>
              <span class="icon is-small">
                <i class="fas fa-film" />
              </span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small">
                <i class="fas fa-file-alt" />
              </span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: true,
    }
  },
  methods: {
    toggleDropDown() {
      this.dropdownActive = !this.dropdownActive
    },
  },
}
</script>

<style>
.box.custom-box {
  padding: 0;
}

.box.custom-box .menu {
  padding: 0.5em 0;
}

.columns.messages .message {
  margin-bottom: 50px;
}
</style>
