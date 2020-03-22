import React from "react";
import { connect } from "react-redux";
import {
  fetchNewestMovies,
  fetchHighestRatedMovies
} from "../../redux/actions";
import Option from "../Option/Option.component";
import { OptionsContainer } from "./Options.styles";

const Options = props => {
  return (
    <OptionsContainer>
      <Option title="Newest Movies" dataType="1"></Option>
      <Option title="Highest Rating" dataType="2"></Option>
      <Option title="Recommended To You" dataType="3"></Option>
    </OptionsContainer>
  );
};
const mapStateToDispatch = {
  newestMovies: fetchNewestMovies,
  highestRated: fetchHighestRatedMovies
};
const mapStateToProps = state => ({
  newestMoviesData: state.newestMovies,
  highestRatedData: state.highestRated
});

export default connect(mapStateToProps, mapStateToDispatch)(Options);
