import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import  MapContainer  from './MapContainer';
import  AddressConverter  from './AddressConverter';
import './Home.css';
import { config } from '../Constants' // get prod/dev urls
import { Redirect } from 'react-router-dom'
import {fetchGPS} from "../helpers";
let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;


class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
     };
  }

  render(){
  return(
          <div>
              <h1>Covid Coop Home</h1>
              <MapContainer  isMarkerShown/>
              <AddressConverter />
          </div>
      )
  }
}

export default Home;
