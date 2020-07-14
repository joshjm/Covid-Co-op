import React, { Component } from 'react'

export class Products extends Component {

    constructor() {
        super();
        this.state = {
            SERVER_URL: 'http://covid-co-op.herokuapp.com/products',
            products: []
        }
        this.fetchProducts = this.fetchProducts.bind(this);
        this.showProducts = this.showProducts.bind(this);
    }


    // AXIOS CALL TO GET ALL PRODUCTS FROM THE SERVER
    fetchProducts() {
        axios.get(this.state.SERVER_URL)
            .then(response => {
                if (response.data) {
                    this.setState({products: response.data});
                } else {
                    this.setState({
                        errors: response.data.errors;
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
