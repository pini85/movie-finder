import React from "react";
import {
  Container,
  DetailContainer,
  Header,
  Plot
} from "./MoveSliderInfo.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
const MovieSliderInfo = ({ title, plot, releaseDate, runTime, vote }) => {
  const plotDetails = plot => {
    if (plot.length > 200) {
      return plot.slice(0, 200) + "...";
    }
    return plot;
  };

  return (
    <Container>
      <Header>{title}</Header>
      <Plot>{plotDetails(plot)}</Plot>
      <DetailContainer>
        <Button title="details" />

        <div style={{ fontSize: "1.5rem" }}>
          <div style={{ marginBottom: "-3px" }}>{releaseDate.slice(0, 4)}</div>
          <div style={{ marginTop: "-3px" }}>{runTime} min</div>
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
          <div style={{ fontSize: "1.4rem" }}>{vote}</div>
        </div>
      </DetailContainer>
    </Container>
  );
};

export default MovieSliderInfo;
