import React from "react";
import "./App.css";
// import Newsletter from "./components/Newsletter";

function App() {
  const openNewletter = (evt: React.MouseEvent<object>) => {
    evt.preventDefault();

    return window.open(
      "https://modlees.us17.list-manage.com/subscribe/post?u=fc0f52843438cf9eda32d7595&amp;id=d98f8ced7b"
    );
  };

  const openNewletterSubmit = (evt: React.FormEvent<object>) => {
    evt.preventDefault();

    return window.open(
      "https://modlees.us17.list-manage.com/subscribe/post?u=fc0f52843438cf9eda32d7595&amp;id=d98f8ced7b"
    );
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-header--title">Modlees</h1>
          <h3 className="App-header--subtitle">Tokenizing Influencers</h3>
        </header>

        <section className="App-body">
          <p>
            Modlees is a marketplace where influencers can sell digital content
            and raise funds.
          </p>
          <p>
            Build on blockchain technology, the financial revolution to tokenize
            digital assets is coming to the world of influencers.
          </p>
          {/* <p>Join our VIP list and get first access to Modlees</p> */}
        </section>

        <section className="App-footer">
          <div className="App-footer__email">
            Contact us for more information:
            <br />
            <a
              className="App-link"
              href="mailto:info@modlees.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@modlees.com
            </a>
          </div>

          <div className="App-footer__newsletter">
            <a
              className="App-link"
              href="https://modlees.us17.list-manage.com/subscribe/post?u=fc0f52843438cf9eda32d7595&amp;id=d98f8ced7b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stay up to date with our newsletter
            </a>

            <form onSubmit={openNewletterSubmit}>
              <input
                className="css-input"
                placeholder="your@email.com"
                onClick={openNewletter}
              />
              <button
                type="submit"
                className="css-button"
                onClick={openNewletter}
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
      {/* <Newsletter /> */}
    </div>
  );
}

export default App;
