import React from "react";
import { connect } from "react-redux";
import { history, withRouter } from "react-router-dom";
import { compose } from "redux";
import { optionActive } from "../../redux/actions";

import { Container } from "./Option.styles";

const Option = ({
  history,
  title,
  optionActive,
  optionActiveData,
  dataType,
  changeUrl,
  changeUrlName,
}) => {
  const activeEl = () => {
    if (optionActiveData === 1 && dataType === 1) {
      return {
        background: "var(--primary-color",
        color: "var(--color-dark)",
      };
    }
    if (optionActiveData === 2 && dataType === 2) {
      return {
        background: "var(--primary-color",
        color: "var(--color-dark)",
      };
    }
    if (optionActiveData === 3 && dataType === 3) {
      return {
        background: "var(--primary-color",
        color: "var(--color-dark)",
      };
    }
  };

  const handleClick = (e) => {
    optionActive(e);
    if (changeUrl) {
      history.push(`/movies/${changeUrlName}/page/1`);
    }
  };

  return (
    <Container onClick={handleClick} style={activeEl()} data-type={dataType}>
      {title}
    </Container>
  );
};
const mapStateToDispatch = {
  optionActive: optionActive,
};
const mapStateToProps = (state) => ({
  optionActiveData: state.optionActive,
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapStateToDispatch)
)(Option);
