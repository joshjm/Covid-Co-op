import React, { Component } from 'react';

import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import MyProfile from './MyProfile';
import MyProducts from './MyProducts';
import Order from './Order';
import ShoppingCart from './ShoppingCart';
import ProductView from './ProductView';


import './App.css';
import AuthApi from './AuthApi';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';
import Cookies from 'js-cookie';

import { config } from '../Constants' // get prod/dev urls
let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PRODUCT_URL: `${BACK_END_URL}/products`,
      USER_URL: `${BACK_END_URL}/users`,
      isLoggedIn: false,
      setAuth: false,
      user: {},
      users: [],
      products: [],
      sendToCart: [],
      productSelect: ''
     };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.viewProduct = this.viewProduct.bind(this);
    this.readCookie = this.readCookie.bind(this);
    this.fetchProducts();
    this.fetchUsers();
    this.readCookie();
  }

  updateCart(product_id) {
    this.setState({sendToCart: [product_id, ...this.state.sendToCart]})
  }

  viewProduct(product_id) {
    this.setState({ productSelect: product_id })
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
    this.readCookie()
  }

  loginStatus = () => {
    axios.get(`${BACK_END_URL}/logged_in`,
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
        this.readCookie()
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user //BUG doesnt set right?
    })
  }

  handleLogout = () => {
    axios.delete(`${BACK_END_URL}/logout`).then(
    this.setState({
      isLoggedIn: false,
      setAuth: false,
      user: {}
    }),
    Cookies.remove("user")
  )}

  handleUserEdit = (user) => {
    this.setState({
      user: user
    })
  }

  readCookie = () => {
    const user = Cookies.get("user");
    if(user){
      this.setState({
        setAuth: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar handleLogout={this.handleLogout} userID={this.state.user} loggedInStatus={this.state.isLoggedIn}/>
          <div className='content'>
            <div className='body'>
                <Switch>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/sign-up' render={props => (
                    <Signup handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}
                  />
                  <Route exact path='/sign-in' render={props => (
                    <Signin handleLogin={this.handleLogin} readCookie={this.readCookie} loggedInStatus={this.state.isLoggedIn}/>)}
                  />
                  <Route exact path='/order' render={props => (
                    <Order users={this.state.users} products={this.state.products} updateCart={this.updateCart} isLoggedIn={this.state.isLoggedIn} viewProduct={this.viewProduct} />)}
                  />{/* keep me at the bottom */}
                  <Route exact path='/shoppingcart' render={props => (
                    <ShoppingCart {...props} handleLogout={this.handleLogout} sendToCart={this.state.sendToCart} products={this.state.products} loggedInStatus={this.state.isLoggedIn}/>)}
                  />
                  <Route exact path='/profile' render={props => (
                    <MyProfile user={this.state.user} loggedInStatus={this.state.isLoggedIn} handleUserEdit={this.handleUserEdit}/>)}
                  />
                  <Route exact path='/my-products' render={props => (
                    <MyProducts user={this.state.user} loggedInStatus={this.state.isLoggedIn} />)}
                  />
                  <Route exact path='/productview' render={props => (
                  <ProductView users={this.state.users} products={this.state.products} productSelect={this.state.productSelect} isLoggedIn={this.state.isLoggedIn} />)}
                  />
                  <Route exact path='/' render={props => (
                    <Home handleLogout={this.handleLogout} {...this.state} loggedInStatus={this.state.isLoggedIn} />)}
                  />
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
