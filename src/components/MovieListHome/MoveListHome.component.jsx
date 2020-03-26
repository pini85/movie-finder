import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  selectedMovie,
  fetchMovies,
  currentPage,
  fetchNewestMovies,
  fetchHighestRatedMovies
} from "../../redux/actions/index";
import usePagination from "../../hooks/usePagination.hook";

import Card from "../card/Card";
const MovieList = props => {
  useEffect(() => {
    const fetchData = async () => {
      switch (props.optionActive) {
        case "1":
          props.newestMovies(1);
          props.currentPage(1);

          break;
        case "2":
          props.highestRatedMovies(1);
          props.currentPage(1);

        case "3":
      }
    };

    fetchData();
  }, [props.optionActive]);

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

  const styleDiv = {
    display: "flex",
    flexdirection: "column",

    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    background: "var(--secondary-color)"
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "var(--secondary-color)"
        }}
      >
        <div style={{ margin: "0 auto" }}>
          {usePagination(
            currentData(),
            props.currentPageData,
            props.currentPage,
            props.optionActive
          )}
        </div>
      </div>
      <div style={styleDiv}>
        {props.movies &&
          props.movies.map(movie => {
            if (movie === null) return;
            //

            return (
              <div key={movie.id}>
                <Card movie={movie}></Card>
              </div>
            );
          })}
      </div>
      <div style={{ margin: "0 auto" }}>
        {usePagination(
          currentData(),
          props.currentPageData,
          props.currentPage,
          props.optionActive
        )}
      </div>
    </>
    //
  );
};
const mapStateToProps = state => ({
  fetchMoviesData: state.fetchMovies,
  currentPageData: state.currentPage,
  optionActive: state.optionActive,
  newestMoviesData: state.newestMovies,
  highestRatedMoviesData: state.highestRatedMovies,
  movieSliderData: state.movieSliderData
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  fetchMovies: page => fetchMovies(page),
  currentPage: currentPage,
  newestMovies: page => fetchNewestMovies(page),
  highestRatedMovies: page => fetchHighestRatedMovies(page)
})(MovieList);
