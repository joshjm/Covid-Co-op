import React, {Component} from 'react';
import Products from "./Products";

class Order extends Component{

    constructor() {
        super();
        this.propsIn = this.propsIn.bind(this);
    }

    propsIn() {
        if(this.props.users > 0 && this.props.products > 0) {
            return <Products users={this.props.users} products={this.props.products} />
        } else {
            return '';
        }
    }

    render(){
    return(
            <div>
                <h1>Order page</h1>
                {this.propsIn()}
            </div>
        )   
    }
}

export default Order;