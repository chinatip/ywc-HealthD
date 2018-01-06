import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { WithData } from './hoc';
import Home from './components/Home';
import Profile from './components/Profile';
import Mission from './components/Mission';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/mission" component={Mission} />
          </div>
        </Router>
      </div>
    );
  }
}

// export default App;

export default WithData(App);
