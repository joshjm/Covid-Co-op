import React, { Component } from 'react';

import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Order from './Order';


import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';

let FRONT_END_URL = "http://localhost:3000";
let BACK_END_URL = "http://covid-co-op.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PRODUCT_URL: `${BACK_END_URL}/products`,
      USER_URL: `${BACK_END_URL}/users`,
      isLoggedIn: false,
      user: {},
      users: [],
      products: []
     };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchProducts();
    this.fetchUsers();
  }

  fetchProducts() {
    axios.get(this.state.PRODUCT_URL)
      .then(response => {
        if (response.data) {
          this.setState({ products: response.data });
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
  }

  fetchUsers() {
    axios.get(this.state.USER_URL)
      .then(response => {
        if (response.data) {
          this.setState({ users: response.data.users });
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
  }

  componentDidMount() {
    this.loginStatus()
  }

    loginStatus = () => {
      axios.get(`${FRONT_END_URL}/logged_in`,
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
                <Route exact path='/order' render={props => (<Order users={this.state.users} products={this.state.products} />)} />      {/* keep me at the bottom */}

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
