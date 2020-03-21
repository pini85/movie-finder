import React, { useEffect, useState } from "react";
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
      <Option title="newest movies" dataType="1"></Option>
      <Option title="highest rating" dataType="2"></Option>
      <Option title="recommended to you" dataType="3"></Option>
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
