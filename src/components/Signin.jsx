import React, {useState, Component}  from 'react';
import './Signin.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';
class Signin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
      event.preventDefault()
    };

    render(){
      const {username, email, password} = this.state

        return(
            <div class='row justify-content-md-center'>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h2 class = "center">Sign In</h2>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" type="email" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" id="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                </div>
                                <button type="button" id="submit-btn" class="btn btn-primary">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;
