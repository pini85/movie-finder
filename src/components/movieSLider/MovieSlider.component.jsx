import React, { useEffect } from "react";

import MovieSliderInfo from "../movie-slider-info/MovieSliderInfo.component";

import styled from "styled-components";

const movieSlider = props => {
  // debugger;
  console.log("MOVIESLIDER", props);

  const test = () => {
    console.log("IN TEST");
    console.log(props.movie);
  };

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
      <button onClick={test}>CLICK ME</button>
      <MovieSliderInfo movie={props.movie} />
    </Container>
  );
};

export default movieSlider;
