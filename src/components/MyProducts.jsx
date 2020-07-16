import React, {useState, Component}  from 'react';
import { Redirect } from 'react-router-dom';
import './MyProducts.css';
import axios from 'axios';
import _ from "lodash";
import { render } from '@testing-library/react';
import { config } from '../Constants' // get prod/dev urls
let FRONT_END_URL = config.url.FRONT_END_URL;
let BACK_END_URL = config.url.API_URL;

class MyProfile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      products: this.props.products,
    }
    this.Product = this.Product.bind(this)
  }

  componentDidMount() {
    if (!this.props.loggedInStatus) {
      this.props.history.push('/sign-in')
    } else {
      this.setState({user_id: this.props.user.id})
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
                    <a href="" onClick={(event) => {
                      this.productRedirect(event, product.id);
                    }} ><h3 key={product.id} >{product.name.slice(0, 25)} ...</h3></a>
                      <p>Category: {product.category}</p>
                      <p>Quantity available: {product.quantity}</p>
                      <p>{product.description.slice(0, 30)}...</p>
                      <p>Provided by: <a href="">{this.matchUser(product.user_id)}</a></p>
                      <p>Posted: {Math.floor(Math.abs(new Date() - new Date(product.created_at))/1000/60/60/24)} days ago</p>
                      {this.props.isLoggedIn ?
                        <button type="button" className="btn btn-success btn-sm" onClick={() => {this.handleClick(product.id)}}>Add a Product</button> : ''
                      }
                  </div>
                  )
              })
          )
      } else{
          return '';
      }
    }

  Product = () => {
        return (
          this.state.updatedCart.map((p) => {
              return(
                <div>
                  <img src={p.image_url} alt={p.name}/>
                  <h3>{p.name.slice(0, 25)} ...</h3>
                  <p>Category: {p.category}</p>
                  <p>Quantity available: {p.quantity}</p>
                  <p>{p.description.slice(0, 30)}...</p>
                </div>
              )
            }
          ))}

  render() {
    return(
      <div className="myProducts">
        {this.props.loggedInStatus ? (
          <div className="shoppingCart">
            <h1>My Products</h1>
            {/*}<p>{this.Product()}</p>*/}
            <div className="row">
              {this.showProducts(this.state.products)}
            </div>
            <button type="button" className="btn btn-success btn-sm" onClick={() => {this.handleClick()}}>Add Product</button>

          </div>
          ) : (
            <h1>Please Sign in to see your products</h1>
        )}
      </div>
    )
  }
}


export default MyProfile;
