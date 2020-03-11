import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  selectedMovieId,
  movieSuggestions,
  search
} from "../../redux/actions/index";
import "./suggestion.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faStar } from "@fortawesome/free-solid-svg-icons";

const Suggestion = props => {
  const handleClick = () => {
    props.selectedMovieId(props.item.id);
    // props.movieSuggestions(false);
    props.search("");
    props.history.push("/show-movie");
  };
  const styleContainer = {
    display: "flex",
    width: "35rem",
    padding: "1rem",
    fontSize: "1.7rem",
    color: "#ffeec9",
    borderBottom: "1px solid var(--background-color)"
  };
  const styleImg = {
    height: "7rem",
    width: "5rem",
    marginRight: "1rem"
  };
  const styleTitle = {};

  const styleIconAndYearContainer = {
    display: "flex",
    alignItems: "center"
  };

  return (
    <a onClick={handleClick}>
      <div className="container" style={styleContainer}>
        <img
          style={styleImg}
          src={`http://image.tmdb.org/t/p/w92//${props.item.poster_path}`}
          alt=""
        />
        <div>
          <div style={styleTitle}> {props.item.title}</div>
          <div style={styleIconAndYearContainer}>
            <FontAwesomeIcon icon={faFilm} />
            <div style={{ marginLeft: "1rem" }}>
              {props.item.release_date
                ? props.item.release_date.substr(0, 4)
                : null}
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "orange", marginRight: "1rem" }}
            />
            {props.item.vote_average}
          </div>
        </div>
      </div>
    </a>
  );
};

export default compose(
  withRouter,
  connect(null, {
    selectedMovieId: selectedMovieId,
    search: search,
    movieSuggestions: movieSuggestions
  })
)(Suggestion);
