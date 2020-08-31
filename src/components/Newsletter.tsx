import React from "react";
import "./Newsletter.css";

function App() {
  return (
    <div className="Newletter">
      <div id="mc_embed_signup">
        <form
          action="https://modlees.us17.list-manage.com/subscribe/post?u=fc0f52843438cf9eda32d7595&amp;id=d98f8ced7b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label>Email Address </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>

            <div className="mc-field-group">
              <label>Name </label>
              <input
                type="text"
                value=""
                name="MMERGE1"
                className=""
                id="mce-MMERGE1"
              />
            </div>

            <div
              id="mergeRow-gdpr"
              className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div className="content__gdpr">
                <label>Marketing Permissions</label>
                <p>
                  Please select all the ways you would like to hear from
                  Modlees:
                </p>

                <fieldset
                  className="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <label className="checkbox subfield">
                    <input
                      type="checkbox"
                      id="gdpr_38000"
                      name="gdpr[38000]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Platform launch</span>
                  </label>

                  <label className="checkbox subfield">
                    <input
                      type="checkbox"
                      id="gdpr_38012"
                      name="gdpr[38012]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Newletter</span>
                  </label>
                </fieldset>
                <p>
                  You can unsubscribe at any time by clicking the link in the
                  footer of our emails. For information about our privacy
                  practices, please visit our website.
                </p>
              </div>

              <div className="content__gdprLegal">
                <p>
                  We use Mailchimp as our marketing platform. By clicking below
                  to subscribe, you acknowledge that your information will be
                  transferred to Mailchimp for processing.{" "}
                  <a
                    href="https://mailchimp.com/legal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more about Mailchimp's privacy practices here.
                  </a>
                </p>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_fc0f52843438cf9eda32d7595_d98f8ced7b"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
