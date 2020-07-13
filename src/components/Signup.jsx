import React, {useState, Component}  from 'react';
import './Signup.css';
import axios from 'axios';
import { render } from '@testing-library/react';
import LocationDisplay from './LocationDisplay';
class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: '',
      SERVER_URL: 'http://covid-co-op.herokuapp.com/'
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
      const {username, email, password, password_confirmation} = this.state
  let user = {
    username: username,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }
  axios.post('http://localhost:3000/users', {user}, {withCredentials: true})
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
                                    <input class="form-control" type="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="password-confirmation">Confirm Password</label>
                                    <input class="form-control" type="password-confirmation" id="password-confirmation" placeholder="Password" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input class="form-control" type="text" id="address" placeholder="address"/>
                                </div>
                                <button type="button" id="submit-btn" class="btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>

                                <div>
                                  {
                                    this.state.errors ? this.handleErrors() : null
                                  }
                                </div>
                        </div>
                    </div>
                <LocationDisplay/>
                </div>
            </div>
        )
    }
}

export default Signup;
