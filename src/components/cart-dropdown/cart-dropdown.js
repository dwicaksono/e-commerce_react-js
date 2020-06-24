import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/CustomButton.js";
import CartItem from "../cart-items/cart-items";

import "./cart-dropdown.scss";

const cartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(cartDropdown);