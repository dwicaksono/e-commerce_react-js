import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { cartToggle } from "../../redux/cart/cartAction";
import "./cart-icon.scss";

const CartIcon = ({ cartToggle }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={cartToggle} />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  cartToggle: () => dispatch(cartToggle()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
