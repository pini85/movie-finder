import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  selectedMovie,
  fetchMovies,
  fetchAdvancedSearch,
  fetchActorMovies,
} from "../../redux/actions/index";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";
import Pagination from "../Pagination/Pagination.component";

import Card from "../card/Card";
const MovieListSearch = (props) => {
  console.log(props, "props");

  const movies = () => {
    if (props.fetchMoviesData) {
      return (
        <>
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
      );
    } else if (props.fetchAdvancedSearch) {
      return (
        <>
          <Pagination
            api={props.fetchAdvancedSearch}
            data={props.advancedSearchMovies}
          />
          <div style={styleDiv}>
            {props.advancedSearchMovies &&
              props.advancedSearchMovies.results.map((movie) => {
                if (movie === null) return;

                return (
                  <div key={movie.id}>
                    <Card movie={movie}></Card>
                  </div>
                );
              })}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Pagination api={props.fetchActorMovies} data={props.actorMovies} />
          <div style={styleDiv}>
            {props.actorMovies &&
              props.actorMovies.results.map((movie) => {
                if (movie === null) return;

                return (
                  <div key={movie.id}>
                    <Card movie={movie}></Card>
                  </div>
                );
              })}
          </div>
        </>
      );
    }
  };

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
      {movies()}
    </>
    //
  );
};
const mapStateToProps = (state) => ({
  fetchMoviesData: state.fetchMovies,
  advancedSearchMovies: state.fetchAdvancedSearch,
  actorsMovies: state.actorMovies,
});
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  fetchMovies: (page) => fetchMovies(page),
  fetchAdvancedSearch: (page) => fetchAdvancedSearch(page),
  fetchActorMovies: (id, page) => fetchActorMovies(id, page),
})(MovieListSearch);
