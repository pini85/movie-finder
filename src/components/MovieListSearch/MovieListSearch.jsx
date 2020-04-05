import React from "react";
import { connect } from "react-redux";
import { selectedMovie, fetchMovies } from "../../redux/actions/index";
import Pagination from "../Pagination/Pagination.component";

import { tmdbQueryApi } from "../../apis/tmdbApi";

import Card from "../card/Card";
const MovieListSearch = (props) => {
  console.log(props);

  const styleDiv = {
    display: "flex",
    flexdirection: "column",

    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    background: "var(--secondary-color)",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "var(--secondary-color)",
        }}
      ></div>
      <Pagination api={props.fetchMovies} data={props.fetchMoviesData} />
      <div style={styleDiv}>
        {props.fetchMoviesData &&
          props.fetchMoviesData.results.map((movie) => {
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
const mapStateToProps = (state) => ({
  fetchMoviesData: state.fetchMovies,
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  fetchMovies: (page) => fetchMovies(page),
})(MovieListSearch);
