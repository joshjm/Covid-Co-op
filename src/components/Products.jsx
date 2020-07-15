import React, { Component } from 'react'
import _, { uniq } from "lodash";
import SearchResults from 'react-filter-search'
import './Products.css'

export class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
<<<<<<< HEAD
            value: ''
            shoppingcart
=======
            value: '',
            products: [],
            sendToCart: ''
>>>>>>> f7fa8565a663ebc1a720bdd0101daecf428f4be6
        }

        this.showProducts = this.showProducts.bind(this);
        this.matchUser = this.matchUser.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }


    // AXIOS CALL TO GET ALL PRODUCTS FROM THE SERVER


    matchUser(user_id) {
        if (this.props.users.length > 0) {
            return this.props.users[_.findIndex(this.props.users, { id: user_id })].name;
        } else {
            return '';
        }
    }


    handleClick = (product_id) => {
        console.log(product_id);
      this.setState({ sendToCart: product_id })
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
                        {this.props.isLoggedIn ? <button type="button" className="btn btn-success btn-sm" onClick={() => {this.handleClick(product.id)}}>Add to Cart</button> : ''}
                    </div>
                    )
                })
            )
        } else{
            return '';
        }
    }

    getCategories() {
        let allCategories = [];
        if (this.props.products){

            this.props.products.map((product) => {
                allCategories.push(product.category);
            });
            let unique = allCategories.filter((item, i, ar) => ar.indexOf(item) === i);
            return unique.map((category) => {
                return (<option value={category} key={category}> {category} </option>)
            });
        }
    }

    render() {
        return (
            <div className='row'>
                <div className="row">
                    <div className="col-8 searchbar">
                        <span className="search-heading">{"Search:"}</span> <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="col-4 sort">
                        <div className="cat-select">
                            <span className="category-heading">{"Category:"}</span>
                            <select id="categories" name="categories">
                                {this.getCategories()}
                                <option value="all">None</option>
                            </select>
                        </div>
                        <div className="sort-select">
                            <span className="sort-heading">{"Sort by:"}</span>
                            <select id="sort" name="sort">
                                <option value="created-at">Date Added</option>
                                <option value="num-orders">Popularity</option>
                                <option value="quantity">Quantity Available</option>
                            </select>
                        </div>
                    </div>
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
