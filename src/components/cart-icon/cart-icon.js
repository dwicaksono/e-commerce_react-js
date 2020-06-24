import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { cartToggle } from "../../redux/cart/cartAction";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import "./cart-icon.scss";

const CartIcon = ({ cartToggle, cartCount }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={cartToggle} />
    <span className="item-count">{cartCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  cartToggle: () => dispatch(cartToggle()),
});

const mapStateToProps = (state) => ({
  cartCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
