import React, { Component } from 'react'
import axios from "axios";

export class Products extends Component {

    constructor() {
        super();
        this.state = {
            SERVER_URL: 'http://covid-co-op.herokuapp.com/products',
            products: []
        }
        this.fetchProducts = this.fetchProducts.bind(this);
        this.showProducts = this.showProducts.bind(this);

        this.fetchProducts();
    }


    // AXIOS CALL TO GET ALL PRODUCTS FROM THE SERVER
    fetchProducts() {
        axios.get(this.state.SERVER_URL)
            .then(response => {
                if (response.data) {
                    this.setState({products: response.data});
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
                }
            })
    }

    showProducts() {
        return(
            this.state.products.map((product) => {
                return(
                <div key={product.id}>
                    <img src={product.image_url} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <p>Category: {product.category}</p>
                    <p>Quanity available: {product.quantity}</p>
                    <p>{product.description}</p>
                    <p>Provided by: {product.user}</p>
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
