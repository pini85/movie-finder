import React from "react";
import { connect } from "react-redux";
import { selectedMovie } from "../../redux/actions/index";

import Card from "../card/Card";
const MovieList = props => {
  const styleDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "var(--secondary-color)"
  };

  return (
    <div style={styleDiv}>
      {/* {props.fetchMovies
        ? props.fetchMovies.results.map(movie => {
            return (
              <div key={movie.id}>
                <Card movie={movie}></Card>
              </div>
            );
          })
        : null} */}
      {props.movies
        ? props.movies.map(movie => {
            return (
              <div key={movie.id}>
                <Card movie={movie}></Card>
              </div>
            );
          })
        : null}
    </div>
    //
  );
};
const mapStateToProps = state => ({
  fetchMovies: state.fetchMovies
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie
})(MovieList);
