import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to WIRED</h1>
        </header>
        <p className="App-intro">
          This page is under development, PRs are welcome on{" "}
          <a href="https://github.com/wiredmonash/react-welcome">GitHub</a>.
        </p>
      </div>
    );
  }
}

export default App;
