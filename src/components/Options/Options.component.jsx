import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  optionActive,
  fetchNewestMovies,
  fetchHighestRatedMovies,
  currentPage
} from "../../redux/actions";

import Option from "../Option/Option.component";
import { OptionsContainer } from "./Options.styles";

const Options = props => {
  useEffect(() => {
    // debugger;

    switch (props.optionActiveData) {
      case "1":
        props.newestMovies(1);
        props.currentPage(1);
        console.log("called");
        break;

      case "2":
        props.highestRatedMovies(1);
        props.currentPage(1);
        break;
    }
  }, [props.optionActiveData]);

  return (
    <OptionsContainer>
      <Option title="Newest Movies" dataType="1"></Option>
      <Option title="Highest Rating" dataType="2"></Option>
      <Option title="Recommended To You" dataType="3"></Option>
    </OptionsContainer>
  );
};

const mapStateToDispatch = {
  newestMovies: page => fetchNewestMovies(page),
  highestRatedMovies: page => fetchHighestRatedMovies(page),
  optionActive: optionActive,
  currentPage: currentPage
};
const mapStateToProps = state => ({
  newestMoviesData: state.newestMovies,
  highestRatedData: state.highestRated,
  optionActiveData: state.optionActive
});

export default connect(mapStateToProps, mapStateToDispatch)(Options);
