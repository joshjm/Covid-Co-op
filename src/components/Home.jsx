import React, {Component} from 'react';
import  MapContainer  from './MapContainer';
import './Home.css';
class Home extends Component{
    render(){
    return(
            <div>
                <h1>Home page content</h1>
                <MapContainer  isMarkerShown/>
            </div>
        )   
    }
}

export default Home;