import React, { useEffect } from "react";

import MovieSliderInfo from "../movie-slider-info/MovieSliderInfo.component";

import styled from "styled-components";

const movieSlider = (props) => {
  // debugger;

  const test = () => {};

  const Container = styled.div`
    height: 50rem;
    background: url(https://image.tmdb.org/t/p/w1280//${props.movie.backdrop_path});
    background-size: cover;
    color: var(--text-white);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  `;

  return (
    <Container>
      <button onClick={test}>CLICK ME</button>
      <MovieSliderInfo movie={props.movie} />
    </Container>
  );
};

export default movieSlider;
