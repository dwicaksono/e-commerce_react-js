import React from "react";
import "../../components/button/customButton.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherData }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherData}
  >
    {children}
  </button>
);

export default CustomButton;
