import React from "react";
import { StyledInput } from "./Input.styles";
const Input = ({ value, onChange, placeholder }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
