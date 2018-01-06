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
    const { users, missions } = this.props;

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={(props) => <Home {...this.props} />} />
            <Route path="/profile" render={(props) => <Profile profile={users[Object.keys(users)[0]]} missions={missions} />} />
            <Route path="/mission"render={(props) => <Mission {...this.props} />}  />
          </div>
        </Router>
      </div>
    );
  }
}

// export default App;

export default WithData(App);
