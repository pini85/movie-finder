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
  const styleContainer = {
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    width: "80%",
    marginBottom: "3rem",
    borderRadius: "8px",
    padding: "2rem"
  };
  const styleDetailContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "24rem",
    marginTop: "2rem"
  };
  return (
    <Container>
      <Header>{title}</Header>
      <Plot>{plotDetails(plot)}</Plot>
      <DetailContainer>
        <Button title="details" />

        <div>
          <div style={{ marginBottom: "-3px" }}>{releaseDate.slice(0, 4)}</div>
          <div style={{ marginTop: "-3px" }}>{runTime} min</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>{vote}</div>
      </DetailContainer>
    </Container>
  );
};

export default MovieSliderInfo;
