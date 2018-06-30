import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Code from './Code';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/code" component={ Code } />
            <Route path="/contact" component={ Contact } />
            <Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
