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
  // const [isSending, setIsSending] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleSearchChange = async () => {
      if (props.query.length > 0) {
        const data = await tmdbQueryApi(props.query);
        console.log("im in home", data);

        // setUserSuggestions(data);
        props.movieSuggestions(data);
      } else {
        props.movieSuggestions(false);
      }
    };
    handleSearchChange();
  }, [props.query]);

  const sendRequest = async e => {
    if (props.query.length > 0) {
      if (e.charCode == 13 || e.target) {
        props.isSending(true);

        const data = await tmdbQueryApi(props.query);
        // setMovieData(data);
        props.selectedMovies(data);
        // props.isSending(false);

        setSearchQuery("");
        props.history.push("/show-list");
      }
    }
  };

  return (
    <div style={{ background: "var(--primary-color)" }}>
      {/* {props.userSuggestions && <Suggestions items={props.movieSuggestions} />} */}
    </div>
  );
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
