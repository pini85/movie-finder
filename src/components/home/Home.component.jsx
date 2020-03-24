import React, { useEffect, useState } from "react";
import { Header, Paragraph } from "./Home.styles";
import { connect } from "react-redux";
import {
  fetchMovieSlider,
  fetchNewestMovies,
  fetchHighestRatedMovies,
  currentPage
} from "../../redux/actions";
import usePagination from "../../hooks/usePagination.hook";

import Carousel from "../carousel/carousel.component";
import Options from "../Options/Options.component";

import MovieList from "../movieList/MovieList";

const Home = props => {
  //couldn't wrap connect to custom hooks below. Had to lift the state.
  // const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      props.movieSlider();
      switch (props.optionActive) {
        case "1":
          props.newestMovies(1);

          console.log(props.currentPageData);

          // setCurrentPage(1);

          break;
        case "2":
          props.highestRatedMovies(1);
          props.currentPage(1);
        // setCurrentPage(1);
        case "3":
      }
    };

    fetchData();
  }, [props.optionActive]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     props.movieSlider();
  //   };

  //   fetchData();
  // }, []);

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
  const currentData = () => {
    switch (props.optionActive) {
      case "1":
        return [props.newestMovies, props.newestMoviesData];

      case "2":
        return [props.highestRatedMovies, props.highestRatedMoviesData];
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
    <div>
      <div style={styleContainer}>
        <div>
          <Carousel></Carousel>
        </div>
        <div style={{ width: "100%" }}>
          <Header>Welcome to Movie Finder</Header>
          <Paragraph>Discover and watch</Paragraph>
          {}
        </div>
        <Options />
        <div style={{ margin: "0 auto" }}>
          {usePagination(
            currentData(),
            props.currentPageData,
            props.currentPage,
            props.optionActive
          )}
        </div>

        {showList()}
        <div style={{ margin: "0 auto" }}>
          {usePagination(
            currentData(),
            props.currentPageData,
            props.CurrentPage,
            props.optionActive
          )}
        </div>
      </div>
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
