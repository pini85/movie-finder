import React from "react";
import { Container, Img, IconAndYearContainer } from "./Suggestion.styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  selectedMovieId,
  movieSuggestions,
  search,
} from "../../redux/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faStar } from "@fortawesome/free-solid-svg-icons";

const Suggestion = (props) => {
  const handleClick = () => {
    props.selectedMovieId(props.item.id);
    props.movieSuggestions(false);
    props.search("");
  };

  return (
    <a onClick={handleClick}>
      <Container>
        <Img
          src={`http://image.tmdb.org/t/p/w92/${props.item.poster_path}`}
          alt=""
        />

        <div>
          <div> {props.item.title}</div>
          <IconAndYearContainer>
            <FontAwesomeIcon icon={faFilm} />
            <div style={{ marginLeft: "1rem" }}>
              {props.item.release_date
                ? props.item.release_date.substr(0, 4)
                : null}
            </div>
          </IconAndYearContainer>
          <div>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "orange", marginRight: "1rem" }}
            />
            {props.item.vote_average}
          </div>
        </div>
      </Container>
    </a>
  );
};

export default compose(
  withRouter,
  connect(null, {
    selectedMovieId: selectedMovieId,
    search: search,
    movieSuggestions: movieSuggestions,
  })
)(Suggestion);
