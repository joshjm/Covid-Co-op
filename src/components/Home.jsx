import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import  MapContainer  from './MapContainer';
import './Home.css';
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
     };
  }

  handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
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
              <Link to='/login'>Log In</Link>
              <br></br>
              <Link to='/signup'>Sign Up</Link>
              <br></br>
              {
                this.props.loggedInStatus ?
                <Link to='/logout' onClick={this.handleClick}>Log Out</Link> :
                null
              }
              <MapContainer  isMarkerShown/>
          </div>
      )
  }
}

export default Home;
