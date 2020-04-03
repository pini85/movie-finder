import React from "react";
import { connect } from "react-redux";

import { Container, Img } from "./MovieCastCarousel.styles";

const MovieCastCarousel = props => {
  return (
    <Container>
      <Img src={`http://image.tmdb.org/t/p/w92/${props.profile}`} alt="" />
      <div>{props.name}</div>
      <div>Played as : {props.character}</div>
    </Container>
  );
};

const mapStateToProps = state => ({
  colors: state.displayMovie.colors
});
export default connect(mapStateToProps)(MovieCastCarousel);
