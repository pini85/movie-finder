import React from "react";
import { Container } from "../AdvancedSearch/AdvancedSearch.styles";
const SelectInput = ({ title, data }) => {
  return (
    <Container>
      <label htmlFor={title}>{title}</label>
      <select name={title} id={title}>
        {data}
      </select>
    </Container>
  );
};
export default SelectInput;
