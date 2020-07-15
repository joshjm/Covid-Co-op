import React, { Component } from 'react'
import _ from "lodash";
import './ShoppingCart.css'

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: ''
     }
    product_id: this.props.location.state
  }

  showProducts(productsArray) {
    if(productsArray) {
      return(
        productsArray.map((product) => {
          return(
          <div key={product.product_id} className='col-3 item'>
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
    } else {
      return '';
    }
  }

  render() {
    return(
      <div className="shoppingCart">
        {this.props.loggedInStatus ? (
          <div className="shoppingCart">
            <h1>Shopping Cart</h1>
            <p>{this.showProducts()}</p> // pass through product id to grab product info
          </div>
          ) : (
            <h1>Please Sign in to see your cart</h1>
        )}
      </div>
    )
  }
}

//
// //create a stateless component to display the shopping cart items
// export const ShoppingCart = (props) => {
//     //if the shopping cart has no items, let user know the cart is empty.
//     if (props.product.length === 0) {
//         return (
//             <div className="EmptyCart">
//                 <Header Product={props.Product}/>
//                 Nothing in Cart, please add something.
//             </div>)
//     } else{
//         return (
//         <div className="shoppingCart" id="shoppingCartScroll" onClick={(e) => props.lockScroll(e)}>
//             <Header Product={props.Product}/>
//             <ProductDisplay removeItem={props.removeItem} productUpdate={props.productUpdate} items={props.items} checkout={props.checkout} Prices={props.Prices} />
//         </div>)
//     };
// }
//
//
// //similar function to TypeSelector, see notes on TypeSelector
// class Quantity extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             quantity: this.props.quantity,
//         }
//         this.handleQuantityChange = this.handleQuantityChange.bind(this);
//     }
//
//     handleQuantityChange = async (e) => {
//         const userInput = e.target.value;
//         await this.setState({quantity: userInput})
//         this.props.quantityCallBack(this.state.quantity)
//     }
//
//     render(){
//         return(
//             <td>
//                 <input
//                     name="number"
//                     type="number"
//                     value={this.state.quantity}
//                     onChange={this.handleQuantityChange}
//                     max="10"
//                     min="1"/>
//             </td>
//         )
//     }
// }
//
// //A function to display all the cart items the user selected and allow them to change type, size, and quantity
// class ProductDisplay extends React.Component {
//     constructor(props) {
//         super(props);
//         this.productUpdate = this.productUpdate.bind(this);
//     }
//
//     //update products upon any change.
//     productUpdate = (size, type, quantity, index) => {
//         this.props.productUpdate(size, type, quantity, index);
//     }
//
//     //simple render function
//     render() {
//         return (
//             <div className="cartList">
//                 {this.props.items.map((currItem, index)=>
//                     <Display item={currItem} removeItem={this.props.removeItem} index={index} key={index} productUpdate={this.productUpdate} ppPrices={this.props.ppPrices} mgmPrices={this.props.mgmPrices} />
//                 )}
//                 <div className="checkoutButton" onClick={(e) => this.props.checkout()}>Checkout</div>
//             </div>
//         )
//     }
// }
//
//component that handles the display of each individual product
// class Display extends React.Component{
//     //will update size, type and quantity in this component, then send values to parent product display
//     constructor(props) {
//         super(props);
//         this.state = {
//             quantity: this.props.item.order.quantity,
//         }
//         this.quantityCallBack = this.quantityCallBack.bind(this);
//     }
//
//     //get quantity from child, then send to parent(ProductDisplay)
//     quantityCallBack = (changedQuantity) => {
//         this.setState({
//             quantity: changedQuantity,
//             total: this.state.price*changedQuantity
//         })
//         this.props.productUpdate(this.state.size, this.state.type, this.state.quantity, this.props.index)
//     }
//
//     removeItem = (index) => {
//         this.props.removeItem(index);
//     }
//
//     //render individual item
//     render() {
//         return (
//             <div key={this.props.index} className="CartItem">
//                 <figure>
//                     <img src={this.props.item.Img.src} alt={this.props.item.Img.name} id={this.props.index} />
//                     <figcaption onClick={(e) => this.removeItem(this.props.index)}>Remove</figcaption>
//                 </figure>
//                 <form>
//                     <table className="ContentInformation"><tbody>
//                         <tr>
//                             <td><b>Image Description: </b></td>
//                             <td>{this.props.item.Img.description}</td>
//                         </tr>
//                         <tr>
//                             <td><b>Quantity:</b></td>
//                             <Quantity quantityCallBack={this.quantityCallBack} quantity={this.state.quantity} />
//                         </tr>
//                         <tr>
//                             <td><b>Price Per:</b></td>
//                             <td>${this.state.price}.00</td>
//                         </tr>
//                         <tr>
//                             <td><b>Total:</b></td>
//                             <td>${this.state.total}.00</td>
//                         </tr>
//                         </tbody></table>
//                 </form>
//             </div>
//         )
//     }
// }
//
// //simple header that changes if the site is mobile or not.
// const Header = (props) =>{
//     if(props.notMobile){
//         return(<h3>Shopping Cart<br/>Click Inside Cart to Lock Main Page Scrolling<br/>Click Edges to Unlock</h3>)
//     } else {
//         return(<h3>Shopping Cart</h3>)
//     }
// }

export default ShoppingCart;
