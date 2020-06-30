import styled, { css } from "styled-components";

const buttonCustomStyledButton = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedStyledButton = css`
  background-color: white;
  color: black;
  border: none;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
  width: 70%;
  position: absolute;
  opacity: 0.7;
  top: 225px;
`;

const isGoogleSignInStyledButton = css`
  background-color: #74b9ff;
  color: white;
  border: none;
  &:hover {
    background-color: #0984e3;
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return isGoogleSignInStyledButton;
  }
  return props.inverted ? invertedStyledButton : buttonCustomStyledButton;
};

export const CustomButtonStyled = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;

  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
