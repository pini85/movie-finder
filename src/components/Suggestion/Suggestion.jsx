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
import { faFilm, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import useWidth from "../../hooks/useWidth.hooks";

const Suggestion = (props) => {
  const width = useWidth().width;
  const handleClick = (e) => {
    console.log(e);

    props.selectedMovieId(props.item.id);
    props.movieSuggestions(false);
    props.search("");
    props.history.push(`/movie/${props.item.id}`);
  };
  const renderContent = () => {
    if (props.item.known_for_department) {
      return (
        <>
          <Img
            src={`http://image.tmdb.org/t/p/w92/${props.item.profile_path}`}
            alt=""
          />
          <div>
            <div> {props.item.name}</div>
            <IconAndYearContainer>
              <FontAwesomeIcon icon={faUser} style={{ marginBottom: "5px" }} />
              <div style={{ marginLeft: "1rem" }}>
                {props.item.known_for_department === "Acting"
                  ? "Actor"
                  : "Director"}
              </div>
            </IconAndYearContainer>
          </div>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <a onClick={handleClick}>
      <Container width={width}>{renderContent()}</Container>
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
