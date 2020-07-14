import React, { Component } from 'react'
import axios from "axios";

export class Products extends Component {

    constructor() {
        super();
        this.state = {
            SERVER_URL: 'http://covid-co-op.herokuapp.com/products',
            products: [{ id: 1, user: 1, name: 'Scottys facemask', category: 'facemask', quantity: '3350', image_url: 'http://placekitten.com/150/150', description: 'Great quality facemasks made with love'}, { id: 2, user: 2, name: 'Lisas Gowns', category: 'gown', quantity: 1500, image_url: 'http://placekitten.com/150/150', description: 'Medical gowns for hospital use, hand stiched with nice patterns'}, { id: 3, user: 3, name: 'Larrys facemasks', category: 'facemask', quantity: 2200, image_url: 'http://placekitten.com/150/150', description: 'N9 facemasks, industry quality for surgical use'}]
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
            this.state.products.map(() => {

            })
        )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Products
