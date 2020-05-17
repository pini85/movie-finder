import React from "react";
import { connect } from "react-redux";
import { displayTheme } from "../../redux/actions/index";

import {} from "./LightSwitch.styles";
const LightSwitch = ({ displayTheme, theme }) => {
  const handleClick = () => {
    if (theme !== "dark-theme") {
      displayTheme("dark-theme");
    } else {
      displayTheme("default-theme");
    }
  };
  return (
    <div style={{ color: "white" }} onClick={handleClick}>
      LightSwitch
    </div>
  );
};
const mapStateToProps = (state) => ({
  theme: state.displayTheme,
});
export default connect(mapStateToProps, {
  displayTheme: (theme) => displayTheme(theme),
})(LightSwitch);
