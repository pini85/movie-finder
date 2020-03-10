import React, { useState, useEffect, useRef } from "react";
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
  const [userSuggestions, setUserSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const initialRender = useRef(true);

  useEffect(() => {
    const handleSearchChange = async () => {
      if (initialRender.current) {
        initialRender.current = false;
      } else {
        if (searchQuery.length > 0) {
          const data = await tmdbQueryApi(searchQuery);
          // setUserSuggestions(data);
          props.movieSuggestions(data);
        } else {
          setUserSuggestions(false);
          props.movieSuggestions(false);
        }
      }
    };
    handleSearchChange();
  }, [searchQuery]);

  const sendRequest = async e => {
    if (searchQuery.length > 0) {
      if (e.charCode == 13 || e.target) {
        props.isSending(true);
        const data = await tmdbQueryApi(searchQuery);
        // setMovieData(data);
        props.selectedMovies(data);
        props.isSending(false);
        setUserSuggestions(false);
        setSearchQuery("");

        props.history.push("/show-list");
      }
    }
  };

  return (
    <div style={{ background: "var(--primary-color)" }}>
      <Input
        sendRequest={sendRequest}
        handleSearchChange={setSearchQuery}
        // isDisabled={isSending}
        value={searchQuery}
      />
      {}

      {props.userSuggestions && <Suggestions items={props.movieSuggestions} />}
    </div>
  );
};

const mapStateToProps = state => ({
  userSuggestions: state.movieSuggestions
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    selectedMovies: selectedMovies,
    movieSuggestions: movieSuggestions,
    isSending: isSending
  })
)(Home);
