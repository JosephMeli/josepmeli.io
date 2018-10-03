import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Code from "./Code";
import Dashboard from "./Dashboard";
import NotFound from "./NOT_FOUND";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Code" component={Code} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/About" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
