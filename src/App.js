import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { WithData } from './hoc';
import Home from './components/Home';
import Profile from './components/Profile';
import Mission from './components/Mission';
import Knowledge from './components/Knowledge';

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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">หน้าแรก <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ภารกิจ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/knowledge">เกร็ดความรู้</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">การซื้อขาย</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">เราคือใคร</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal" style={{ fontSize: 12 }}>ลงชื่อเข้าใช้</button>
              </li>
            </ul>
          </div>
        </nav>
        <Router>
          <div>
            <Route exact path="/" render={(props) => <Home {...this.props} />} />
            <Route path="/profile" render={(props) => <Profile profile={users[Object.keys(users)[0]]} missions={missions} />} />
            <Route path="/mission"render={(props) => <Mission {...this.props} />}  />
            <Route path="/knowledge"render={(props) => <Knowledge {...this.props} />}  />
          </div>
        </Router>
      </div>
    );
  }
}

// export default App;

export default WithData(App);
