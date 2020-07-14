import React, {Component} from 'react';
import Products from "./Products";

class Order extends Component{
    render(){
    return(
            <div>
                <h1>Order page</h1>
                <Products  />
            </div>
        )   
    }
}

export default Order;