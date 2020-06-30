import React from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../Firebase/FirebaseUtil.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./headerSyledComponent";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shops">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
