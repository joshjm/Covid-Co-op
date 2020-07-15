import React, {useState, Component}  from 'react';
import { Redirect } from 'react-router-dom';
import './MyProfile.css';
import axios from 'axios';
import { render } from '@testing-library/react';
class MyProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      address:'',
      errors: '',
      isChange: false,
      SERVER_URL: 'http://covid-co-op.herokuapp.com/'
     };
     this.redirect = this.redirect.bind(this);
  }
  componentDidMount() {
    this.setState({
      email: this.props.user.email,
      address: this.props.user.location
    })
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
    axios.patch(`http://localhost:3000/users/${this.props.user.id}.json`, user, {withCredentials: true})
    .then(response => {
      console.log(response)
        // this.redirect()
      this.setState ({
        isChange: true
      })
      this.props.handleLogin(response.data)
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
          this.state.isChange ? < Redirect to='/' /> :
            <div class='row justify-content-md-center'>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h2 class = "center">Edit User Details</h2>
                              <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input
                                      class="form-control"
                                      name="email"
                                      type="email"
                                      id="email"
                                      placeholder="Email"
                                      onChange={this.handleChange}
                                      value={this.state.email}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      name="password_confirmation"
                                      id="password"
                                      placeholder="Password"
                                      onChange={this.handleChange}
                                      value={this.state.password}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password-confirmation">Confirm Password</label>
                                    <input
                                      class="form-control"
                                      type="password"
                                      name="password"
                                      id="password-confirmation"
                                      placeholder="Password"
                                      onChange={this.handleChange}
                                      value={this.state.password_confirmation}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      name="address"
                                      id="address"
                                      placeholder="address"
                                      onChange={this.handleChange}
                                      value={this.state.address}
                                    />
                                </div>
                                <button type="submit" id="submit-btn" class="btn btn-primary">Submit</button>
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

export default MyProfile;
