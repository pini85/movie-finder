import React, { useEffect } from "react";
import { Header, Paragraph } from "./Home.styles";
import { connect } from "react-redux";
import {
  fetchMovieSlider,
  fetchNewestMovies,
  fetchHighestRatedMovies
} from "../../redux/actions";

import Carousel from "../carousel/carousel.component";
import Options from "../Options/Options.component";

import MovieList from "../movieList/MovieList";

const Home = props => {
  useEffect(() => {
    console.log("props", props.optionActive);

    const fetchData = async () => {
      props.movieSlider();
      switch (props.optionActive) {
        case "1":
          props.newestMovies();
          break;
        case "2":
          props.highestRatedMovies();
        case "3":
      }
    };

    fetchData();
  }, [props.optionActive]);

  const showList = () => {
    switch (props.optionActive) {
      case "1":
        return (
          props.newestMoviesData && (
            <MovieList movies={props.newestMoviesData.results} />
          )
        );
      case "2":
        return (
          props.highestRatedMoviesData && (
            <MovieList movies={props.highestRatedMoviesData.results} />
          )
        );
      case "3":
        return "Coming soon";
    }
  };

  const styleContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",

    backgroundColor: "var(--secondary-color)",
    overflow: "hidden"
  };
  return (
    <div>
      <div style={styleContainer}>
        <div>
          <Carousel></Carousel>
        </div>
        <div style={{ width: "100%" }}>
          <Header>Welcome to Movie Finder</Header>
          <Paragraph>Discover and watch</Paragraph>
          {console.log(props.highestRatedMoviesData)}
        </div>
        <Options />

        {showList()}
      </div>
    </div>
  );
};
const mapStateToDispatch = {
  newestMovies: fetchNewestMovies,
  movieSlider: fetchMovieSlider,
  highestRatedMovies: fetchHighestRatedMovies
};
const mapStateToProps = state => ({
  newestMoviesData: state.newestMovies,
  movieSliderData: state.movieSliderData,
  highestRatedMoviesData: state.highestRatedMovies,
  optionActive: state.optionActive
});

export default connect(mapStateToProps, mapStateToDispatch)(Home);
