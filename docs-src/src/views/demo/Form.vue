<template>
  <div class="container">
    <section class="section">
      <h1 class="title"> Form
      </h1>
      <h2 class="subtitle">All generic form controls, designed for consistency</h2>
      <hr>
      <div class="column is-6 is-offset-3">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input"
                   type="text"
                   placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success"
                   type="text"
                   placeholder="Text input"
                   value="bulma">
            <span class="icon is-small is-left">
              <i class="fas fa-user" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check" />
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger"
                   type="email"
                   placeholder="Email input"
                   value="hello@">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle" />
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
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
            <textarea class="textarea"
                      placeholder="Textarea" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox is-primary">
              <input type="checkbox"> I agree to the
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio"
                     name="question"> Yes
            </label>
            <label class="radio">
              <input type="radio"
                     name="question"> No
            </label>
          </div>
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
        <div class="file has-name">
          <label class="file-label">
            <input class="file-input"
                   type="file"
                   name="resume">
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
      <br>

      <hr>
      <br>

      <div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">From</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input"
                       type="text"
                       placeholder="Name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user" />
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input is-success"
                       type="email"
                       placeholder="Email"
                       value="alex@smith.com">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope" />
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check" />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label" />
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static">
                    +44
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input"
                         type="tel"
                         placeholder="Your phone number">
                </p>
              </div>
              <p class="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Department</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Already a member?</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <label class="radio">
                  <input type="radio"
                         name="member"> Yes
                </label>
                <label class="radio">
                  <input type="radio"
                         name="member"> No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Subject</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input is-danger"
                       type="text"
                       placeholder="e.g. Partnership opportunity">
              </div>
              <p class="help is-danger">
                This field is required
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Question</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea"
                          placeholder="Explain how we can help you" />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary">
                  Send message
                </button>
              </div>
            </div>
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
