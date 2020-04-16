import React from "react";
import { StyledInput } from "./Input.styles";
const Input = ({ value, placeholder, handleOnChange, name, focus, blur }) => {
  return (
    <StyledInput
      onFocus={focus}
      onBlur={blur}
      data-tag={name}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleOnChange}
    />
  );
};
export default Input;
