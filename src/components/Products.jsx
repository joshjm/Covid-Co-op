import React, { Component } from 'react'
import _ from "lodash";
import './Products.css'

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
        if(this.props.products.length > 0) {
            return(
                this.props.products.map((product) => {
                    return(
                    <div key={product.id} className='col-3 item'>
                        <img src={product.image_url} alt={product.name}/>
                        <h3>{product.name.slice(0, 25)} ...</h3>
                        <p>Category: {product.category}</p>
                        <p>Quantity available: {product.quantity}</p>
                        <p>{product.description.slice(0, 30)}...</p>
                            <p>Provided by: <a href="">{this.matchUser(product.user_id)}</a></p>
                        <p>Posted: {Math.floor(Math.abs(new Date() - new Date(product.created_at))/1000/60/60/24)} days ago</p>
                    </div>
                    )
                })
            )
        } else{
            return '';
        }
    }

    render() {
        return (
            <div className='row'>
                {this.showProducts()}
            </div>
        )
    }
}

export default Products
