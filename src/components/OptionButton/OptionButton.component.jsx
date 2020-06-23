import React from "react";
import {} from "./OptionButton.styles";
import { Container } from "./OptionButton.styles";
const OptionButton = ({ handleClick, title }) => {
  return (
    <Container onClick={handleClick} textLight={colors.lightVibrant}>
      <div>{title}</div>
    </Container>
  );
};
export default OptionButton;
