import React, { Component } from 'react'
import axios from 'axios';
import _ from "lodash";
import App from './App'
import Products from './Products'
import './ShoppingCart.css'

const SERVER_URL = 'http://localhost:3000/products.json';
const PRODUCT_URL = 'http://localhost:3000/products/';

class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product_ids: [],
      quantity: '',
      updatedCart: [],
    }
    this.Product = this.Product.bind(this)
  }


  componentDidMount() {
    if (!this.props.location.state && !this.props.loggedInStatus) {
      this.props.history.push('/sign-in')
    } else if (this.props.location.state) {
      let updatedCart = [];
      this.props.sendToCart.map((productId) => {
        updatedCart.push(_.filter(this.props.products, {id: productId})[0]);
      });
      this.setState({updatedCart: updatedCart})
    }
  }

  Product = () => {
    return (
      this.state.updatedCart.map((p) => {
          return(<div>
            {p.name}
            <img src={p.image_url}/>
            {/*other properties of each product */}
          </div>)
        }
      )
    )
  }

  render() {
    return(
      <div className="shoppingCart">
        {this.props.loggedInStatus ? (
          <div className="shoppingCart">
            <h1>Shopping Cart</h1>
            {this.Product()}
              {/* this.state.products.map((p) => <Product product={p} />)} */}
          </div>
          ) : (
            <h1>Please Sign in to see your cart</h1>
        )}
      </div>
    )
  }
}

export default ShoppingCart;
