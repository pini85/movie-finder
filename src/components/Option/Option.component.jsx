import React from "react";
import { connect } from "react-redux";
import { optionActive } from "../../redux/actions";

import { Container } from "./Option.styles";

const Option = ({ title, optionActive, optionActiveData, dataType }) => {
  const activeEl = () => {
    if (optionActiveData === "1" && dataType === "1") {
      return {
        background: "var(--primary-color",
        color: "var(--color-dark)"
      };
    }
    if (optionActiveData === "2" && dataType === "2") {
      return {
        background: "var(--primary-color",
        color: "var(--color-dark)"
      };
    }
    if (optionActiveData === "3" && dataType === "3") {
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
const mapStateToProps = state => ({
  optionActiveData: state.optionActive
});
export default connect(mapStateToProps, {
  optionActive: optionActive
})(Option);
