import "../style/main.scss";
import Home from "./home";
import AboutUs from "./aboutUs";
import ShopInPerson from "./shopInPerson";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/shop-in-person" component={ShopInPerson} />
        </Switch>
      </Router>
    </div>
  );
}
