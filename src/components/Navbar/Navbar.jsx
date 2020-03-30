import React from "react";
import Search from "../Search/Search.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { movieSuggestions } from "../../redux/actions/index";
import { logo } from "../../images/logo.png";
const styleContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 6px 20px",
  background: "var(--secondary-color-light)",
  height: "7vh",
  padding: "3rem",
  zIndex: "2",
  position: "relative"
};
const image = {
  height: "6rem",
  width: "23rem",
  marginTop: "1rem"
};
const Navbar = props => {
  return (
    <div style={styleContainer}>
      {/* <Link to="/">
        <div className="hi">
          <img
            style={image}
            className="YUP"
            src={require("../../images/logo.png")}
            alt=""
          />
        </div>
      </Link>

      <Search /> */}
    </div>
  );
};
const mapStateToProps = state => ({
  userSuggestions: state.movieSuggestions
});
export default connect(mapStateToProps, {
  movieSuggestions: movieSuggestions
})(Navbar);
