import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import CheckOutItem from "../../components/checkout-item/checkout-item.js";
import CheckOutStripeButton from "../../components/stripe/stripe";
import "./checkout.scss";

const checkOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <div className="test-warning">
      * Please use the following test credit card for payments *
      <br />
      1234 1234 1234 1234 - Exp: 01/02 - CVV:123
    </div>

    <CheckOutStripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(checkOutPage);
