import React from "react";
import { connect } from "react-redux";

import Carousel from "../carousel/carousel.component";

const MovieCast = ({ cast, color }) => {
  const styling = {
    padding: "0 4rem",
  };
  console.log(styling.padding);

  return (
    <>
      <Carousel
        movieCast={cast}
        type="movieCast"
        slidesToShow={6}
        slidesToScroll={6}
        autoPlay={false}
        fade={false}
        styling={styling}
        color={color}
      ></Carousel>
    </>
  );
};

const mapStateToProps = (state) => ({
  cast: state.displayMovie.cast,
  color: state.displayMovie.colors.vibrant,
});

export default connect(mapStateToProps)(MovieCast);
