import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { config } from '../Constants' // get prod/dev urls
let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;

class AddProduct extends Component {
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
     this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: this.props.user.email,
      location: this.props.user.location
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
    const {email, password, password_confirmation, location} = this.state
    let user = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      location: location
    }
    axios.patch(`${BACK_END_URL}/users/${this.props.user.id}.json`, user, {withCredentials: true})
    .then(response => {
      console.log(response)
      this.setState ({
        isChange: true
      })
      // update user details
      this.props.handleUserEdit(response.data);
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

    return(
      this.props.isLoggedIn ? < Redirect to='/' /> :
      <div className='row justify-content-md-center'>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className = "center">Add a new Product</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label for="productname">Product Name</label>
                    <input
                      className="form-control"
                      name="email"
                      type="productname"
                      id="productname"
                      placeholder="Product Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Category</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password_confirmation"
                      id="password"
                      placeholder="Sanitizer"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password-confirmation">Description</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      id="password-confirmation"
                      placeholder="Description"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="quantity">Quantity in Stock</label>
                    <input
                      className="form-control"
                      type="text"
                      name="quantity"
                      id="quantity"
                      placeholder="1"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="imageurl">Add an Image</label>
                    <input
                      className="form-control"
                      type="text"
                      name="imageurl"
                      id="imageurl"
                      placeholder="http://fillmurray.com/400/400"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" id="submit-btn" className="btn btn-primary">Create</button>
                </form>
                <div>
                  {this.state.errors ? this.handleErrors() : null}
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }

}

export default AddProduct
