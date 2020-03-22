import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { selectedMovieId } from "../../redux/actions/index";
import {
  Container,
  DetailContainer,
  Header,
  Plot
} from "./MoveSliderInfo.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const MovieSliderInfo = props => {
  console.log("movieInfo", props.movie.movie.title);

  const handleClick = () => {
    console.log("info", props.movie.movie.title);

    props.selectedMovieId(props.movie.movie.id);
    props.history.push(`/show-movie/${props.movie.movie.id}`);
  };
  const plotDetails = plot => {
    if (plot.length > 200) {
      return plot.slice(0, 200) + "...";
    }
    return plot;
  };

  return (
    <Container>
      <Header>{props.movie.movie.title}</Header>
      <Plot>{plotDetails(props.movie.movie.overview)}</Plot>
      <DetailContainer>
        <a onClick={handleClick}>
          <Button title="Details" />
        </a>

        <div style={{ fontSize: "1.5rem" }}>
          <div style={{ marginBottom: "-3px" }}>
            {props.movie.movie.release_date.slice(0, 4)}
          </div>
          <div style={{ marginTop: "-3px" }}>
            {props.movie.movie.runTime} min
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: "1.4rem",
              marginRight: "0.5rem",
              color: "orange"
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div style={{ fontSize: "1.4rem" }}>{props.movie.movie.vote}</div>
        </div>
      </DetailContainer>
    </Container>
  );
};

export default compose(
  withRouter,
  connect(null, {
    selectedMovieId: selectedMovieId
  })
)(MovieSliderInfo);
