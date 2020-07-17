import React, { Component } from 'react'
import axios from 'axios';
import _ from "lodash";
import App from './App'
import Products from './Products'
import { Redirect, Link } from 'react-router-dom';
import './ShoppingCart.css'

const SERVER_URL = 'http://localhost:3000/products.json';
const PRODUCT_URL = 'http://localhost:3000/products/';

class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product_ids: [],
      updatedCart: []
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
      this.setState({updatedCart: updatedCart},() => {
        this.setState((prevState) => ({
          ...prevState,
          updatedCart: prevState.updatedCart.map(p => ({...p, orderQuantity: 0}))
        }))
      })
    }
  }

  Product = () => {

    const IncrementItem = (i, n) => {
      const products = this.state.updatedCart.slice(0);
      products.forEach((e) => {
        if (e.id == i && e.quantity > e.orderQuantity ) {
          e.orderQuantity = n+1;
        }
      })
      this.setState({
        updatedCart: products
      });
    }
    const DecreaseItem = (i, n) => {
      const products = this.state.updatedCart.slice(0);
      products.forEach((e) => {
        if (e.id == i && e.orderQuantity > 0) {
          e.orderQuantity = n-1
        }
      })
      this.setState({
        updatedCart: products
      });
    }
      const ToggleClick = () => {
          this.setState({
            show: !this.state.show
          });
        }
      const handleChange = (event, i) => {
        console.log(event.target.value, i)
        const products = this.state.updatedCart.slice(0)
        products.forEach((e) => {
          if (e.id == i) {
            e.orderQuantity = event.target.value
          }
        })
        this.setState({
          updatedCart: products
        });
      }

    return (
      this.state.updatedCart.map((p, i) => {
        console.log(p);
          return(
            <div key={p.id}>
              <img src={p.image_url} alt={p.name}/>
              <h5>{p.name.slice(0, 25)} ...</h5>
              <p>Category: {p.category}</p>
              <p>Quantity available: {p.quantity}</p>
              <p>{p.description.slice(0, 30)}...</p>
              {p.quantity > 0 ?
                <div>
                  <button onClick={() => DecreaseItem(p.id, p.orderQuantity )}>-</button>
                  <input className="input" value={p.orderQuantity} onChange={(e) => handleChange(e, p.id)}/>
                  <button onClick = {() => IncrementItem(p.id, p.orderQuantity )}>+< /button>
                </div> :
                <p className="text-danger"> product is out of stock </p>
              }
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
            <p>{this.Product()}</p>
            <Link to="/my-purchase" className="btn btn-success btn-sm" >Check out</Link>
          </div>
          ) : (
            <h1>Please Sign in to see your cart</h1>
        )}
      </div>
    )
  }
}

export default ShoppingCart;
