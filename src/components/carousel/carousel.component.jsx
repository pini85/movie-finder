import React, { useEffect } from "react";
import { TrailerContainer } from "./Carousel.styles";
import YouTube from "react-youtube";
import "./carousel.styles.css";
import { connect } from "react-redux";

import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
import MovieCastCarousel from "../MovieCastCarousel/MovieCastCarousel.component";
const Carousel = ({
  type,
  trailers,
  movies,
  movieCast,
  slidesToShow,
  slidesToScroll,
  autoplay,
  fade,
}) => {
  const optsYouTube = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: 4000,
    fade: fade,
    pauseOnHover: true,
    lazyLoad: true,
  };
  const styleContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const category = () => {
    switch (type) {
      case "trailers":
        return (
          trailers &&
          trailers.map((trailer) => {
            return (
              <div className="test">
                <TrailerContainer>
                  <YouTube
                    videoId={trailer.key}
                    opts={optsYouTube}
                    // onReady={_onReadyYouTube}
                  />
                </TrailerContainer>
              </div>
            );
          })
        );
      case "movieSlider":
        return (
          movies &&
          movies.map((movie) => {
            // debugger;
            return (
              <div key={movie.id}>
                <MovieSlider movie={movie}></MovieSlider>
              </div>
            );
          })
        );
      case "movieCast":
        return (
          movieCast &&
          movieCast.map((cast) => {
            return (
              <MovieCastCarousel
                name={cast.name}
                profile={cast.profile_path}
                character={cast.character}
              />
            );
          })
        );
    }
  };

  return (
    <div style={styleContainer}>
      <Slider {...settings}>{category()}</Slider>
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movieSlider,
  trailers: state.trailers,
});

export default connect(mapStateToProps)(Carousel);
