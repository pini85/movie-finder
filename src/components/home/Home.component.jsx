import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import {
  selectedMovies,
  movieSuggestions,
  isSending
} from "../../redux/actions/index";

import Input from "../input/Input.component";
import MovieList from "../movieList/MovieList";
import Suggestions from "../Suggestions/Suggestions.component";
import { tmdbQueryApi } from "../../apis/tmdbApi";
import { compose } from "redux";

const Home = props => {
  // useEffect(() => {
  //   console.log("im being calllled");

  //   const handleSearchChange = async () => {
  //     if (props.query.length > 0) {
  //       const data = await tmdbQueryApi(props.query);

  //       // setUserSuggestions(data);
  //       props.movieSuggestions(data);
  //     } else {
  //       props.movieSuggestions(false);
  //     }
  //   };
  //   handleSearchChange();
  // }, [props.query]);

  return <div style={{ background: "var(--primary-color)" }}></div>;
};
// return { songs: state.songs};
const mapStateToProps = state => {
  return { userSuggestions: state.movieSuggestions, query: state.search };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    selectedMovies: selectedMovies,
    movieSuggestions: movieSuggestions,
    isSending: isSending
  })
)(Home);
