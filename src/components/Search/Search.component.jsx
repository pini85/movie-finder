import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  search,
  fetchMovies,
  movieSuggestions,
  showSearchResults,
} from "../../redux/actions";
import { tmdbQueryApi } from "../../apis/tmdbApi";
import Suggestions from "../Suggestions/Suggestions.component";
import Button from "../Button/Button";
import Input from "../Input/Input.component";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";
import useWidth from "../../hooks/useWidth.hooks";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const width = useWidth().width;

  useDidUpdateEffect(() => {
    setTimeout(async () => {
      const data = !!searchQuery.length && (await tmdbQueryApi(1, searchQuery));

      props.movieSuggestions(data);
    }, 150);
  }, [searchQuery]);

  const handleClick = () => {
    props.search(searchQuery);
    props.fetchMovies(1);
    props.showSearchResults("search");
    setSearchQuery("");
    if (width < 500) {
      props.setOpen((val) => !val);
    }
    props.history.push(`/search/q=${searchQuery}/page/1`);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const container = {
    display: "flex",
    alignItems: "center",
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div onKeyDown={handleKeyDown} style={container}>
      <Input
        value={searchQuery}
        handleOnChange={handleChange}
        placeholder="The world is your oyster..."
      />
      <Button
        search={true}
        title={"search"}
        // disabled={isSending}
        handleClick={(e) => handleClick(e)}
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
    showSearchResults: showSearchResults,
  })
)(Search);
