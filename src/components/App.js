import React from 'react';
import Body from './Body';
import Footer from './Footer';
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Update from './Update';
import Order from './Order';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <div class='content'>
          <div class='body'>
              <Switch>
                <Route path='/about' component={About}/>
                <Route path='/sign-up' component={Signup}/>{/* keep me at the bottom */}
                <Route path='/sign-in' component={Signin}/>{/* keep me at the bottom */}
                <Route path='/update' component={Update}/>{/* keep me at the bottom */}
                <Route path='/order' component={Order}/>{/* keep me at the bottom */}
                <Route path='/' component={Home}/>{/* keep me at the bottom */}
            </Switch>
          </div>
        </div>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
