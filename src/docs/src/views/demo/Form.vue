<template>
  <div class="container">
    <section class="section">
      <h1 class="title"> Form Inputs
      </h1>
      <hr>
      <div class="column is-6 is-offset-3">
        <div class="box form-box">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

          <div class="field">
            <label class="label">Nick</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Text input">
              <span class="icon is-small is-left">
                <i class="fas fa-user" />
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email input">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox is-primary">
                <input type="checkbox" checked> I agree to the
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="toggle is-primary">
                <input type="checkbox" checked> Subscribe to news-letter
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question"> Yes
              </label>
              <label class="radio">
                <input type="radio" name="question" checked> No
              </label>
            </div>
          </div>

          <div class="field has-addons">
            <p class="control is-expanded">
              <span class="select is-fullwidth">
                <select name="country">
                  <option value="Argentina">Argentina
                  </option>
                  <option value="Bolivia">Bolivia
                  </option>
                  <option value="Brazil">Brazil
                  </option>
                  <option value="Chile">Chile
                  </option>
                  <option value="Colombia">Colombia
                  </option>
                  <option value="Ecuador">Ecuador
                  </option>
                  <option value="Guyana">Guyana
                  </option>
                  <option value="Paraguay">Paraguay
                  </option>
                  <option value="Peru">Peru
                  </option>
                  <option value="Suriname">Suriname
                  </option>
                  <option value="Uruguay">Uruguay
                  </option>
                  <option value="Venezuela">Venezuela
                  </option>
                </select>
              </span>
            </p>
            <p class="control">
              <button class="button" type="submit">Choose
              </button>
            </p>
          </div>

          <div class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload" />
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
              <span class="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>

          <br>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <div class="control">
              <button class="button">Cancel</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style>
.box.form-box {
  padding: 3em;
}
</style>
