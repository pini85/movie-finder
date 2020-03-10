import React from "react";
import Input from "../input/Input.component";
import { connect } from "react-redux";
import { movieSuggestions } from "../../redux/actions/index";

const Navbar = props => {
  return (
    <div style={{ background: "var(--primary-color)", height: "6vh" }}>
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
