import React from "react";
// import "../../components/button/customButton.scss";
import { CustomButtonStyled } from "../button/customButtonStyled";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonStyled {...props}>{children}</CustomButtonStyled>
);

export default CustomButton;
