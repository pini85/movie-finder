import React from "react";
import { connect } from "react-redux";
import Carousel from "../carousel/carousel.component";

import {} from "./Reviews.styles";
const Reviews = ({ color }) => {
  return (
    <>
      <Carousel
        type="reviews"
        color={color}
        slidesToShow={1}
        slidesToScroll={1}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  reviews: state.displayMovie.reviews,
  color: state.displayMovie.colors.vibrant,
});
export default connect(mapStateToProps)(Reviews);
