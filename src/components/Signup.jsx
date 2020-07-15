import React, {useState, Component}  from 'react';
import './Signup.css';
import axios from 'axios';
import { render } from '@testing-library/react';
class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@test.com',
      password: 'chicken',
      password_confirmation: 'chicken',
      address: '',
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
      const {email, password, password_confirmation, address} = this.state
  let user = {
    email: email,
    password: password,
    password_confirmation: password_confirmation,
    location: address
  }
    axios.post('http://localhost:3000/users', user, {withCredentials: true})
  .then(response => {
    console.log(response);
    console.log("flag");
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
                                    <label for="email">Email</label>
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
                                    <label for="password">Password</label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      name="password_confirmation"
                                      id="password"
                                      placeholder="Password"
                                      onChange={this.handleChange}
                                      value={this.state.password}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="password-confirmation">Confirm Password</label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      name="password"
                                      id="password-confirmation"
                                      placeholder="Password"
                                      onChange={this.handleChange}
                                      value={this.state.password_confirmation}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="address">Address</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="address"
                                      id="address"
                                      placeholder="address"
                                      onChange={this.handleChange}
                                      value={this.state.address}
                                    />
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
