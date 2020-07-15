import React, {useState, Component}  from 'react';
import './Signin.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react';
class Signin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
     };
  }
  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
      event.preventDefault()
      const {email, password} = this.state

      let user = {
        email: email,
        password: password
      }

      axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
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
            <ul>
            {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
      }

    render(){
      const {email, password} = this.state

        return(
            <div className='row justify-content-md-center'>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className = "center">Sign In</h2>
                              <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input
                                      className="form-control"
                                      name="email"
                                      type="email"
                                      id="email"
                                      placeholder="Email"
                                      value={this.state.email}
                                      onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input
                                      className="form-control"
                                      name="password"
                                      type="password"
                                      id="password"
                                      placeholder="Password"
                                      value={this.state.password}
                                      onChange={this.handleChange}
                                    />
                                </div>
                                <button type="submit" id="submit-btn" className="btn btn-primary">Sign In</button>
                              </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;
