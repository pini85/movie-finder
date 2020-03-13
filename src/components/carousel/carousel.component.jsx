import React from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
const Carousel = props => {
  console.log(props);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div>
      <Slider {...settings}>
        {props.movies.length > 0 &&
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
  movies: state.popularMovies
});

export default connect(mapStateToProps)(Carousel);
