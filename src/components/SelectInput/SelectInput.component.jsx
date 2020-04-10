import React from "react";
import { StyleSelect, StyleOptionDisabled } from "./SelectInput.styles";
const SelectInput = ({ title, data }) => {
  return (
    <StyleSelect name={title} id={title}>
      <StyleOptionDisabled disabled selected value>
        {title}
      </StyleOptionDisabled>
      {data}
    </StyleSelect>
  );
};
export default SelectInput;
