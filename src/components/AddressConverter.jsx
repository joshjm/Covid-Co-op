import React, {Component} from "react";
import axios from "axios";
const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY
const RESPONSE_TYPE = "json";
const SERVER_URL = `https://maps.googleapis.com/maps/api/geocode/${RESPONSE_TYPE}?`
class AddressConverter extends Component{
    constructor(){
        super(); // necessary
        this.state={ // where we define the variables we want to store and sahre across the component
            coordinates: {lat: null,  lng: null}, 
            address: '',
        }
        this._handleChange = this._handleChange.bind(this); // allows these functions to access `this'
        this._handleSubmit = this._handleSubmit.bind(this);
        // fetchGPS("18 Zephyr Court Birkdale");
    }
    fetchGPS(address){
        axios.get(`${SERVER_URL}key=${google_api_key}&address=${address}`)
        .then((results) =>{
        this.setState(
            {coordinates: results.data.results[0].geometry.location}
        );
        })
    }
    
    _handleChange(event){
        this.setState({address: event.target.value});
    }
    _handleSubmit(event){
        event.preventDefault();
        this.fetchGPS(this.state.address);
    }
    render(){

        return(
            <div className="container">
                <h2> convert address to gps </h2>
                <form onSubmit={this._handleSubmit}>
                    <input type="text" placeholder="address" onChange={this._handleChange} /> 
                    <button>Submit</button>
                </form>
                <div className="output-display">
                    Output Coordinates: {`Lat: ${this.state.coordinates.lat}, Long: ${this.state.coordinates.lng}` }
                </div>
            </div>
        )
    }
}

export default AddressConverter;