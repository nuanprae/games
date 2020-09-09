import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Memory from "./memory";
import Snake from "./snake";
import Minesweeper from "./minesweeper";
import Thai from "./thai";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Navigation></Navigation>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/memory" component={Memory} />
      <Route path="/snake" component={Snake} />
      <Route path="/minesweeper" component={Minesweeper} />
      <Route path="/thai" component={Thai} />
    </Switch>
  </Router>
);

export default App;
