import React, { Component } from 'react'
import _ from "lodash";
import SearchResults from 'react-filter-search'
import './Products.css'

export class Products extends Component {

    constructor() {
        super();

        this.state = {
            value: ''
        }

        this.showProducts = this.showProducts.bind(this);
        this.matchUser = this.matchUser.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    // AXIOS CALL TO GET ALL PRODUCTS FROM THE SERVER


    matchUser(user_id) {
        if (this.props.users.length > 0) {
            return this.props.users[_.findIndex(this.props.users, { id: user_id })].name;
        } else {
            return '';
        }
    }

    handleClick(user_id) {
      console.log('this is:', this)

    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ value });
    };

    showProducts(productsArray) {
        if(productsArray) {
            return(
                productsArray.map((product) => {
                    return(
                    <div key={product.id} className='col-3 item'>
                        <img src={product.image_url} alt={product.name}/>
                        <h3>{product.name.slice(0, 25)} ...</h3>
                        <p>Category: {product.category}</p>
                        <p>Quantity available: {product.quantity}</p>
                        <p>{product.description.slice(0, 30)}...</p>
                            <p>Provided by: <a href="">{this.matchUser(product.user_id)}</a></p>
                        <p>Posted: {Math.floor(Math.abs(new Date() - new Date(product.created_at))/1000/60/60/24)} days ago</p>
                        {this.props.loggedInStatus ? (
                            <p>Your location: {this.props.user.location}</p>
                        ) : (
                            <p>Location: {product.address}</p>
                        )}
                        <button type="button" id="submit-btn" className="btn btn-success btn-sm" onClick={this.handleClick}>Add to Cart</button>
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
                <div className="row">
                    <span className="search-heading">{"Search:"}</span> <input type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="row">
                    {this.showProducts()}
                    <SearchResults
                        value={this.state.value}
                        data={this.props.products}
                        renderResults={results => (
                            this.showProducts(results)
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default Products
