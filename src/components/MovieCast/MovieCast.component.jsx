import React from "react";
import { connect } from "react-redux";

import Carousel from "../carousel/carousel.component";

const MovieCast = ({ cast }) => {
  return (
    <>
      <Carousel
        movieCast={cast}
        type="movieCast"
        slidesToShow={5}
        slidesToScroll={5}
        autoPlay={false}
        fade={false}
      ></Carousel>
    </>
  );
};

const mapStateToProps = (state) => ({
  cast: state.displayMovie.cast,
});

export default connect(mapStateToProps)(MovieCast);
