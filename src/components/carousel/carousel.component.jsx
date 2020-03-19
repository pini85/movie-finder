import React from "react";
import "./carousel.styles.css";
import { connect } from "react-redux";

import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
const Carousel = props => {
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
              <div>
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
