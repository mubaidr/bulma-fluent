<template>
  <div class="container">
    <section class="section">
      <h1 class="title"> Components
      </h1>

      <hr>

      <h2 class="subtitle">Breadcrumb</h2>
      <nav class="breadcrumb"
           aria-label="breadcrumbs">
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
            <a href="#"
               aria-current="page">Breadcrumb</a>
          </li>
        </ul>
      </nav>

      <h2 class="subtitle">Card</h2>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png"
                 alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png"
                     alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
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

      <h2 class="subtitle">Dropdown</h2>
      <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu">
            <span>Dropdown button</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down"
                 aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu"
             id="dropdown-menu"
             role="menu">
          <div class="dropdown-content">
            <a href="#"
               class="dropdown-item">
              Dropdown item
            </a>
            <a class="dropdown-item">
              Other dropdown item
            </a>
            <a href="#"
               class="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#"
               class="dropdown-item">
              Other dropdown item
            </a>
            <hr class="dropdown-divider">
            <a href="#"
               class="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div>

      <h2 class="subtitle">Menu</h2>
      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Customers</a>
          </li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
        <ul class="menu-list">
          <li>
            <a>Team Settings</a>
          </li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
        </ul>
        <p class="menu-label">
          Transactions
        </p>
        <ul class="menu-list">
          <li>
            <a>Payments</a>
          </li>
          <li>
            <a>Transfers</a>
          </li>
          <li>
            <a>Balance</a>
          </li>
        </ul>
      </aside>

      <h2 class="subtitle">Messages</h2>
      <div>
        <article class="message is-dark">
          <div class="message-header">
            <p>Dark</p>
            <button class="delete"
                    aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
            et dictum
            <a>felis venenatis</a> efficitur. Aenean ac
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
            porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>

        <article class="message is-primary">
          <div class="message-header">
            <p>Primary</p>
            <button class="delete"
                    aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
            et dictum
            <a>felis venenatis</a> efficitur. Aenean ac
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
            porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>

        <article class="message is-link">
          <div class="message-header">
            <p>Link</p>
            <button class="delete"
                    aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
            et dictum
            <a>felis venenatis</a> efficitur. Aenean ac
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
            porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>

        <article class="message is-info">
          <div class="message-header">
            <p>Info</p>
            <button class="delete"
                    aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
            et dictum
            <a>felis venenatis</a> efficitur. Aenean ac
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
            porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>

        <article class="message is-success">
          <div class="message-header">
            <p>Success</p>
            <button class="delete"
                    aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
            et dictum
            <a>felis venenatis</a> efficitur. Aenean ac
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
            porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>

        <article class="message is-warning">
          <div class="message-header">
            <p>Warning</p>
            <button class="delete"
                    aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
            et dictum
            <a>felis venenatis</a> efficitur. Aenean ac
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
            porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>

        <article class="message is-danger">
          <div class="message-header">
            <p>Danger</p>
            <button class="delete"
                    aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
            et dictum
            <a>felis venenatis</a> efficitur. Aenean ac
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
            porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
      </div>

      <h2 class="subtitle">Navbar</h2>
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item"
             href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png"
                 alt="Bulma: a modern CSS framework based on Flexbox"
                 width="112"
                 height="28">
          </a>
          <div class="navbar-burger burger"
               data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample"
             class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item"
               href="https://bulma.io/">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"
                 href="/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item"
                   href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item"
                   href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item"
                   href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item"
                   href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item"
                   href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item"
                   href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active"
                   href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button"
                     data-social-network="Twitter"
                     data-social-action="tweet"
                     data-social-target="http://localhost:4000"
                     target="_blank"
                     href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary"
                     href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
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

      <h2 class="subtitle">Pagination</h2>
      <nav class="pagination"
           role="navigation"
           aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link"
               aria-label="Goto page 1">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link"
               aria-label="Goto page 45">45</a>
          </li>
          <li>
            <a class="pagination-link is-current"
               aria-label="Page 46"
               aria-current="page">46</a>
          </li>
          <li>
            <a class="pagination-link"
               aria-label="Goto page 47">47</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link"
               aria-label="Goto page 86">86</a>
          </li>
        </ul>
      </nav>

      <h2 class="subtitle">Panel</h2>
      <nav class="panel">
        <p class="panel-heading">
          repositories
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small"
                   type="text"
                   placeholder="search">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
        <p class="panel-tabs">
          <a class="is-active">all</a>
          <a>public</a>
          <a>private</a>
          <a>sources</a>
          <a>forks</a>
        </p>
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book"></i>
          </span>
          bulma
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book"></i>
          </span>
          marksheet
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book"></i>
          </span>
          minireset.css
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book"></i>
          </span>
          jgthms.github.io
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch"></i>
          </span>
          daniellowtw/infboard
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-code-branch"></i>
          </span>
          mojs
        </a>
        <label class="panel-block">
          <input type="checkbox"> remember me
        </label>
        <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>

      <h2 class="subtitle">Tabs</h2>
      <div class="tabs">
        <ul>
          <li class="is-active">
            <a>Pictures</a>
          </li>
          <li>
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
          <li class="is-active">
            <a>
              <span class="icon is-small">
                <i class="fas fa-image"></i>
              </span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small">
                <i class="fas fa-music"></i>
              </span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small">
                <i class="fas fa-film"></i>
              </span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small">
                <i class="fas fa-file-alt"></i>
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
export default {}
</script>

<style>

</style>
