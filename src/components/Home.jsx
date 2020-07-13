import React, {Component} from 'react';
import  MapContainer  from './MapContainer';
import  AddressConverter  from './AddressConverter';
import './Home.css';
class Home extends Component{
    // want to store an array here of marker locations/details
    // and pass them into mapcontainer.
    // also want to append to it from address converter
    render(){
    return(
            <div>
                <h1>Home page content</h1>
                <MapContainer  isMarkerShown/>
                <AddressConverter />
            </div>
        )   
    }
}

export default Home;