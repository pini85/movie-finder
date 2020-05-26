import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "../carousel/carousel.component";
import useWidth from "../../hooks/useWidth.hooks";

const MovieCast = ({ cast, colors }) => {
  const width = useWidth().width;

  const styling = {
    padding: "0 4rem",
  };
  const responsive = () => {
    switch (true) {
      case width < 500:
        return 2;
      case width < 800:
        return 3;
      case width < 1400:
        return 5;
      default:
        return 6;
    }
  };
  return (
    <>
      <Carousel
        movieCast={cast}
        type="movieCast"
        slidesToShow={responsive()}
        slidesToScroll={responsive()}
        autoPlay={false}
        fade={false}
        styling={styling}
        color={colors.vibrant}
        activeDotColor={colors.darkMuted}
        dotsColor={colors.lightMuted}
      ></Carousel>
    </>
  );
};

const mapStateToProps = (state) => ({
  cast: state.displayMovie.cast,
  colors: state.displayMovie.colors,
});

export default connect(mapStateToProps)(MovieCast);
