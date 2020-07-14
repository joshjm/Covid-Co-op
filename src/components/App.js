import React, { Component } from 'react';

import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Update from './Update';
import Order from './Order';
import Products from './Products';


import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

    loginStatus = () => {
      axios.get('http://localhost:3000/logged_in',
     {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
    }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <div className='content'>
            <div className='body'>
                <Switch>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/sign-up' render={props => (
                    <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}
                  />{/* keep me at the bottom */}
                  <Route exact path='/sign-in' render={props => (
                    <Signin {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}
                  />{/* keep me at the bottom */}
                  <Route exact path='/update' component={Update}/>{/* keep me at the bottom */}
                  <Route exact path='/order' component={Order}/>{/* keep me at the bottom */}

                  <Route exact path='/' render={props => (
                    <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>)}
                  />{/* keep me at the bottom */}
              </Switch>
            </div>
          </div>
          {/* <Footer/> */}
        </Router>
      </div>
    );
  }
}

export default App;
