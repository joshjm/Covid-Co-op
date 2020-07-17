import React, {useState, Component}  from 'react';
import { Redirect, Link } from 'react-router-dom';
import './MyProducts.css';
import axios from 'axios';
import _ from "lodash";
import { render } from '@testing-library/react';
import { config } from '../Constants' // get prod/dev urls
let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;

class MyProducts extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      products: this.props.products,
      user_products: [],
    }
  }

  componentDidMount() {
    if (!this.props.loggedInStatus) {
      this.props.history.push('/sign-in')
    } else {
      this.setState({user_id: this.props.user.id})
      let user_products = []
      user_products.push(_.filter(this.props.products, {user_id: this.props.user.id}))
      this.setState({user_products: user_products[0]})
    }
  }

  showProducts(productsArray) {
      if(productsArray) {
          return(
              productsArray.map((product) => {
                // render product card
                return(
                  <div key={product.id} className='col-3 item'>
                      <img className='thumbnail' src={product.image_url} alt={product.name}/>
                      <h3 key={product.id} >{product.name.slice(0, 25)} ...</h3>
                      <p>Category: {product.category}</p>
                      <p>Quantity available: {product.quantity}</p>
                      <p>{product.description.slice(0, 30)}...</p>
                      <p>Posted: {Math.floor(Math.abs(new Date() - new Date(product.created_at))/1000/60/60/24)} days ago</p>
                      {this.props.isLoggedIn ?
                        <button type="button" className="btn btn-success btn-sm" onClick={() => {this.handleClick(product.id)}}>Add a Product</button> : ''
                      }
                  </div>
                  )
              })
          )
      } else{
          return (<h2>Add a Product</h2>);
      }
  }


  render() {
    return(
      <div className="myProducts">
        {this.props.loggedInStatus ? (
          <div className="shoppingCart">
            <h1>My Products</h1>
            <div className="row">
              {this.showProducts(this.state.user_products)}
            </div>
            <Link to="/add-product" className="btn btn-success btn-sm">Add Product</Link>

          </div>
          ) : (
            <h1>Please Sign in to see your products</h1>
        )}
      </div>
    )
  }
}


export default MyProducts;
