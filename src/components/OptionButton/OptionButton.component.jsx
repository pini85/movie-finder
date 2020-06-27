import React from "react";
import {} from "./OptionButton.styles";
import { Container } from "./OptionButton.styles";
const OptionButton = ({
  handleOptionClick,
  title,
  textColor,
  color1,
  color2,
  type,
}) => {
  return (
    <Container
      onClick={() => handleOptionClick(type)}
      textColor={textColor}
      color1={color1}
      color2={color2}
    >
      <div>{title}</div>
    </Container>
  );
};
export default OptionButton;
