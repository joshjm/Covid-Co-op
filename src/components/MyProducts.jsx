import React, {useState, Component}  from 'react';
import { Redirect } from 'react-router-dom';
import './MyProducts.css';
import axios from 'axios';
import { render } from '@testing-library/react';
import { config } from '../Constants' // get prod/dev urls
let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;

class MyProfile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      location:'',
      errors: '',
      isChange: false,
      SERVER_URL: BACK_END_URL
     };
  }

  render(){
    return(
      <h1>My Products</h1>
    )
  }
}


export default MyProfile;
