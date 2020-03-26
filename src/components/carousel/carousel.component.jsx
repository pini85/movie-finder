import React, { useEffect } from "react";
import "./carousel.styles.css";
import { connect } from "react-redux";

import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
const Carousel = props => {
  console.log("carousel", props.movies);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true
  };
  const styleContainer = {
    display: "flex",
    justifyContent: "center"
  };

  return (
    <div style={styleContainer}>
      <Slider {...settings}>
        {props.movies &&
          props.movies.map(movie => {
            return (
              <div key={movie.id}>
                <MovieSlider movie={movie}></MovieSlider>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
const mapStateToProps = state => ({
  movies: state.movieSlider
});

export default connect(mapStateToProps)(Carousel);
