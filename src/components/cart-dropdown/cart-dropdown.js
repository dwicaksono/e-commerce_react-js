import React from "react";
import CustomButton from "../button/CustomButton.js";
import "./cart-dropdown.scss";

const cartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default cartDropdown;
