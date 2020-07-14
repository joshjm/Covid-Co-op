import React, { Component } from 'react'
import axios from "axios";
import _ from "lodash";

export class Products extends Component {

    constructor() {
        super();
        this.showProducts = this.showProducts.bind(this);
        this.matchUser = this.matchUser.bind(this);
    }


    // AXIOS CALL TO GET ALL PRODUCTS FROM THE SERVER


    matchUser(user_id) {
        if (this.props.users.length > 0) {
            return this.props.users[_.findIndex(this.props.users, { id: user_id })].name;
        } else {
            return '';
        }
    }

    showProducts() {
        return(
            this.props.products.map((product) => {
                return(
                <div key={product.id}>
                    <img src={product.image_url} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <p>Category: {product.category}</p>
                    <p>Quanity available: {product.quantity}</p>
                    <p>{product.description}</p>
                    <p>Provided by: {this.matchUser(product.user_id)}</p>
                    <p>Uploaded at: {product.created_at}</p>
                </div>
                )
            })
        )
    }

    render() {
        return (
            <div>
                {this.showProducts()}
            </div>
        )
    }
}

export default Products
