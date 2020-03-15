import React from "react";
import { ButtonContainer } from "./button.styles";

const Button = props => {
  return (
    <ButtonContainer disabled={props.disabled} onClick={props.handleClick}>
      {props.title}
    </ButtonContainer>
  );
};

export default Button;
