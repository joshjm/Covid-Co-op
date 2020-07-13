import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  MapContainer  from './MapContainer';
import './Home.css';
class Home extends Component{
    render(){
    return(
            <div>
                <h1>Home page content</h1>
                <Link to='/login'>Log In</Link>
                <br></br>
                <Link to='/signup'>Sign Up</Link>
                <MapContainer  isMarkerShown/>
            </div>
        )
    }
}

export default Home;
