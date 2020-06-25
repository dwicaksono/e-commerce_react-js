import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../button/CustomButton.js";
import CartItem from "../cart-items/cart-items";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { cartToggle } from "../../redux/cart/cartAction";

import "./cart-dropdown.scss";

const cartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(cartToggle());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(cartDropdown));
