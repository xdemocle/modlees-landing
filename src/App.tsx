import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header--title">Modlees</h1>
        <h3 className="App-header--subtitle">Tokenizing Influencers</h3>
      </header>

      <section className="App-body">
        <p>
          <strong>Modlees</strong> is a marketplace where influencers can sell
          digital content.
        </p>
        <p>
          Build on blockchain technology, the financial revolution to tokenize
          digital assets is coming to the world of influencers.
        </p>
        {/* <p>Join our VIP list and get first access to Modlees</p> */}
      </section>

      <section className="App-footer">
        Contact:{" "}
        <a
          className="App-link"
          href="mailto:info@modless.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@modless.com
        </a>
      </section>
    </div>
  );
}

export default App;
