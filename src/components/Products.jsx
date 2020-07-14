import React, { Component } from 'react'
import axios from "axios";
import _ from "lodash";

export class Products extends Component {

    constructor() {
        super();
        this.state = {
            PRODUCT_URL: 'http://covid-co-op.herokuapp.com/products',
            USER_URL: 'http://covid-co-op.herokuapp.com/users',
            products: [],
            users: []
        }
        this.fetchProducts = this.fetchProducts.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.showProducts = this.showProducts.bind(this);

        this.fetchProducts();
        this.fetchUsers();
    }


    // AXIOS CALL TO GET ALL PRODUCTS FROM THE SERVER
    fetchProducts() {
        axios.get(this.state.PRODUCT_URL)
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

    fetchUsers() {
        axios.get(this.state.USER_URL)
            .then(response => {
                if (response.data) {
                    this.setState({ users: response.data.users });
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
                    <p>Provided by: {this.state.users[_.findIndex(this.state.users, {id: product.user_id})].name}</p>
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
