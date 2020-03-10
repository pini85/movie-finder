import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { search, fetchMovies, selectedMovies } from "../../redux/actions";

const Input = props => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    props.search(searchQuery);
  }, [searchQuery]);
  const handleClick = () => {
    setIsSending(true);

    props.fetchMovies(props.history);
    props.history.push("/show-list");
    setSearchQuery("");

    setSearchQuery("");
    setIsSending(false);
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
    </div>
  );
};

const mapStateToProps = state => ({
  // isSending: state.isSending,
  fetchMoves: fetchMovies,
  selectedMovies: state.selectedMovies
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    search: search,
    fetchMovies: fetchMovies
  })
)(Input);
