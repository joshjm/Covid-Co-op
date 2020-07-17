import React, {useState, Component}  from 'react';
import './Signup.css';
import axios from 'axios';
import { render } from '@testing-library/react';
import { config } from '../Constants' // get prod/dev urls
import {fetchGPS} from "../helpers";
let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;
const CENTRE_OF_AUSTRALIA = {lat: -25.363, lng: 134.211}

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      address: '',
      coordinates: {lat: null,  lng: null}, 

      errors: '',
    };
  }

  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
      fetchGPS(this.state.address).then((results) =>{ // returns promise of results
        console.log(results);
        if (results.data.status =="ZERO_RESULTS"){
          console.log("NO RESULTS");
          this.setState({coordinates: CENTRE_OF_AUSTRALIA});
        } else  {
          let gpsCoords = results.data.results[0].geometry.location;
          this.setState({ coordinates: gpsCoords });
        }
        
    });
    };

  handleSubmit = (event) => {
      event.preventDefault()
      // convert address to GPS here
  let user = {
    email: this.state.email,
    password: this.state.password,
    password_confirmation: this.state.password_confirmation,
    location: this.state.address,
    lat: this.state.coordinates.lat,
    lng: this.state.coordinates.lng
  }
    axios.post(BACK_END_URL+'/users', user, {withCredentials: true})
    .then(response => {
    if (response.data.status === 'created') {
      this.props.handleLogin(response.data)
      this.redirect()
    } else {
      this.setState({
        errors: response.data.errors
      })
    }
    
    })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul>
      </div>
    )
  }

    render(){
      const {email, password, password_confirmation, address} = this.state

        return(
            <div className='row justify-content-md-center'>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className = "center">Sign Up</h2>
                              <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input
                                      className="form-control"
                                      name="email"
                                      type="email"
                                      id="email"
                                      placeholder="Email"
                                      onChange={this.handleChange}
                                      value={this.state.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      name="password"
                                      id="password"
                                      placeholder="Password"
                                      onChange={this.handleChange}
                                      value={this.state.password}
                                    />
                                </div>
                                <div className="form-group">
                                    <label > Confirm Password</label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      name="password_confirmation"
                                      id="password-confirmation"
                                      placeholder="Password"
                                      onChange={this.handleChange}
                                      value={this.state.password_confirmation}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Address</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="address"
                                      id="address"
                                      placeholder="Address"
                                      onChange={this.handleChange}
                                      value={this.state.address}
                                    />
                                    Latitude: {this.state.coordinates.lat} Longitude: {this.state.coordinates.lng}
                
                                </div>
                                <button type="submit" id="submit-btn" className="btn btn-primary">Submit</button>
                              </form>

                                <div>
                                  {
                                    this.state.errors ? this.handleErrors() : null
                                  }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
