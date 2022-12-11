import React, { Component } from "react";
import {Link} from "react-router-dom"
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge onClick={()=>this.props.removeFromCart(cartItem.product)} color="danger">X</Badge>
              {cartItem.product.name}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() {
    return (
    <NavItem>
        <NavLink>Empty Cart</NavLink>
    </NavItem>
  )}


  render() {
    return <div>{this.props.cart.length>0 ?this.renderSummary(): this.renderEmptyCart()}</div>
  }
}
