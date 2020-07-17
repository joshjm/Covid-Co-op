import React, {Component} from "react";
import axios from "axios";
import {fetchGPS} from "../helpers";

class AddressConverter extends Component{
    constructor(){
        super(); // necessary
        this.state={ // where we define the variables we want to store and sahre across the component
            coordinates: {lat: null,  lng: null}, 
            address: '',
        }
        this._handleChange = this._handleChange.bind(this); // allows these functions to access `this'
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    
    _handleChange(event){
        this.setState({address: event.target.value});
    }


    _handleSubmit(event){
        event.preventDefault();
        fetchGPS(this.state.address).then((results) =>{ // returns promise of results
            let gpsCoords = results.data.results[0].geometry.location;
            this.setState({ coordinates: gpsCoords });
        });
    }
    render(){

        return(
            <div className="container">
                <h4> convert address to gps </h4>
                <form onSubmit={this._handleSubmit}>
                    <input type="text" placeholder="address" onChange={this._handleChange} /> 
                    <button>Submit</button>
                </form>
                <div className="output-display">
                    {`lat: ${this.state.coordinates.lat}, lng: ${this.state.coordinates.lng},` }
                </div>
            </div>
        )
    }
}

export default AddressConverter;