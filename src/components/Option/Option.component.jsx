import React from "react";
import { connect } from "react-redux";
import { optionActive } from "../../redux/actions";

import { Container } from "./Option.styles";

const Option = ({ title, optionActive, dataType }) => {
  const activeEl = () => {
    if (optionActive) {
      return {
        background: "var(--primary-color",
        color: "var(--color-dark)"
      };
    }
  };
  return (
    <Container
      onClick={e => optionActive(e)}
      style={activeEl()}
      data-type={dataType}
    >
      {title}
    </Container>
  );
};

export default connect(null, {
  optionActive: optionActive
})(Option);
