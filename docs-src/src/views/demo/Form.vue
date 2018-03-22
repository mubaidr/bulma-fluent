<template>
  <div class="container">
    <section id="form"
             class="section">
      <h1 class="title"> Form
      </h1>
      <hr>
      <div class="columns">
        <div class="column">
          <h4 class="subtitle"> Horizontal
          </h4>
          <div class="field">
            <label class="label">Name
            </label>
            <p class="control">
              <input class="input"
                     type="text"
                     placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Username
            </label>
            <p class="control">
              <input class="input"
                     type="text"
                     placeholder="Text input">
            </p>
          </div>
          <div class="field">
            <label class="label">Email
            </label>
            <p class="control">
              <input class="input"
                     type="text"
                     placeholder="Email input">
            </p>
          </div>
          <div class="field">
            <label class="label">Subject
            </label>
            <p class="control">
              <span class="select">
                <select>
                  <option>Select dropdown
                  </option>
                  <option>With options
                  </option>
                </select>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Message
            </label>
            <p class="control">
              <textarea class="textarea"
                        placeholder="Textarea" />
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="checkbox">
                <input type="checkbox"> I agree to the
                <a href="#">terms and conditions
                </a>
              </label>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <label class="radio">
                <input name="question"
                       type="radio"> Yes
              </label>
              <label class="radio">
                <input name="question"
                       type="radio"> No
              </label>
            </p>
          </div>

          <div class="field has-addons">
            <p class="control">
              <span class="select">
                <select>
                  <option>$
                  </option>
                  <option>£
                  </option>
                  <option>€
                  </option>
                </select>
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input"
                     type="text"
                     placeholder="Amount of money">
            </p>
            <p class="control">
              <a class="button">
                Transfer
              </a>
            </p>
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
              <button class="button"
                      type="submit">Choose
              </button>
            </p>
          </div>

          <div class="field">
            <p class="control has-icons-left">
              <input class="input"
                     type="email"
                     placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input"
                     type="password"
                     placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fa fa-lock" />
              </span>
            </p>
          </div>

          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">Submit
              </button>
            </p>
            <p class="control">
              <button class="button">Cancel
              </button>
            </p>
          </div>
        </div>
        <div class="column">
          <h3 class="subtitle"> Sizes
          </h3>
          <div class="field">
            <p class="control">
              <input class="input is-small"
                     type="text"
                     placeholder="Small input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input"
                     type="text"
                     placeholder="Normal input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-medium"
                     type="text"
                     placeholder="Medium input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-large"
                     type="text"
                     placeholder="Large input">
            </p>
          </div>
          <br>
          <h3 class="subtitle"> Colors
          </h3>
          <div class="field">
            <p class="control">
              <input class="input is-primary"
                     type="text"
                     placeholder="Primary input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-info"
                     type="text"
                     placeholder="Info input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-success"
                     type="text"
                     placeholder="Success input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-warning"
                     type="text"
                     placeholder="Warning input">
            </p>
          </div>
          <div class="field">
            <p class="control">
              <input class="input is-danger"
                     type="text"
                     placeholder="Danger input">
            </p>
          </div>
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
