import React, {useState, Component}  from 'react';
import './Signup.css';
import axios from 'axios';
import { render } from '@testing-library/react';
class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
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
      const {username, email, password, password_confirmation} = this.state

        return(
            <div class='row justify-content-md-center'>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h2 class = "center">Sign Up</h2>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input class="form-control" type="text" id="first-name" placeholder="First Name"/>
                                    <input class="form-control" type="text" id="last-name" placeholder="Last Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" type="email" id="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" id="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="password-confirmation">Confirm Password</label>
                                    <input class="form-control" type="password-confirmation" id="password-confirmation" placeholder="Password" value={password_confirmation} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input class="form-control" type="text" id="address" placeholder="address"/>
                                </div>
                                <button type="button" id="submit-btn" class="btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
