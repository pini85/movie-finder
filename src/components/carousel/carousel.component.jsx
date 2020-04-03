import React, { useEffect } from "react";
import { TrailerContainer } from "./Carousel.styles";
import YouTube from "react-youtube";
import "./carousel.styles.css";
import { connect } from "react-redux";

import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
import MovieCastCarousel from "../MovieCastCarousel/MovieCastCarousel.component";
const Carousel = props => {
  const optsYouTube = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    autoplaySpeed: 4000,
    // fade: true,
    pauseOnHover: true,
    lazyLoad: true
  };
  const styleContainer = {
    display: "flex",
    justifyContent: "center"
  };

  const category = () => {
    switch (props.type) {
      case "trailers":
        return (
          props.trailers &&
          props.trailers.map(trailer => {
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
          props.movies &&
          props.movies.map(movie => {
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
          props.movieCast &&
          props.movieCast.map(cast => {
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
const mapStateToProps = state => ({
  movies: state.movieSlider,
  trailers: state.trailers
});

export default connect(mapStateToProps)(Carousel);
