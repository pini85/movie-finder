import React from "react";
import "./carousel.styles.css";
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
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true
  };
  const styleContainer = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem"
  };

  return (
    <div style={styleContainer}>
      <Slider {...settings}>
        {props.movies.length > 0 &&
          props.movies.map(movie => {
            return (
              <div className="hi">
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
