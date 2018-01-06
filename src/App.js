import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar } from './NavBar';
import { WithData } from './hoc';
import Home from './components/Home';
import Profile from './components/Profile';
import Mission from './components/Mission';
import Knowledge from './components/Knowledge';
import Marketing from './components/Marketing';

import './App.css';
import logo from './logo.svg';

class App extends Component {

  componentDidMount(){
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }, 1000)
    }
  }

  render() {
    const { users, missions } = this.props;

    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" render={(props) => <Home {...this.props} />} />
            <Route path="/profile" render={(props) => <Profile profile={users[Object.keys(users)[0]]} missions={missions} />} />
            <Route path="/missions"render={(props) => <Mission {...this.props} />}  />
            <Route path="/knowledge"render={(props) => <Knowledge {...this.props} />}  />
            <Route path="/marketing"render={(props) => <Marketing {...this.props} />}  />
          </div>
        </Router>
      </div>
    );
  }
}

// export default App;

export default WithData(App);
