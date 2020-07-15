import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './NavBar.css'

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
                <Link to="/" className="navbar-brand">Covid Coop⚕</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto ">
                      <li className="nav-item">
                          <Link to='/' className="nav-link">Home</Link>
                      </li>
                      {/* TODO only render if not logged in */}
                      <li className="nav-item">
                          <Link to='/sign-up' className="nav-link">Sign up</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/sign-in' className="nav-link">Sign in</Link>
                      </li>
                      {/* TODO only render if logged in */}
                      <li className="nav-item">
                          <Link to='/order' className="nav-link">Place order</Link>
                      </li>
                      {/* TODO conditionally render only if cart.length>1 */}
                      <li className="nav-item">
                          <Link to='/cart' className="nav-link">View Cart</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/profile' className="nav-link">My Profile</Link>
                      </li> 
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;
