import React, { Component } from "react";
import logo from "./wired.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo" />
          <h1>Welcome to WIRED</h1>
        </header>
        <p className="foreword">
          <marquee>
            WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED
            WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED WIRED
          </marquee>
        </p>

        <p className="foreword">
          WIRED Monash is the student club for those studying IT or those who
          are curious about everything digital at Monash University Clayton.
        </p>

        <p>
          We aim to provide a relaxed, social atmosphere where students can meet
          others who share their love for everything digital. Our community is
          one where we can share our opinions on the latest technology, and
          collaborate on projects and competitions.
        </p>

        <p>
          We also provide our members the opportunity to connect with some of
          Australia's leading technology companies through our many sponsored
          lunchtime events and networking opportunities - such as our Industry
          Night.
        </p>

        <p>
          Past events that we have held include our Annual Trivia Night,
          Midnight-to-Dawn Laser Tag, and the hugely successful UNIHACK
          Melbourne hackathon competition. We also hold workshops to allow
          students to expand their knowledge such as data visualisation and
          cyber security.
        </p>
      </div>
    );
  }
}

export default App;
