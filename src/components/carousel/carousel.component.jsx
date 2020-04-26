import React, { useEffect } from "react";
import styled from "styled-components";
import { TrailerContainer } from "./Carousel.styles";
import YouTube from "react-youtube";
import "./carousel.styles.css";
import { connect } from "react-redux";

import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
import MovieCastCarousel from "../MovieCastCarousel/MovieCastCarousel.component";
import ReviewsCarousel from "../ReviewsCarousel/ReviewsCarousel.component";
import { CarouselStyling } from "./Carousel.styles";
const Carousel = ({
  type,
  trailers,
  movies,
  reviews,
  movieCast,
  slidesToShow,
  slidesToScroll,
  autoplay,
  fade,
  color,
}) => {
  const Test = styled(Slider)`
    & .slick-slider.slick-initialized {
      padding: 0 14vw;
    }
  `;
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
    lazyLoad: false,
  };
  const styleContainer = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  const category = () => {
    switch (type) {
      case "trailers":
        return (
          trailers &&
          trailers.map((trailer) => {
            return (
              <div key={trailer.id}>
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
      case "reviews":
        return (
          reviews &&
          reviews.results.map((review) => {
            return (
              <ReviewsCarousel
                author={review.author}
                content={review.content}
              />
            );
          })
        );
    }
  };

  return (
    <div style={styleContainer}>
      <CarouselStyling color={color}>
        <Slider {...settings}>{category()}</Slider>
      </CarouselStyling>
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movieSlider,
  trailers: state.trailers,
  reviews: state.displayMovie.reviews,
});

export default connect(mapStateToProps)(Carousel);
