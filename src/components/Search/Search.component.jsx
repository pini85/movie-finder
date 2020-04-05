import React, { useState, useEffect, useRef } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { search, fetchMovies, movieSuggestions } from "../../redux/actions";
import { tmdbQueryApi } from "../../apis/tmdbApi";
import Suggestions from "../Suggestions/Suggestions.component";
import Button from "../Button/Button";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSending, setIsSending] = useState(false);

  useDidUpdateEffect(() => {
    setTimeout(async () => {
      const data = !!searchQuery.length && (await tmdbQueryApi(1, searchQuery));
      props.movieSuggestions(data);
    }, 150);
  }, [searchQuery]);

  const handleClick = () => {
    // setIsSending(true);
    props.search(searchQuery);
    props.fetchMovies(1);
    setSearchQuery("");
    // setIsSending(false);
    props.history.push(`/search/q=${searchQuery}/page/1`);
  };

  const container = {
    display: "flex",
    alignItems: "center",
  };

  const styleInput = {
    width: "18rem",
    height: "2.5rem",
    padding: "1.5rem",
    marginRight: "1rem",
    border: "2px solid var(--primary-color)",
  };

  return (
    <div style={container}>
      <input
        style={styleInput}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
      />
      <Button
        search={true}
        title={"search"}
        // disabled={isSending}
        handleClick={handleClick}
      ></Button>

      {props.userSuggestions && <Suggestions items={props.userSuggestions} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSending: state.isSending,
  // fetchMoves: state.fetchMovies,
  selectedMovies: state.selectedMovies,
  userSuggestions: state.movieSuggestions,
  query: state.search,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    search: search,
    fetchMovies: (page) => fetchMovies(page),
    movieSuggestions: movieSuggestions,
  })
)(Search);
