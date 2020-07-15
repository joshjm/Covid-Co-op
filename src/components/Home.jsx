import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import  MapContainer  from './MapContainer';
import  AddressConverter  from './AddressConverter';
import './Home.css';

let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;


class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      user: {}
     };
  }

  handleClick = () => {
    axios.delete(`${FRONT_END_URL}/logout`, {withCredentials: true})
    .then(response => {
      this.handleLogout()
      this.history.push('/')
    })
    .catch(error => console.log(error))
  }

  render(){
  return(
          <div>
              <h1>Home page content</h1>

              {
                this.props.loggedInStatus ?
                <Link to='/logout' onClick={this.handleClick}>Log Out</Link> :
                null
              }
              <MapContainer  isMarkerShown/>
                <AddressConverter />
          </div>
      )
  }
}

export default Home;
