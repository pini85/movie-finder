import React from "react";
import { connect } from "react-redux";
import MovieSliderInfo from "../movie-slider-info/MovieSliderInfo.component";

const movieSlider = props => {
  console.log(props);
  const styleContainer = {
    height: "52rem",

    background: `url(https://image.tmdb.org/t/p/w1280//${props.movie.backdrop_path}) `,
    backgroundSize: "100% 70%",
    /* background-position: center 30%; */
    backgroundRepeat: "fixed",
    color: "var(--text-white)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",

    backgroundAttachment: "fixed"
  };

  return (
    <div style={styleContainer} className="movieSlider">
      <MovieSliderInfo
        title={props.movie.title}
        plot={props.movie.overview}
        releaseDate={props.movie.release_date}
        runTime={props.movie.runtime}
        vote={props.movie.vote_average}
      />
    </div>
  );
};

export default movieSlider;
