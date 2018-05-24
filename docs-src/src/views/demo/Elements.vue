<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Elements</h1>
      <hr>

      <h2 class="subtitle is-3">Box</h2>
      <hr>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
      </div>

      <br>

      <h2 class="subtitle is-3">Buttons</h2>
      <hr>
      <div>
        <div class="block">
          <a class="button">Default</a>
          <a class="button is-light">Light</a>
          <a class="button is-dark">Dark</a>
          <a class="button is-primary">Primary</a>
          <a class="button is-info">Info</a>
          <a class="button is-success">Success</a>
          <a class="button is-warning">Warning</a>
          <a class="button is-danger">Danger</a>
        </div>
        <div class="block">
          <a class="button is-loading"> Loading
          </a>
          <a class="button is-light is-loading"> Loading
          </a>
          <a class="button is-dark is-loading"> Loading</a>
          <a class="button is-primary is-loading"> Loading
          </a>
          <a class="button is-info is-loading"> Loading
          </a>
          <a class="button is-success is-loading"> Loading
          </a>
          <a class="button is-warning is-loading"> Loading
          </a>
          <a class="button is-danger is-loading"> Loading
          </a>
        </div>

        <div class="block">
          <a class="button is-outlined">Outlined</a>
          <a class="button is-dark is-outlined">Outlined</a>
          <a class="button is-primary is-outlined">Outlined</a>
          <a class="button is-info is-outlined">Outlined</a>
          <a class="button is-success is-outlined">Outlined</a>
          <a class="button is-danger is-outlined">Outlined</a>
        </div>

        <p class="field">
          <a class="button">
            <span class="icon is-small">
              <i class="fa fa-bold" />
            </span>
          </a>
          <a class="button">
            <span class="icon is-small">
              <i class="fa fa-italic" />
            </span>
          </a>
          <a class="button">
            <span class="icon is-small">
              <i class="fa fa-underline" />
            </span>
          </a>
          <a class="button">
            <span class="icon">
              <i class="fa fa-github" />
            </span>
            <span> GitHub
            </span>
          </a>
          <a class="button">
            <span class="icon">
              <i class="fa fa-twitter" />
            </span>
            <span> Twitter
            </span>
          </a>
          <a class="button">
            <span class="icon is-small">
              <i class="fa fa-check" />
            </span>
            <span> Save
            </span>
          </a>
          <a class="button">
            <span class="icon is-small">
              <i class="fa fa-times" />
            </span>
            <span> Delete
            </span>
          </a>
        </p>

        <div class="field is-grouped">
          <p class="buttons has-addons">
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-bold" />
              </span>
              <span> Bold
              </span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-italic" />
              </span>
              <span> Italic
              </span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-underline" />
              </span>
              <span> Underline
              </span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-align-left" />
              </span>
              <span> Left
              </span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-align-center" />
              </span>
              <span> Center
              </span>
            </a>
            <a class="button">
              <span class="icon is-small">
                <i class="fa fa-align-right" />
              </span>
              <span> Right
              </span>
            </a>
          </p>
        </div>
      </div>

      <br><br>

      <h2 class="subtitle is-3">Progress bars</h2>
      <hr>
      <div id="progress">
        <progress class="progress is-primary">0%</progress>
        <progress class="progress" max="100" value="40"> 40%
        </progress>
        <progress class="progress is-primary" max="100" value="50"> 50%
        </progress>
        <progress class="progress is-info" max="100" value="60"> 60%
        </progress>
        <progress class="progress is-success" max="100" value="70"> 70%
        </progress>
        <progress class="progress is-warning" max="100" value="80"> 80%
        </progress>
        <progress class="progress is-danger" max="100" value="90"> 90%
        </progress>
      </div>

      <br><br>

      <h2 class="subtitle is-3">Notifications</h2>
      <hr>
      <div class="columns is-variable is-8 notifications">
        <div class="column">
          <div class="notification">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="notification is-dark">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="notification is-primary">
            <button class="delete" /> Primar lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="notification is-info">
            <button class="delete" /> Info lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div class="column">
          <div class="notification is-light">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="notification is-success">
            <button class="delete" /> Success lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="notification is-warning">
            <button class="delete" /> Warning lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="notification is-danger">
            <button class="delete" /> Danger lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>

      <br>

      <h2 class="subtitle is-3">Tags</h2>
      <hr>
      <div class="tags">
        <span class="tag">Default</span>
        <span class="tag is-light">Light</span>
        <span class="tag is-dark">Dark</span>
        <span class="tag is-black">Black</span>
        <span class="tag is-primary">Primary</span>
        <span class="tag is-link">Link</span>
        <span class="tag is-info">Info</span>
        <span class="tag is-success">Success</span>
        <span class="tag is-warning">Warning</span>
        <span class="tag is-danger">Danger</span>

        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <a class="tag is-link">Technology</a>
              <a class="tag is-delete" />
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <a class="tag is-link">CSS</a>
              <a class="tag is-delete" />
            </div>
          </div>
        </div>
        &nbsp;
        <span class="tag">
          Bar
          <button class="delete is-small" />
        </span>
        <span class="tag is-medium">
          Hello
          <button class="delete is-small" />
        </span>
        <span class="tag is-large">
          World
          <button class="delete" />
        </span>
      </div>

      <br>

      <h2 class="subtitle is-3">Tables</h2>
      <hr>
      <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr class="is-selected">
          <td>Centro comercial</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.columns.notifications .notification {
  margin-bottom: 50px;
}
</style>
