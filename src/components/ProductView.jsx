import React, { Component } from 'react'
import _ from "lodash";

export class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullProduct: {}
        }
    }

    componentDidMount() {
        this.matchProduct();
    }

    matchProduct() {
        let product = _.filter(this.props.products, { id: this.props.productSelect })[0];
        this.setState({fullProduct: product});
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ProductView
