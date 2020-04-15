import React from "react";
import { StyledInput } from "./Input.styles";
const Input = ({ value, placeholder, handleOnChange, name, focus }) => {
  return (
    <StyledInput
      onFocus={focus}
      data-tag={name}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleOnChange}
    />
  );
};
export default Input;
