<template>
  <div class="container">
    <section id="box"
             class="section">
      <h1 class="title">Elements</h1>
      <hr>

      <h2 class="subtitle is-4">Box:</h2>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
                   alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong> John Smith
                </strong>
                <small> @johnsmith
                </small>
                <small> 31m
                </small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
                turpis.
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-reply" />
                  </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-retweet" />
                  </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-heart" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>

      <br>

      <h2 class="subtitle is-4">Buttons:</h2>
      <div>
        <h2 class="subtitle">Normal
        </h2>
        <div class="block">
          <a class="button"> Default
          </a>
          <a class="button is-primary"> Primary
          </a>
          <a class="button is-info"> Info
          </a>
          <a class="button is-success"> Success
          </a>
          <a class="button is-warning"> Warning
          </a>
          <a class="button is-danger"> Danger
          </a>
        </div>
        <h2 class="subtitle">Revealed (is-focused)
        </h2>
        <div class="block">
          <a class="button is-focused"> Default
          </a>
          <a class="button is-primary is-focused"> Primary
          </a>
          <a class="button is-info is-focused"> Info
          </a>
          <a class="button is-success is-focused"> Success
          </a>
          <a class="button is-warning is-focused"> Warning
          </a>
          <a class="button is-danger is-focused"> Danger
          </a>
        </div>

        <h2 class="subtitle">Loading
        </h2>
        <div class="block">
          <a class="button is-loading"> Loading
          </a>
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

        <h2 class="subtitle">Icons
        </h2>
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
          <a class="button is-primary">
            <span class="icon">
              <i class="fa fa-twitter" />
            </span>
            <span> Twitter
            </span>
          </a>
          <a class="button is-success">
            <span class="icon is-small">
              <i class="fa fa-check" />
            </span>
            <span> Save
            </span>
          </a>
          <a class="button is-danger">
            <span> Delete
            </span>
            <span class="icon is-small">
              <i class="fa fa-times" />
            </span>
          </a>
        </p>

        <h2 class="subtitle">Outlined
        </h2>
        <div class="block">
          <a class="button is-outlined"> Outlined
          </a>
          <a class="button is-primary is-outlined"> Outlined
          </a>
          <a class="button is-info is-outlined"> Outlined
          </a>
          <a class="button is-success is-outlined"> Outlined
          </a>
          <a class="button is-warning is-outlined"> Outlined
          </a>
          <a class="button is-danger is-outlined"> Outlined
          </a>
        </div>

        <h2 class="subtitle">Grouped
        </h2>
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
        <br>
        <h2 class="subtitle">Sizes
        </h2>
        <div class="block">
          <a class="button is-small"> Small
          </a>
          <a class="button"> Normal
          </a>
          <a class="button is-medium"> Medium
          </a>
          <a class="button is-large"> Large
          </a>
        </div>
      </div>

      <br>

      <h2 class="subtitle is-4">Progress bars:</h2>
      <div id="progress">
        <h2 class="subtitle"> Indeterminate
        </h2>
        <progress class="progress"
                  max="1000" />
        <h2 class="subtitle"> Determinate
        </h2>
        <progress class="progress"
                  max="100"
                  value="15"> 15%
        </progress>
        <progress class="progress is-primary"
                  max="100"
                  value="30"> 30%
        </progress>
        <progress class="progress is-info"
                  max="100"
                  value="45"> 45%
        </progress>
        <progress class="progress is-success"
                  max="100"
                  value="60"> 60%
        </progress>
        <progress class="progress is-warning"
                  max="100"
                  value="75"> 75%
        </progress>
        <progress class="progress is-danger"
                  max="100"
                  value="90"> 90%
        </progress>
      </div>

      <br>

      <h2 class="subtitle is-4">Notifications:</h2>
      <div class="columns">
        <div class="column">
          <div class="notification">
            <button class="delete" /> Lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </div>
          <div class="notification is-primary">
            <button class="delete" /> Primar lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </div>
          <div class="notification is-info">
            <button class="delete" /> Info lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </div>
        </div>
        <div class="column">
          <div class="notification is-success">
            <button class="delete" /> Success lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </div>
          <div class="notification is-warning">
            <button class="delete" /> Warning lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </div>
          <div class="notification is-danger">
            <button class="delete" /> Danger lorem ipsum dolor sit amet,
            <a href="#">consectetur
            </a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </div>
        </div>
      </div>

      <br>

      <h2 class="subtitle is-4">Tag:</h2>
      <div class="tags">
        <span class="tag is-white"> White
        </span>
        <span class="tag is-light"> Light
        </span>
        <span class="tag is-dark"> Dark
        </span>
        <span class="tag is-black"> Black
        </span>
        <span class="tag is-primary"> Primary
        </span>
        <span class="tag is-info"> Info
        </span>
        <span class="tag is-success"> Success
        </span>
        <span class="tag is-warning"> Warning
        </span>
        <span class="tag is-danger"> Danger
        </span>
        <span class="tag is-primary is-medium"> Medium
        </span>
        <span class="tag is-info is-large"> Large
        </span>
        <span class="tag is-success"> Bar
          <button class="delete is-small" />
        </span>
        <span class="tag is-warning is-medium"> Hello
          <button class="delete is-small" />
        </span>
        <span class="tag is-danger is-large"> World
          <button class="delete" />
        </span>
      </div>

      <br>

      <h2 class="subtitle is-4">Tables:</h2>
      <div class="columns">
        <div class="column">
          <h2 class="subtitle">Default</h2>
          <table class="table is-fullwidth is-hoverable">
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
        </div>
        <div class="column">

          <h2 class="subtitle">Striped</h2>
          <table class="table is-fullwidth is-striped">
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
            <tr>
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
        </div>
        <div class="column">
          <h2 class="subtitle">Bordered</h2>
          <table class="table is-fullwidth is-bordered is-hoverable">
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
            <tr>
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
