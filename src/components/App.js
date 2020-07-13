import React from 'react';
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
        <div className='content'>
          <div className='body'>
              <Switch>
                <Route exact path='/about' component={About}/>
                <Route exact path='/sign-up' component={Signup}/>{/* keep me at the bottom */}
                <Route exact path='/sign-in' component={Signin}/>{/* keep me at the bottom */}
                <Route exact path='/update' component={Update}/>{/* keep me at the bottom */}
                <Route exact path='/order' component={Order}/>{/* keep me at the bottom */}
                <Route exact path='/' component={Home}/>{/* keep me at the bottom */}
            </Switch>
          </div>
        </div>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
