import React, { useEffect, useState } from "react";
import { Header, Paragraph } from "./Home.styles";
import { connect } from "react-redux";
import {
  fetchMovieSlider,
  fetchNewestMovies,
  fetchHighestRatedMovies,
  currentPage
} from "../../redux/actions";

import Carousel from "../carousel/carousel.component";
import Options from "../Options/Options.component";

import MovieListHome from "../MovieListHome/MoveListHome.component";

const Home = props => {
  useEffect(() => {
    props.movieSlider();
  }, []);

  const showList = () => {
    switch (props.optionActive) {
      case "1":
        return (
          props.newestMoviesData && (
            <MovieListHome movies={props.newestMoviesData.results} />
          )
        );
      case "2":
        return (
          props.highestRatedMoviesData && (
            <MovieListHome movies={props.highestRatedMoviesData.results} />
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
    flexDirection: "column",

    backgroundColor: "var(--secondary-color)",
    overflow: "hidden"
  };
  return (
    <div style={styleContainer}>
      <Carousel></Carousel>

      <div style={{ width: "100%" }}>
        <Header>Welcome to Movie Finder</Header>
        <Paragraph>Discover and watch</Paragraph>
      </div>
      <Options />

      {showList() || <div>Loading</div>}
    </div>
  );
};
const mapStateToDispatch = {
  newestMovies: page => fetchNewestMovies(page),
  movieSlider: fetchMovieSlider,
  highestRatedMovies: page => fetchHighestRatedMovies(page),
  currentPage: currentPage
};
const mapStateToProps = state => ({
  newestMoviesData: state.newestMovies,
  movieSliderData: state.movieSliderData,
  highestRatedMoviesData: state.highestRatedMovies,
  optionActive: state.optionActive,
  currentPageData: state.currentPage
});

export default connect(mapStateToProps, mapStateToDispatch)(Home);
