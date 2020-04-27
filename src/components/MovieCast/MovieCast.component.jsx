import React from "react";
import { connect } from "react-redux";

import Carousel from "../carousel/carousel.component";

const MovieCast = ({ cast, colors }) => {
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
