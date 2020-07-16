import React, {Component} from 'react';
import Products from "./Products";

class Order extends Component{

    constructor(props) {
        super(props);
        this.propsIn = this.propsIn.bind(this);
    }

    propsIn() {
        if(this.props.users.length > 0 && this.props.products.length > 0) {
            return <Products users={this.props.users} products={this.props.products} updateCart={this.props.updateCart} isLoggedIn={this.props.isLoggedIn} viewProduct={this.props.viewProduct}/>
        } else {
            return '';
        }
    }

    render(){
        return(
                <div>
                    <h1>Order page</h1>
                    {this.propsIn()}
                    <Products {...this.props}/>
                </div>
            )
        }
}

export default Order;
