import React from "react";
import { Container } from "./Option.styles";

const Option = ({ title, setActive }) => {
  return <Container onClick={() => setActive(true)}>{title}</Container>;
};

export default Option;
