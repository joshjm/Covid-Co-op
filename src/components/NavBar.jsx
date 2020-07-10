import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './NavBar.css'

class NavBar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
                <a class="navbar-brand" href="/">Covid Coop⚕</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                        <Link to='/' class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/sign-up' class="nav-link">Sign up</Link>
                    </li>  
                    <li class="nav-item">
                        <Link to='/sign-in' class="nav-link">Sign in</Link>
                    </li>  
                    <li class="nav-item">
                        <Link to='/update' class="nav-link">Update listings</Link>
                    </li>  
                    <li class="nav-item">
                        <Link to='/order' class="nav-link">Place order</Link>
                    </li>
                    </ul>
                </div>  
            </nav>
        )
    }
}
export default NavBar;