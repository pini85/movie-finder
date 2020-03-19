import React from "react";
import { connect } from "react-redux";
import MovieSliderInfo from "../movie-slider-info/MovieSliderInfo.component";
import { Container } from "./MovieSlider.styles";
import styled from "styled-components";

const movieSlider = props => {
  console.log(props);

  // const styleContainer = {
  //   height: "48rem",

  //   background: `url(https://image.tmdb.org/t/p/w1280//${props.movie.backdrop_path})`,
  //   backgroundSize: "100% 60%",
  //   backgroundRepeat: "cover",
  //   color: "var(--text-white)",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "flex-end",

  //   backgroundAttachment: "fixed"
  // };

  const Container = styled.div`
    height: 48rem;
    background: url(https://image.tmdb.org/t/p/w1280//${props.movie.backdrop_path});

    background-size: 100% 70%;
    background-repeat: cover;
    color: var(--text-white);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-attachment: fixed;
  `;

  return (
    <Container>
      <MovieSliderInfo
        title={props.movie.title}
        plot={props.movie.overview}
        releaseDate={props.movie.release_date}
        runTime={props.movie.runtime}
        vote={props.movie.vote_average}
      />
    </Container>
  );
};

export default movieSlider;
