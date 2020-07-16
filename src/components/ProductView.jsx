import React, { Component } from 'react'
import _ from "lodash";
import { Redirect } from 'react-router-dom';
import './Products.css'
var distance = require('gps-distance');

export class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullProduct: {},
            sendToCart: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.matchUser = this.matchUser.bind(this);
    }

    componentDidMount() {
        this.matchProduct();
    }

    matchProduct() {
        let product = _.filter(this.props.products, { id: this.props.productSelect })[0];
        this.setState({fullProduct: product});
    }

    handleClick = (product_id) => {
        this.setState({ sendToCart: product_id })
        this.props.updateCart(product_id)
    }

    matchUser(user_id) {
        if (this.props.users.length > 0) {
            let index = _.findIndex(this.props.users, { 'id': user_id });
            if(index >= 0) { return this.props.users[index].name }
        } else {
            return '';
        }
    }

    render() {
        const fullProduct = this.state.fullProduct;
        if (fullProduct) {
        return (
            
            <div key={fullProduct.id} className='container'>
                <img className='fullsize' src={fullProduct.image_url} alt={fullProduct.name} />
                <h3 key={fullProduct.id} >{fullProduct.name}</h3>
                <p>Category: {fullProduct.category}</p>
                <p>Quantity available: {fullProduct.quantity}</p>
                <p>{fullProduct.description}</p>
                <p>Provided by: {this.props.users ? this.matchUser(fullProduct.user_id) : ''}</p>
                <p>Posted: {Math.floor(Math.abs(new Date() - new Date(fullProduct.created_at)) / 1000 / 60 / 60 / 24)} days ago</p>
                {this.props.loggedInStatus ? (
                    <p>
                        {Math.round(distance(parseInt(fullProduct.lat), parseInt(fullProduct.lng), this.state.userGPS.lat, this.state.userGPS.lng))}km away
                    </p>
                ) : (
                        <p>Location: {fullProduct.location}</p>
                    )}
                {this.props.isLoggedIn ?
                    <button type="button" className="btn btn-success btn-sm" onClick={() => { this.handleClick(fullProduct.id) }}>Add to Cart</button> : ''
                }
                {this.state.sendToCart ?
                    <Redirect to={{ pathname: "/shoppingcart", state: { product_id: this.state.sendToCart } }} /> : ''
                }
            </div>
            
        )
            }
            return ''
    }
}

export default ProductView
