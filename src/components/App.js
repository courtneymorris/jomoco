import "../style/main.scss";

import Home from "./home";

import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </div>
    );
  }
}
