import React from "react";
import { connect } from "react-redux";
import Carousel from "../carousel/carousel.component";
import { Container } from "./Reviews.styles";

import {} from "./Reviews.styles";
const Reviews = ({ colors, isSecretSequence }) => {
  return (
    <Container
      borderColor={colors.vibrant}
      fontColor={colors.darkMuted}
      secretSequence={isSecretSequence}
    >
      <Carousel
        type="reviews"
        color={colors.vibrant}
        slidesToShow={1}
        slidesToScroll={1}
        fade={true}
      />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  reviews: state.displayMovie.reviews,
  colors: state.displayMovie.colors,
  isSecretSequence: state.isSecretSequence,
});
export default connect(mapStateToProps)(Reviews);
