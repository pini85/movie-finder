import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { search, fetchMovies, movieSuggestions } from "../../redux/actions";
import { tmdbQueryApi } from "../../apis/tmdbApi";
import Suggestions from "../Suggestions/Suggestions.component";

const Input = props => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const asyncFunc = async () => {
      props.search(searchQuery);
      if (searchQuery.length > 0) {
        const data = await tmdbQueryApi(searchQuery);

        props.movieSuggestions(data);
      } else {
        props.movieSuggestions(false);
      }
    };
    asyncFunc();
  }, [searchQuery]);

  const handleClick = () => {
    setIsSending(true);
    props.fetchMovies(props.history);
    setSearchQuery("");
    setIsSending(false);
    props.history.push("/show-list");
  };

  const styleInput = {
    width: "18rem",
    height: "2.5rem",
    padding: "2rem"
  };

  return (
    <div>
      <input
        style={styleInput}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
      />
      <button disabled={isSending} onClick={handleClick}>
        Search
      </button>
      {props.userSuggestions && <Suggestions items={props.userSuggestions} />}
    </div>
  );
};

const mapStateToProps = state => ({
  // isSending: state.isSending,
  fetchMoves: fetchMovies,
  selectedMovies: state.selectedMovies,
  userSuggestions: state.movieSuggestions,
  query: state.search
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    search: search,
    fetchMovies: fetchMovies,
    movieSuggestions: movieSuggestions
  })
)(Input);
