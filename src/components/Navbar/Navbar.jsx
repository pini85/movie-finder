import React from "react";
import Input from "../input/Input.component";
import { connect } from "react-redux";
import { movieSuggestions } from "../../redux/actions/index";
import { logo } from "../../images/logo.png";
const styleContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 6px 20px",
  background: "var(--secondary-color-light)",
  height: "7vh"
};
const image = {
  height: "6rem",
  width: "23rem"
};
const Navbar = props => {
  return (
    <div style={styleContainer}>
      <div className="hi">
        <img
          style={image}
          className="YUP"
          src={require("../../images/logo.png")}
          alt=""
        />
      </div>

      <Input />
    </div>
  );
};
const mapStateToProps = state => ({
  userSuggestions: state.movieSuggestions
});
export default connect(mapStateToProps, {
  movieSuggestions: movieSuggestions
})(Navbar);
