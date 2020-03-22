import React, { useEffect } from "react";

import MovieSliderInfo from "../movie-slider-info/MovieSliderInfo.component";

import styled from "styled-components";

const movieSlider = props => {
  console.log("movieslider", props.movie.title);

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
      <MovieSliderInfo movie={props} />
    </Container>
  );
};

export default movieSlider;
