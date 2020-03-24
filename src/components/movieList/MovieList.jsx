import React from "react";
import { connect } from "react-redux";
import {
  selectedMovie,
  fetchMovies,
  currentPage
} from "../../redux/actions/index";
import usePagination from "../../hooks/usePagination.hook";
import { tmdbQueryApi } from "../../apis/tmdbApi";

import Card from "../card/Card";
const MovieList = props => {
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
        {usePagination(
          [props.fetchMovies, props.fetchMoviesData],
          props.currentPageData,
          props.currentPage,
          props.optionActive
        )}
      </div>
      <div style={styleDiv}>
        {props.fetchMoviesData &&
          props.fetchMoviesData.results.map(movie => {
            if (movie === null) return;
            //

            return (
              <div key={movie.id}>
                <Card movie={movie}></Card>
              </div>
            );
          })}
      </div>
    </>
    //
  );
};
const mapStateToProps = state => ({
  fetchMoviesData: state.fetchMovies,
  currentPageData: state.currentPage
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  fetchMovies: page => fetchMovies(page),
  currentPage: currentPage
})(MovieList);
