import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './NavBar.css'

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
                <a className="navbar-brand" href="/">Covid Coop⚕</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className="nav-link">Sign up</Link>
                    </li>  
                    <li className="nav-item">
                        <Link to='/sign-in' className="nav-link">Sign in</Link>
                    </li>  

                    <li className="nav-item">
                        <Link to='/order' className="nav-link">Place order</Link>
                    </li>
           
                    </ul>
                </div>  
            </nav>
        )
    }
}
export default NavBar;